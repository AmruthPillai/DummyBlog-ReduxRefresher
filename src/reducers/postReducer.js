import { FETCH_POSTS, CREATE_NEW_POST } from '../actions';

const initialState = {
  item: null,
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: payload,
      };
    case CREATE_NEW_POST:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    default:
      return state;
  }
};
