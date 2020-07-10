import axios from "axios";
import { API_HOST } from "../../config";
import { history } from "../../history";

export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_LOAD_SUCCEED = "POSTS_LOAD_SUCCEED";
export const POSTS_LOAD_FAILED = "POSTS_LOAD_FAILED";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const postsLoadStart = () => ({ type: POSTS_LOADING });

export const postsLoadSucceed = payload => ({
  type: POSTS_LOAD_SUCCEED,
  payload
});

export const postsLoadFailed = error => ({
  type: POSTS_LOAD_FAILED,
  payload: error
});

export const addPost = payload => ({
  type: ADD_POST,
  payload
});

export const editPost = payload => ({
  type: EDIT_POST,
  payload
});

export const removePost = payload => ({
  type: DELETE_POST,
  payload
});

export const getPosts = () => dispatch => {
  dispatch(postsLoadStart());
  axios
    .get(`${API_HOST}/posts`)
    .then(({ data }) => dispatch(postsLoadSucceed(data)))
    .catch(error => dispatch(postsLoadFailed(error)));
};

export const postPost = payload => dispatch => {
  axios
    .post(`${API_HOST}/posts`, payload)
    .then(({ data }) => {
      dispatch(addPost(data));
      history.push("/");
    })
    .catch(({ response }) => {
      console.error(response);
      if (response.status === 422) {
        alert("Choose another Nickname");
      } else {
        alert("Oops, something went wrong!!!!!");
      }
    });
};

export const putPost = payload => dispatch => {
  axios
    .put(`${API_HOST}/posts`, payload)
    .then(({ data }) => {
      dispatch(editPost(data));
      history.push("/");
    })
    .catch(({ response }) => {
      console.error(response);
      if (response.status === 422) {
        alert("Choose another Nickname");
      } else {
        alert("Oops, something went wrong!!!!!");
      }
    });
};

export const deletePost = _id => dispatch => {
  axios
    .delete(`${API_HOST}/posts`, { data: { _id } })
    .then(() => {
      dispatch(removePost({ _id }));
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};
