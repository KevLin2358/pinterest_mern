import {
    RECEIVE_BOARD,
    RECEIVE_BOARDS,
    REMOVE_BOARD,
  } from '../actions/board_actions';
  
  const boardReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState = Object.assign({}, state);
  
    let boards = undefined;
    if(action.boards){
      boards = action.boards.data
    }
  
    let nextState = {};
    switch(action.type){
      case RECEIVE_BOARDS:
          return {...action.boards};
    //   case RECEIVE_USER_PINS:
    //     boards.forEach((board) => {
    //       nextState[board._id]=board //question needed 
    //     })
    //     return nextState;
      case RECEIVE_BOARD:
        return action.board;
      case REMOVE_BOARD:
        delete newState[action.id]
        return newState;
      default:
        return state;
    }
  }
  
  export default boardReducer;