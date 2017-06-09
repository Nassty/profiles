const middleware = ({dispatch, getState}) => next => action => {
  action.confirm && action.message && confirm(action.message) && next(action);
}
export default middleware;
