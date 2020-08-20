import { UPDATE_LANGUAGE } from "../constants";

export const updateLanguage = language => ({
  type: UPDATE_LANGUAGE,
  payload: language
});