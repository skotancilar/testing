import React, { Fragment, Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'actions'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// eslint-disable-next-line import/no-anonymous-default-export
class App extends Component {

   renderButton() {
      if (this.props.auth) {
         return (
            <button
               onClick={() => this.props.changeAuth(false)}>
               Sign Out
            </button>
         );
      } else {
         return (
            <button
               onClick={() => this.props.changeAuth(true)}>
               Sign In
            </button>
         )
      }
   }

   renderHeader() {
      return (
         <ul>
            <li>
               <Link to="/">Home</Link></li>
            <li>
               <Link to="/post">Post Comment</Link></li>
            <li>
               {this.renderButton()}
            </li>
         </ul>
      )
   }

   render() {
      return (
         <Fragment>
            {this.renderHeader()}
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
         </Fragment >)
   }
}
function mapStateToProps(state) {
   return { auth: state.auth }

}
export default connect(mapStateToProps, actions)(App);