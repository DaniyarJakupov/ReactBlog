import React, { Component } from 'react';
import { connect } from 'react-redux'; // to make Container from Component. Container can call action creators.
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';

// Class based Component (Container)
class  PostsIndex extends  Component {
   // Life cycle method that React will call automatically
   // whenever component is about to be rendered for the first time
   componentWillMount() {
      console.log("time to call action creator to fetch posts");
      // action creator call
      this.props.fetchPosts();
   }

   render(){
      return (
         <div  className="ui main text container">
            <div className="ui header">
               All Posts
               <Link to="posts/new" className="ui right floated grey basic button">
                  New Post
               </Link>
            </div>
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
