import { combineReducers } from 'redux';
import contacts from '../reducer/contacts';
import opening from '../reducer/opening';
import filter from '../reducer/filter';

const reducer = combineReducers({
  contacts,
  opening,
  filter
});
export default reducer;
