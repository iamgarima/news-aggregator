import { combineReducers } from 'redux';
import geolocationReducer from './geolocation';

const rootReducer = combineReducers({
  geolocation: geolocationReducer
});

export default rootReducer;