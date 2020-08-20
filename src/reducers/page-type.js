import { UPDATE_PAGE_TYPE } from "../constants";

const pageTypeReducer = (state = "", action) => {
  switch(action.type) {
    case UPDATE_PAGE_TYPE:
      return action.payload;
    default:
      return state;
  };
};

export default pageTypeReducer;