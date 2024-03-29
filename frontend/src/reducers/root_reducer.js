import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import pin from './pin_reducer';
import comment from './comment_reducers';
import board from './board_reducers'
import save from "./save_reducer"
import search from "./search_reducers"
const RootReducer = combineReducers({
  session,
  errors,
  pin,
  comment,
  board,
  save,
  search,
});

export default RootReducer;