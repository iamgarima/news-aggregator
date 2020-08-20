import { UPDATE_TOPIC } from "../constants";

const topicReducer = (state = 'top-news', action) => {
  switch(action.type) {
    case UPDATE_TOPIC:
      return action.payload;
    default:
      return state;
  };
};

export default topicReducer;