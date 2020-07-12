import {
  POSTS_LOADING,
  POSTS_LOAD_SUCCEED,
  POSTS_LOAD_FAILED,
  ADD_POST,
  ADD_POST_REQUEST,
  DELETE_POST,
  DELETE_POST_REQUEST,
  REQUEST_REJECTED
} from "../actions/posts.js";

const initialState = {
  loadingState: null,
  error: null,
  isWaitingResponse: false,
  items: []
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_LOADING:
      return { ...state, error: null, loadingState: "loading", isWaitingResponse: true };
    case POSTS_LOAD_SUCCEED:
      return { 
        ...state, 
        error: null, 
        loadingState: "succeed", 
        items: payload, 
        isWaitingResponse: false 
      };
    case POSTS_LOAD_FAILED:
      return {
        ...state,
        loadingState: "failed",
        error: payload,
        isWaitingResponse: false
      };
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, payload],
        isWaitingResponse: false        
      };
    case ADD_POST_REQUEST:
      return {
        ...state,
        isWaitingResponse: true
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== payload._id),
        isWaitingResponse: false
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        isWaitingResponse: true
      };
    case REQUEST_REJECTED:
      return {
        ...state,
        isWaitingResponse: false
      };
    default:
      return state;
  }
};
