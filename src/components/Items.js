import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {branch, compose, renderNothing, flattenProp} from 'recompose';

const renderLoading = branch(
  ({item}) => !item,
  renderNothing
);

const flattenItem = flattenProp('item');

const enhance = compose(renderLoading, flattenItem);

const Items = enhance(({title, body, id}) => (
  <pre>
    {JSON.stringify({title, body, id}, null, 4)}
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
