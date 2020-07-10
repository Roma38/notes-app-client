import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";

import { getPosts } from "./store/actions/posts";
import { setDocumentTitle } from "./utils";
import HomePage from "./components/HomePage";
import AddPostPage from "./components/AddPostPage";
import PostPage from "./components/PostPage";



function App() {
  const posts = useSelector(state => state.posts.items);
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setDocumentTitle(pathname, posts)
  }, [pathname, posts]);

  return (
    <Container className="application">
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/add-post">
        <AddPostPage />
      </Route>

      {/* <Route path="/edit/:id">
        <EditPostPage />
      </Route> */}

      <Route path="/post/:id">
        <PostPage />
      </Route>
    </Container>
  );
}

export default App;
