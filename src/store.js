import { createStore } from 'redux'
import rootReducer from './reducers';

// Create and return redux store initialised with passed state along with Redux devtools support 
const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;