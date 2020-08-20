import { combineReducers } from 'redux';
import geolocationReducer from './geolocation';
import languageReducer from './language';
import topicReducer from './topic';

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
  language: languageReducer,
  topic: topicReducer
});

export default rootReducer;