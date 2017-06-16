import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {branch, compose, renderNothing} from 'recompose';

const renderLoading = branch(
  ({item}) => !item,
  renderNothing
);

const enhance = compose(renderLoading);

const Items = enhance(({item}) => (
  <pre>
    {JSON.stringify(item, null, 4)}
  </pre>
));

const getSelected = state => state.selected;
const getItems = state => state.items;
const itemsSelector = createSelector(
  [getSelected, getItems],
  (selected, items) => items[selected]
);

const mapStateToProps = state => ({
  item: itemsSelector(state)
});

export default connect(mapStateToProps)(Items);
