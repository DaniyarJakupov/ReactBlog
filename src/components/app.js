import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
         <div className="ui secondary pointing menu">
            <div className="ui container">
               <div className="header item">
                  <i className="write icon"></i> Blog
               </div>
               <Link to="/" className="link item">
                  Home
               </Link>
            </div>
         </div>
         {/* render nested routes */}
         {this.props.children}
      </div>
    );
  }
}
