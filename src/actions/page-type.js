import { UPDATE_PAGE_TYPE } from "../constants";

export const updatePageType = pageType => ({
  type: UPDATE_PAGE_TYPE,
  payload: pageType
});