import React, { useState } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { postPost } from "../store/actions/posts";

function AddPost() {
  const [post, setPost] = useState({ title: "", body: EditorState.createEmpty(), author: "" });
  const dispatch = useDispatch();
  const authors = useSelector(({ posts }) => new Set(posts.items.map(({ author }) => author)));

  const submitHandler = () => {
    dispatch(postPost({ ...post, body: draftToHtml(convertToRaw(post.body.getCurrentContent())) }))
  };

  return (
    <Form className="add-edit-form" onSubmit={submitHandler}>
      <Header as="h1" textAlign="center" content="Добавить запись" />
      <Form.Input
        label="Заголовок:"
        value={post.title}
        onChange={(e, data) => setPost({ ...post, title: data.value })}
        required
        maxLength={70}
      />
      <Form.Field required>
        <label>Контент:</label>
        <Editor
          editorState={post.body}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={data => setPost({ ...post, body: data })}
        />
      </Form.Field>
      <Form.Input
        label="Автор:"
        list='authors'
        value={post.author}
        onChange={(e, data) => setPost({ ...post, author: data.value })}
        required
        maxLength={70}
      />
      <datalist id='authors'>
        {Array.from (authors).map(author => <option key={author} value={author} />)}
      </datalist>

      <div className="buttons-align-wrapper">
        <Button type="submit" positive>Сохранить</Button>
        <Button as={Link} to={"/"} primary>Назад</Button>
      </div>
    </Form>
  );
}
export default AddPost;
