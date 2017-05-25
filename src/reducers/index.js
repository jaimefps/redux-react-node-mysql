// redux
import { combineReducers } from 'redux';

// import all of the reducers
import boolean from './boolean-reducer';
import async from './async-reducer';
import cats from './dummy-data';

// combine all the reducers that compose create the Store
const allReducers = combineReducers({
  boolean,
  async,
  cats,
});

export default allReducers;
