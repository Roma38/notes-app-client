import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

import { Routes } from "./constants";
import { getPosts } from "./store/actions/posts";
import { useDocumentTitle } from "./customHooks";
import HomePage from "./components/HomePage";
import AddPostPage from "./components/AddPostPage";
import PostPage from "./components/PostPage";
import Message from "./components/Message";
import NotFoundPage from "./components/NotFoundPage"



function App() {
  const dispatch = useDispatch();
  const { loadingState } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useDocumentTitle();

  return (
    <div className="application">
      <Message />

      <Dimmer active={loadingState === "loading"} inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <Switch>
        <Route path={Routes.Root} exact>
          <HomePage />
        </Route>

        <Route path={Routes.AddPostPage}>
          <AddPostPage />
        </Route>

        <Route path={Routes.PostPage}>
          <PostPage />
        </Route>

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
