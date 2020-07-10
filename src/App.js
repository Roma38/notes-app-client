import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import { getPosts } from "./store/actions/posts";
import HomePage from "./components/HomePage";
import AddPostPage from "./components/AddPostPage";



function App() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
      </Route>

      <Route path="/post/:id">
        <PostPage />
      </Route> */}
    </Container>
  );
}

export default App;
