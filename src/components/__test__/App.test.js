import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach(() => {
   wrapped = shallow(<App />);
})

it('shows a comment box', () => {
   // eslint-disable-next-line jest/valid-expect
   expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', () => {
   // eslint-disable-next-line jest/valid-expect
   expect(wrapped.find(CommentList).length).toEqual(1)
})

