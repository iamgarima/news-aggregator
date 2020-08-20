import { combineReducers } from 'redux';
import geolocationReducer from './geolocation';
import languageReducer from './language';
import topicReducer from './topic';
import pageTypeReducer from './page-type';

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
  language: languageReducer,
  topic: topicReducer,
  pageType: pageTypeReducer
});

export default rootReducer;