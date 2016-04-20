import { combineReducers } from 'redux';
import contacts from '../reducer/contacts';
import opening from '../reducer/opening';

const reducer = combineReducers({
  contacts,
  opening
});
export default reducer;
