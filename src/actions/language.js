import { UPDATE_LANGUAGE } from "../constants";

/* Input: language object with two keys - code and name
 *   e.g. { code: "en", name: "English" }
 * Output: action object
 */
export const updateLanguage = language => ({
  type: UPDATE_LANGUAGE,
  payload: language
});