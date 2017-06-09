const middleware = ({dispatch, getState}) => next => action => next(action);
export default middleware;
