import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Routes, PageTitles } from "./constants";

export function useDocumentTitle() {
  const posts = useSelector(state => state.posts.items);
  const { pathname } = useLocation();
  // const { id } = useParams();

  useEffect(() => {
    if (pathname === Routes.Root) {
      document.title = PageTitles[Routes.Root];
    } else if (pathname === Routes.AddPostPage) {
      document.title = PageTitles[Routes.AddPostPage];
    } else if (pathname.startsWith("/post/")) {
      if (posts.length) {
        const id = pathname.substring(pathname.lastIndexOf("/") + 1);
        const title = posts.find(({ _id }) => _id === id).title;
        document.title = PageTitles[Routes.PostPage](title);
      }
    } else {
      document.title = "Страница не найдена";
    }
  }, [pathname, posts]);
}