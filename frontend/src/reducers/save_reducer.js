import {
    RECEIVE_SAVE,
    RECEIVE_SAVES,
    REMOVE_SAVE
  } from '../actions/save_actions';
  
  const saveReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState = Object.assign({}, state);
  
    let saves = undefined;
    if(action.saves){
      saves = action.saves.data
    }
  
    let nextState = {};
    switch(action.type){
      case RECEIVE_SAVES:
          return {...action.saves};
      case RECEIVE_SAVE:
        return action.save;
      case REMOVE_SAVE:
        delete newState[action.id]
        return newState;
      default:
        return state;
    }
  }
  
  export default saveReducer;