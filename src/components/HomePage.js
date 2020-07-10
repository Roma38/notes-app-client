import React, { useState } from "react";
import { Header, Card, Image, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const posts = useSelector(state => state.posts.items);

  return (
    <>
      <Header as="h1" textAlign="center" content="Главная" />
      
    </>
  );
}
export default HomePage;