import {
    RECEIVE_COMMENT,
    RECEIVE_PIN_COMMENTS,
    REMOVE_COMMENT,
  } from '../actions/comment_actions';
  
  const commentReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState = Object.assign({}, state);
  
    let comments = undefined;
    if(action.comments){
      comments = action.comments.data
    }
  
    let nextState = {};
    switch(action.type){
      case RECEIVE_PIN_COMMENTS:
        console.log("asd")
          return {...action.comments};
      case RECEIVE_COMMENT:
        console.log("asd")
        return action.comment;
      case REMOVE_COMMENT:
        delete newState[action.id]
        return newState;
      default:
        return state;
    }
  }
  
  export default commentReducer;