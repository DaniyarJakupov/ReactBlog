import React, { Component } from 'react';
import { connect } from 'react-redux'; // to make Container from Component
import {fetchPosts} from '../actions/index';

// Class based Component (Container)
class  PostsIndex extends  Component {
   // Life cycle method that React will call automatically
   // whenever component is about to be rendered for the first time
   componentWillMount() {
      console.log("time to call action creator to fetch posts");
      this.props.fetchPosts();
   }

   render(){
      return (
         <div>
            List of posts
         </div>
      )
   }
}

// Take component PostsIndex  take function mapStateToProps()
// and take function mapDispatchToProps() then
//  promote PostsIndex component to Container  (component that has state).
// Make return values of above functions (e.g. fetchPosts) available
// as a props in PostsIndex class.
export default  connect(null, { fetchPosts })(PostsIndex);
