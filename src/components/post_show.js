import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/index';
import {deletePost} from '../actions/index';

class PostShow extends Component {
   static contextTypes = {
      router: PropTypes.object
   };

   componentWillMount() {
      // action creator call
      this.props.fetchPost(this.props.params.id);
   }

   onDeleteClick(){
      this.props.deletePost(this.props.params.id)
         .then(() => {
            this.context.router.push('/');
         })
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
          <div className="extra">
              <Link to="/" className="ui floated blue basic button">
                 Back
              </Link>
              <button
                 className="ui right floated red basic button"
                 onClick={this.onDeleteClick.bind(this)}>
                 Delete Post
              </button>
           </div>
      </div>
      )
   }
}

function mapStateToProps(state){
   return {post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
