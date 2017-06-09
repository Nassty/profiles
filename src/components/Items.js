import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../reducers/items';

const Items = ({items, onClick}) => (
  <div>
    {items.map(item => (
      <div key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
        <button onClick={onClick(item)}>Remove</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  onClick: item => () => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
