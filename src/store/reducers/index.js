import { combineReducers } from "redux";
import { postsReducer as posts } from "./posts";
import { messageReducer as message} from "./messages";

const rootReducer = combineReducers({
  posts,
  message
});

export default rootReducer;
