import React from 'react';
import {connect} from 'react-redux';

const Items = ({items}) => (
  <pre>
    {JSON.stringify(items, null, 4)}
  </pre>
);

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(Items);
