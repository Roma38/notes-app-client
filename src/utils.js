export function setDocumentTitle(pathname, posts) {
  if(pathname === "/") {
    document.title = "Главная";
  } else if (pathname === "/add-post") {
    document.title = "Добавить запись";
  } else if (pathname.startsWith("/post/")){
    if (posts.length) {
      const id = pathname.substring(pathname.lastIndexOf("/") + 1);
      const title = posts.find(({ _id }) => _id === id).title;
      document.title = title;
    }    
  } else {
    document.title = "Страница не найдена";
  }
}