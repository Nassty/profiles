import {combineReducers} from 'redux';
import selected from './selected';
import items from './items';

const reducers = combineReducers({
  selected,
  items
});

export default reducers;
