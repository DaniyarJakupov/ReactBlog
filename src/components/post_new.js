import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
   render(){
      const {fields: { title, categories, content }, handleSubmit } = this.props; // ES6 syntax for handleSubmit = this.props.handleSubmit
      return (
         <div className="ui main text container segment">
            <div className="ui header large">
               Create A New Post
            </div>
            <form onSubmit={handleSubmit(this.props.createPost)} className="ui form">
               <div className="field">
                  <label htmlFor="title">Title</label>
                  <input name="title" type="text" {...title}/>
               </div>
               <div className="field">
                  <label htmlFor="category">Category</label>
                  <input name="category" type="text" {...categories}/>
               </div>
               <div className="field">
                  <label htmlFor="content">Text</label>
                  <textarea name="content" {...content}/>
               </div>
               <Link to="/" className="ui secondary basic big button">
                  Back
               </Link>
               <button type="submit" className="ui secondary basic big button">Submit</button>
            </form>
         </div>
      );
   }
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// Decorate the form component
export default reduxForm({
   form: 'newPost', // a unique name for this form
   fields: ['title', 'categories', 'content']
}, null, { createPost })(PostNew);
