// Reducer is a function() that takes previous state, the action beeing dispatch and
// returns the new state. Reducer has to be pure function:
// does not modify values of  passed parametres (produce the same output given the same input);
// don’t produce side-effects (Eg: mutate state, make calls to backend)
import { FETCH_POSTS } from '../actions/index';
// State argument is not application state, but the state that this reducer is responsible for.
// This function only will be called, if action occurs
const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action){
   switch(action.type){
   case FETCH_POSTS:
      return { ...state, all: action.payload.data };
   default:
      return state;
   }
}
