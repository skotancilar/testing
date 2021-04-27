import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root';

let wrapped;

beforeEach(() => {
   wrapped = mount(
      <Root>
         <CommentBox />
      </Root>

   )
})

afterEach(() => {
   wrapped.unmount()
})

it('has a textarea', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
})
it('has a button', () => {
   expect(wrapped.find('button').length).toEqual(2);
})

describe('the textarea', () => {
   beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
         target: { value: 'new comment' }
      });
      wrapped.update();
   })

   it('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
   })

   it('cleans textarea content on submit', () => {
      wrapped.find('form').simulate('submit')
         .update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
   })
})
