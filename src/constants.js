export const Routes = {
  Root: "/",
  AddPostPage: "/add-post",
  PostPage: "/post/:id",
};

export const PageTitles = {
  [Routes.Root]: "Главная",
  [Routes.AddPostPage]: "Добавить запись",
  [Routes.PostPage]: postTitle => postTitle
};
