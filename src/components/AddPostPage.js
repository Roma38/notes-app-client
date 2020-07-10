import React, { useState } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postPost } from "../store/actions/posts";

function AddPost() {
  const [post, setPost] = useState({ title: "", body: "", author: "" });
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const submitHandler = () => {
    setIsLoading(true)
    dispatch(postPost(post))
  };

  return (
    <Form className="add-edit-form" onSubmit={submitHandler}>
      <Header as="h1" textAlign="center" content="Добавить запись" />

      <Form.Input
        label="Заголовок:"
        value={post.title}
        onChange={(e, data) => setPost({ ...post, title: data.value })}
        required
      />
      <Form.TextArea
        label="Контент:"
        value={post.description}
        onChange={(e, data) => setPost({ ...post, body: data.value })}
        required
      />
      <Form.Input
        label="Автор:"
        value={post.author}
        onChange={(e, data) => setPost({ ...post, author: data.value })}
        required
      />

      <div className="buttons-align-wrapper">
        <Button type="submit" positive loading={isLoading}>Save</Button>
        <Button as={Link} to={"/"} negative>Cancel</Button>
      </div>
    </Form>
  );
}
export default AddPost;
