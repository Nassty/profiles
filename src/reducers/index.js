import {combineReducers} from 'redux';
import selected from './selected';
import items from './items';
import users from './users';

const reducers = combineReducers({
  selected,
  items,
  users
});

export default reducers;
