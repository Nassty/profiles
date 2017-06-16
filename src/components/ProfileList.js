import React from 'react';
import {connect} from 'react-redux';

import Profile from './Profile';
import Items from './Items';
import {fetchUsers} from '../reducers/users';

const ProfileList = ({users, onClick}) => (
  <div>
    <div style={{clear: 'both'}}>
      <button onClick={onClick}>Load Users</button>
    </div>
    <div style={{float: 'left', width: '50%'}}>
      {users.map(user =>
        <Profile user={user} key={user.id} />
      )}
    </div>
    <div style={{float: 'right', width: '50%'}}>
      <Items />
    </div>
  </div>
);

const mapStateToProps = state => ({
  users: state.users.entities,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
