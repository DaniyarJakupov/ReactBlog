import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/index';

class PostShow extends Component {
   componentWillMount() {
      // action creator call
      this.props.fetchPost(this.props.params.id);
   }
   render() {
      if(!this.props.post){
         return <div className="loader">Loading...</div>
      }

      return(
         <div className="ui main text container segment">
          <div className="ui huge header">
              {this.props.post.title}
          </div>
          <div className="ui top attached">
              <div className="item">
                  <img src={this.props.post.image} className="ui centered rounded image"></img>
                  <div className="content">
                      <span>{this.props.post.created.substring(0,10)}</span>
                  </div>
                  <div className="description">
                      <p>{this.props.post.content}</p>
                  </div>
              </div>
          </div>
          <form id="delete" action="" method="POST" className="ui form">
              <button className="ui red basic button">Delete Post</button>
          </form>
      </div>
      )
   }
}

function mapStateToProps(state){
   return {post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
