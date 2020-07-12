import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { Routes } from "./constants";
import { getPosts } from "./store/actions/posts";
import { useDocumentTitle } from "./customHooks";
import HomePage from "./components/HomePage";
import AddPostPage from "./components/AddPostPage";
import PostPage from "./components/PostPage";
import Message from "./components/Message";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useDocumentTitle();

  return (
    <div className="application">
      <Message />

      <Route path={Routes.Root} exact>
        <HomePage />
      </Route>

      <Route path={Routes.AddPostPage}>
        <AddPostPage />
      </Route>

      <Route path={Routes.PostPage}>
        <PostPage />
      </Route>
    </div>
  );
}

export default App;
