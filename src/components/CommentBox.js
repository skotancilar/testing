import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         comment: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleChange(e) {
      this.setState({ comment: e.target.value })
   }

   handleSubmit(e) {
      e.preventDefault();

      this.props.saveComment(this.state.comment);

      this.setState({ comment: '' })
   }

   render() {

      return (
         <div>
            <form onSubmit={this.handleSubmit} action="">
               <h4>Add a Comment</h4>
               <textarea
                  onChange={this.handleChange}
                  value={this.state.comment} name="comment"
                  id="" cols="30" rows="10" />
               <div>
                  <button>Submit Content</button>
               </div>
            </form>
            <button
               onClick={this.props.fetchComments}
               className="fetch-comments"
            >
               Fetch Comment
            </button>
         </div>
      )
   }
}

export default connect(null, actions)(requireAuth(CommentBox))