import React, { Component } from 'react';
import { connect } from 'react-redux'; // to make Container from Component. Container can call action creators.
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';

// Class based Component (Container)
class  PostsIndex extends  Component {
   // Life cycle method that React will call automatically
   // whenever component is about to be rendered for the first time
   componentWillMount() {
      //console.log("time to call action creator to fetch posts");
      // action creator call
      this.props.fetchPosts();
   }

   renderPosts(){
      //console.log(this.props.posts);
      return this.props.posts.map((post) => {
         //console.log(post)
         return (
            <div className="item" key={post._id}>
               <div className="image">
                  <img src={post.image} />
               </div>
              <div className="content">
                  <span className="header">{post.title}</span>
                  <div className="meta">
                     <span>{post.created.substring(0,10)}</span>
                  </div>
                  <div className="description">
                      {post.content.substring(0, 100)}...
                  </div>
                  <div className="extra">
                      <Link to={"posts/" + post._id} className="ui floated secondary basic button">
                          Read More
                          <i className="right chevron icon"></i>
                      </Link>
                  </div>
                 </div>
             </div>
         );
      });
   }

   render(){
      return (
         <div  className="ui main text container">
            <div className="ui header">
               Posts
               <Link to="posts/new" className="ui right floated grey basic button">
                  New Post
               </Link>
            </div>
            <div className="ui top attached segment">
               <div className="ui divided items">
                  {this.renderPosts()}
               </div>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state){
   return {posts: state.posts.all };
}

// Take component PostsIndex  take function mapStateToProps()
// and take function mapDispatchToProps() then
//  promote PostsIndex component to Container  (component that has state).
// Make return values of above functions (e.g. fetchPosts) available
// as a props in PostsIndex class.
export default  connect(mapStateToProps, { fetchPosts })(PostsIndex);
