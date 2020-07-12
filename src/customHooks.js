import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { Routes, PageTitles } from "./constants";

const PAGE_NOT_FOUND_TITLE = "Страница не найдена";

const setDocumentTitle = (title) => {
  document.title = title;
}

export function useDocumentTitle() {
  const posts = useSelector(state => state.posts.items);

  const matchedRoute = [
    useRouteMatch(Routes.Root),
    useRouteMatch(Routes.AddPostPage),
    useRouteMatch(Routes.PostPage),
  ].find(route => route && route.isExact === true);

  useEffect(() => {
    if (!matchedRoute) {
      setDocumentTitle(PAGE_NOT_FOUND_TITLE);
      return;
    }

    if (typeof PageTitles[matchedRoute.path] === "string") {
      setDocumentTitle(PageTitles[matchedRoute.path]);
      return;
    }

    switch (matchedRoute.path) {
      case Routes.PostPage:
        if (posts.length) {
          const { id } = matchedRoute.params;
          const title = posts.find(({ _id }) => _id === id).title;
          setDocumentTitle(PageTitles[Routes.PostPage](title));
        }
        break;
      default:
        setDocumentTitle(PAGE_NOT_FOUND_TITLE);
    }
  }, [matchedRoute, posts]);
}