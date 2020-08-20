import { UPDATE_TOPIC } from "../constants";

export const updateTopic = topic => ({
  type: UPDATE_TOPIC,
  payload: topic
});