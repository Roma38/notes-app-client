import React from "react";
import { Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const posts = useSelector(state => state.posts);

  return (
    <>
      <Header as="h1" textAlign="center" content="Главная" />
      <List bulleted>
        <List.Item>
          <List.Header as={Link} to={`/add-post`}>Добавить запись</List.Header>
        </List.Item>

        {posts.items.map(post => <List.Item key={post._id}>
          <List.Header as={Link} to={`/post/${post._id}`}>{post.title}</List.Header>
          <i>Автор: {post.author}</i>
          <div>{new Date(post.createdAt).toLocaleString()}</div>
        </List.Item>)}
      </List>
    </>
  );
}
export default HomePage;