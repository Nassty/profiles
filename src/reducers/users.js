import axios from 'axios';
import {combineReducers} from 'redux';

const USERS_ADD = 'USERS_ADD';
const USERS_LOADING = 'USERS_LOADING';
const USERS_FAIL = 'USERS_FAIL';

const addUsers = users => ({type: USERS_ADD, users});
const isLoading = {type: USERS_LOADING};
const hasError = error => ({type: USERS_FAIL, error});

const fetchUsers = () => dispatch => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const onSuccess = response => dispatch(addUsers(response.data));
  const onError = error => dispatch(hasError(error));

  dispatch(isLoading);
  axios.get(url).then(onSuccess, onError).catch(onError);
};

const initialState = {
  entities: [],
  error: null,
  loading: false
};

const entities = (state=initialState.entities, action) => {
  switch(action.type) {
    case USERS_ADD:
      return action.users;
    case USERS_LOADING:
    case USERS_FAIL:
      return initialState.entities;
    default:
      return state;
  }
};

const loading = (state=initialState.loading, action) => {
  switch(action.type) {
    case USERS_ADD:
    case USERS_FAIL:
      return false;
    case USERS_LOADING:
      return true;
    default:
      return state;
  }
};

const error = (state=initialState.error, action) => {
  switch(action.type) {
    case USERS_FAIL:
      return action.error;
    case USERS_ADD:
    case USERS_LOADING:
      return initialState.error;
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  loading,
  error
});
export { fetchUsers };
