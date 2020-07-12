import React, { useState, useEffect } from "react";
import { Segment, Button, Header, Confirm } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deletePost } from "../store/actions/posts";

function PostPage() {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const [post, setPost] = useState({});
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.loadingState === "succeed") {
      setPost(posts.items.find(({ _id }) => _id === id));
    }
  }, [posts, id]);

  const deleteHandler = () => {
    dispatch(deletePost(id));
  }

  return (
    <Segment className="segment-block" >
      <Header as="h1" textAlign="center" content={post.title} />

      <div
        contentEditable='true'
        dangerouslySetInnerHTML={{ __html: posts.loadingState === "succeed" ? post.body : "" }}
      />
      <div className="post-info">
        <i>Автор: {post.author}</i>
        <p><strong></strong>{new Date(post.createdAt).toLocaleString()}</p>
      </div>

      <div className="buttons-align-wrapper">
        <Button
          onClick={() => setIsConfirmOpen(true)}
          negative
          loading={posts.isWaitingResponse}
          disabled={posts.isWaitingResponse}
        >
          Удалить
        </Button>
        <Button as={Link} to={"/"} primary>Назад</Button>
      </div>
      <Confirm
        content="Удалить запись?"
        cancelButton='Нет!'
        confirmButton="Да"
        open={isConfirmOpen}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={deleteHandler}
      />
    </Segment>
  );
}
export default PostPage;