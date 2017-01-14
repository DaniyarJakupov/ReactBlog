import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
   render(){
      const {fields: { title, categories, content }, handleSubmit } = this.props; // ES6 syntax for handleSubmit = this.props.handleSubmit
      return (
         <div className="ui main text container">
            <div className="ui header large">
               Create A New Post
            </div>
            <form onSubmit={handleSubmit(this.props.createPost)} className="ui form">

               <div className={`field ${title.touched && title.invalid ? 'ui red message' : ''}`}>
                  <label htmlFor="title">Title</label>
                  <input name="title" type="text" {...title}/>
                  <div className="error">
                     {title.touched ? title.error : ''}
                  </div>
               </div>

               <div className={`field ${categories.touched && categories.invalid ? 'ui red message' : ''}`}>
                  <label htmlFor="category">Category</label>
                  <input name="category" type="text" {...categories}/>
                  <div className="error">
                     {categories.touched ? categories.error : ''}
                  </div>
               </div>

               <div className={`field ${content.touched && content.invalid ? 'ui red message' : ''}`}>
                  <label htmlFor="content">Text</label>
                  <textarea name="content" {...content}/>
                  <div className="error">
                     {content.touched ? content.error : ''}
                  </div>
               </div>

               <Link to="/" className="ui secondary basic button">
                  Back
               </Link>
               <button type="submit" className="ui secondary basic button">Submit</button>
            </form>
         </div>
      );
   }
}

function validate(values){
   const errors = {};
   if(!values.title || !values.content || !values.categories){
      errors.title = 'Enter title, please';
      errors.categories = 'Enter category, please';
      errors.content = 'Enter text, please';
   }
   return errors;
}
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// Decorate the form component
export default reduxForm({
   form: 'newPost', // a unique name for this form
   fields: ['title', 'categories', 'content'],
   validate
}, null, { createPost })(PostNew);
