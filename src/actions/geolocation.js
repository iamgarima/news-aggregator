import { GEOLOCATION_UPDATE_STATUS } from "../constants";

export const updateGeolocationStatus = payload => ({
  type: GEOLOCATION_UPDATE_STATUS,
  payload
});