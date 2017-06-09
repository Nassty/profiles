import axios from 'axios';

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const addItem = item => ({
  type: ADD_ITEM,
  item
});

const removeItem = item => ({
  type: REMOVE_ITEM,
  item
});

const fetchItem = id => (dispatch, getState) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  axios.get(url).then(response => {
    dispatch(addItem(response.data));
  });
};

const item = (state=[], action) => {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.item.id);
    default:
      return state;
  };
};

export default item;
export { fetchItem, addItem, removeItem };
