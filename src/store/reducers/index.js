import { combineReducers } from "redux";
import { postsReducer as posts } from "./posts";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
