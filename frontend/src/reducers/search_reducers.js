import {
    RECEIVE_SEARCHS
  } from '../actions/search_actions';
  
  const searchReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let search = undefined;
    // console.log(search)

    if(action.search){
      // console.log(pins)
        // pins = action.pins.data
    }
  
    let nextState = {};
    switch(action.type){
      case RECEIVE_SEARCHS:
          return {...action.search.data};
    //   case RECEIVE_SAVE:
    //     return action.save;
    //   case REMOVE_SAVE:
    //     delete newState[action.id]
    //     return newState;
      default:
        return state;
    }
  }
  
  export default searchReducer;