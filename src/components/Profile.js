import React from 'react';
import {connect} from 'react-redux';
import {setSelected} from '../reducers/selected';
import {fetchItem} from '../reducers/items';

const Profile = ({user, selected, onClick}) => {
  const clicked = user.id === selected;
  const color = clicked ? '#E00': '#333';
  const style = {color};
  return (
    <div
      style={style}
      onClick={onClick(user)}
    >
      <h4> {user.username} ({user.name})</h4>
      <ul>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  onClick: user => () => {
    dispatch(setSelected(user.id));
    dispatch(fetchItem(user.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
