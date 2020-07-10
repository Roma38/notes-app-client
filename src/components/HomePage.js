import React, { useState } from "react";
import { Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const posts = useSelector(state => state.posts);

  return (
    <>
      <Header as="h1" textAlign="center" content="Главная" />
      <List bulleted>
        {posts.items.map(post => <List.Item key={post._id}>
          <List.Header as={Link} to={`/post/${post._id}`}>{post.title}</List.Header>
          {post.author} {new Date(post.createdAt).toLocaleString()}
        </List.Item>)}
      </List>
    </>
  );
}
export default HomePage;