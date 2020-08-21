import { GEOLOCATION_UPDATE_STATUS } from "../constants";


/* Input: geolocation details object with two keys - status, error(in case stutus is error)
 *   e.g. { status: "success"}
 *    or  { status: "error", error: { code: 1, message: "Permission Denied" } }
 * Output: action object
 */
export const updateGeolocationStatus = payload => ({
  type: GEOLOCATION_UPDATE_STATUS,
  payload
});