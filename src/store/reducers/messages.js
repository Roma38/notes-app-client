import { SHOW_MESSAGE, CLEAR_MESSAGE } from "../actions/messages";

const initialState = {
  isShown: false,
  isPositive: null,
  header: "",
  body: ""
};

export const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MESSAGE:
      const { isPositive, header, body } = payload;
      return { isShown: true, isPositive, header, body };
    case CLEAR_MESSAGE:
      return initialState;

    default:
      return state;
  }
};
