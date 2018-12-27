import axios from "axios";

export const addPost = post => {
  return {
    type: "ADD_POST",
    post: { id: 20, title: post }
  };
};

export const addMessage = message => {
  return { type: "ADD_MESSAGE", message };
};

export const deletePost = post => {
  return { type: "DELETE_POST", post };
};

export const deleteMessage = message => {
  return { type: "DELETE_MESSAGE", message };
};

export const loadSuccessPosts = response => {
  return { type: "LOAD_POSTS_SUCCESS", payload: response.data };
};

export const loadErrorPosts = e => {
  console.log(e);
  return { type: "LOAD_POSTS_FAIL", payload: e };
};

export const fetchPost = () => {
  return dispatch => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => dispatch(loadSuccessPosts(response)))
      .catch(e => dispatch(loadErrorPosts(e)));
  };
  // return { type: "LOAD_POSTS", payload: response };
};
