import axios from 'axios';
import { FETCH_POSTS, CREATE_NEW_POST } from '.';

const fetchPosts = () => async (dispatch) => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: FETCH_POSTS,
    payload: data.data,
  });
};

const createNewPost = (postData) => async (dispatch) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
  dispatch({
    type: CREATE_NEW_POST,
    payload: response.data,
  });
};

export {
  fetchPosts,
  createNewPost,
};
