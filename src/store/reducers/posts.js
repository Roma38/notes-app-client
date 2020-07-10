import {
  POSTS_LOADING,
  POSTS_LOAD_SUCCEED,
  POSTS_LOAD_FAILED,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from "../actions/posts.js";

const initialState = {
  loadingState: null,
  error: null,
  items: []
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_LOADING:
      return { ...state, loadingState: "loading" };
    case POSTS_LOAD_SUCCEED:
      return { ...state, loadingState: "succeed", items: payload };
    case POSTS_LOAD_FAILED:
      return {
        ...state,
        loadingState: "failed",
        error: payload,
        items: []
      };
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case EDIT_POST:
      return {
        ...state,
        items: state.items.map(item =>
          item._id === payload._id ? payload : item
        )
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== payload._id)
      };

    default:
      return state;
  }
};
