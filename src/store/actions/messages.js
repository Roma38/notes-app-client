export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const clearMessage = () => ({ type: CLEAR_MESSAGE });

export const showMessage = payload => ({
  type: SHOW_MESSAGE,
  payload
});
