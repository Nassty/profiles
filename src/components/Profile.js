import React from 'react';
import {connect} from 'react-redux';
import {setSelected} from '../reducers/selected';
import {fetchItem} from '../reducers/items';

class Profile extends React.PureComponent {

  constructor() {
    super();
    this.state = {hovered: false, clicked: false};
  }
  onMouseOver = () => this.setState({hovered: true});
  onMouseOut = () => this.setState({hovered: false});
  render() {
    const {name, id, selected, onClick} = this.props;
    const {hovered} = this.state;
    const clicked = name === selected;
    const color = (hovered || clicked) ? '#CCC': '#333';
    const style = {
      color
    };
    return (
      <div
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onClick={onClick({name, id})}
      >
        <h4 style={style}>{name} </h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  onClick: item => () => {
    dispatch(setSelected(item.name));
    dispatch(fetchItem(item.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
