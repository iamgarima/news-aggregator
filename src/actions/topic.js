import { UPDATE_TOPIC } from "../constants";

/* Input: topic e.g. "business"
 * Output: action object
 */
export const updateTopic = topic => ({
  type: UPDATE_TOPIC,
  payload: topic
});