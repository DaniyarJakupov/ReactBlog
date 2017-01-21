import axios from 'axios'; // library for ajax request

export const FETCH_POSTS =  "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";
//
const root_url = 'https://blogappv2.herokuapp.com/posts';
//const local = 'http://localhost:3000/posts'

export function fetchPosts(){
   const url = root_url;//`${ROOT_URL}/posts${API_KEY}`;//root_url;
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

export function createPost(props){
   const url = root_url;//`${ROOT_URL}/posts${API_KEY}`;//root_url;
   const request = axios.post(url, props);
   return {
      type: CREATE_POST,
      payload: request
   }
}

export function fetchPost(id){
   const url = `${root_url}/${id}`; //`${ROOT_URL}/posts/${id}${API_KEY}`;//`${root_url}/posts/${id}`;
   const request = axios.get(url); // returns promise
   return {
      type: FETCH_POST,
      payload: request
   }
}

export function deletePost(id){
   const url = `${root_url}/${id}`;
   const request = axios.delete(url); // returns promise
   return {
      type: DELETE_POST,
      payload: request
   }
}
