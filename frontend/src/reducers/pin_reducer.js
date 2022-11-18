import {
  RECEIVE_PINS,
  RECEIVE_USER_PINS,
  RECEIVE_PIN,
  REMOVE_PIN
} from '../actions/pin_actions';

const pinReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);

  let pins = undefined;
  if(action.pins){
    pins = action.pins.data
  }

  let nextState = {};
  switch(action.type){
    case RECEIVE_PINS:
        return {...action.pins};
    case RECEIVE_USER_PINS:
      pins.forEach((pin) => {
        nextState[pin._id]=pin //question needed 
      })
      return nextState;
    case RECEIVE_PIN:
      return action.pin;
    case REMOVE_PIN:
      delete newState[action.id]
      return newState;
    default:
      return state;
  }
}

export default pinReducer;