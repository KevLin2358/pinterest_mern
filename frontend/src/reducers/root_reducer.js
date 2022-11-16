import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import pin from './pin_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  pin
});

export default RootReducer;