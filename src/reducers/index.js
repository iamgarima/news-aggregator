import { combineReducers } from 'redux';
import geolocationReducer from './geolocation';
import languageReducer from './language';

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
  language: languageReducer
});

export default rootReducer;