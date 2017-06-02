
const SET_SELECTED = "SET_SELECTED";
const setSelected = (name) => ({
  type: SET_SELECTED,
  name
});

const selected = (state=null, action) => {
  switch(action.type) {
    case SET_SELECTED:
      return action.name;
    default:
      return state;
  };
};

export default selected;
export { setSelected };
