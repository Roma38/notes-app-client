import React, { useState, useEffect } from "react";
import { Segment, Button, Header, Image } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deletePost } from "../store/actions/posts";
import { history } from "../history";


function PostPage() {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const [post, setPost] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.loadingState === "succeed") {
      setPost(posts.items.find(({ _id }) => _id === id));
    }
  }, [posts, id]);

  const deleteHandler = () => {
    dispatch(deletePost(id));
    history.push("/");
  }

  return (
    <Segment className="segment-block" >
      <Header as="h1" textAlign="center" content={post.title} />

      <p>{post.body}</p>
      <i>Автор: {post.author}</i>
      <p><strong></strong>{new Date(post.createdAt).toLocaleString()}</p>

      <div className="buttons-align-wrapper">
        {/* <Button as={Link} to={`/edit/${id}`} positive>Edit</Button> */}
        <Button onClick={deleteHandler} negative>Delete</Button>
        <Button as={Link} to={"/"} primary>Back</Button>
      </div>
    </Segment>
  );
}
export default PostPage;