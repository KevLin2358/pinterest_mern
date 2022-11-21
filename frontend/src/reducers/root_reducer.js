import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import pin from './pin_reducer';
import comment from './comment_reducers';
const RootReducer = combineReducers({
  session,
  errors,
  pin,
  comment
});

export default RootReducer;