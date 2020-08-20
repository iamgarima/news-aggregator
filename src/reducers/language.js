import { UPDATE_LANGUAGE } from "../constants";

const initVal = { 
  code: "en",
  name: "English"
};

const languageReducer = (state = initVal, action) => {
  switch(action.type) {
    case UPDATE_LANGUAGE:
      return action.payload;
    default:
      return state;
  };
};

export default languageReducer;