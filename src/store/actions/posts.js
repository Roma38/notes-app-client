import axios from "axios";
import { API_HOST } from "../../config";
import { history } from "../../history";
import { showMessage } from "./messages";

export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_LOAD_SUCCEED = "POSTS_LOAD_SUCCEED";
export const POSTS_LOAD_FAILED = "POSTS_LOAD_FAILED";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST = "ADD_POST";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST = "DELETE_POST";

export const REQUEST_REJECTED = "REQUEST_REJECTED";

export const postsLoadStart = () => ({ type: POSTS_LOADING });

export const postsLoadSucceed = payload => ({
  type: POSTS_LOAD_SUCCEED,
  payload
});

export const postsLoadFailed = error => ({
  type: POSTS_LOAD_FAILED,
  payload: error
});

export const addPostRequest = () => ({
  type: ADD_POST_REQUEST
});

export const addPost = payload => ({
  type: ADD_POST,
  payload
});

export const removePostRequest = () => ({
  type: DELETE_POST_REQUEST
});

export const removePost = payload => ({
  type: DELETE_POST,
  payload
});

export const requestRejected = () => ({
  type: REQUEST_REJECTED
});

export const getPosts = () => dispatch => {
  dispatch(postsLoadStart());
  axios
    .get(`${API_HOST}/posts`)
    .then(({ data }) => dispatch(postsLoadSucceed(data)))
    .catch(error => {
      dispatch(postsLoadFailed(error));
      dispatch(showMessage({
        isPositive: false,
        header: "Не получилось загрузить данные с сервера :(",
        body: ""
      }));
    });

};

export const postPost = payload => dispatch => {
  dispatch(addPostRequest());
  axios
    .post(`${API_HOST}/posts`, payload)
    .then(({ data }) => {
      dispatch(addPost(data));
      history.push("/");
      dispatch(showMessage({
        isPositive: true,
        header: "Запись успешно добавлена",
        body: ""
      }));
    })
    .catch(({ response }) => {
      console.error(response);
      dispatch(requestRejected());
      dispatch(showMessage({
        isPositive: false,
        header: "Не получилось добавить запись :(",
        body: response && response.status === 422 ? "Заголовок записи должен быть уникальным" : ""
      }));
    });
};

export const deletePost = _id => dispatch => {
  dispatch(removePostRequest());
  axios
    .delete(`${API_HOST}/posts`, { data: { _id } })
    .then(() => {
      history.push("/");
      dispatch(removePost({ _id }));
      dispatch(showMessage({
        isPositive: true,
        header: "Запись успешно удалена",
        body: ""
      }));
    })
    .catch(({ response }) => {
      console.error(response);
      dispatch(requestRejected());
      dispatch(showMessage({
        isPositive: false,
        header: "Не получилось удалить запись :(",
        body: ""
      }));
    });
};
