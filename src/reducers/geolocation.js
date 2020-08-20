import { GEOLOCATION_UPDATE_STATUS } from "../constants";

const geolocationReducer = (state = {}, action) => {
  switch(action.type) {
    case GEOLOCATION_UPDATE_STATUS: 
      return { ...state, ...action.payload };
    default: 
      return state;
  };
};

export default geolocationReducer;