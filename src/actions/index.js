import axios from 'axios'; // library for ajax request

export const FETCH_POSTS =  "FETCH_POSTS";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=heroofages";

export function fetchPosts(){
   const url = `${ROOT_URL}/posts${API_KEY}`;
   const request = axios.get(url); // returns promise
   return {
      type: FETCH_POSTS,
      payload: request
      // Payload now contains promise as its value.
      // When this function is called, redux-promise (middleware) stops this action;
      // After promise resolves, it creates a new action with unwrapped promise inside
      // and send it to all reducers.
   };
}
