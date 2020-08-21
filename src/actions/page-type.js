import { UPDATE_PAGE_TYPE } from "../constants";


/* Input: page type e.g. "home-page"
 * Output: action object
 */
export const updatePageType = pageType => ({
  type: UPDATE_PAGE_TYPE,
  payload: pageType
});