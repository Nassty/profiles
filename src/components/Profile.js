import React from 'react';
import {connect} from 'react-redux';
import {setSelected} from '../reducers/selected';

class Profile extends React.PureComponent {

  constructor() {
    super();
    this.state = {hovered: false, clicked: false};
  }
  onMouseOver = () => this.setState({hovered: true});
  onMouseOut = () => this.setState({hovered: false});
  render() {
    const {name, selected, onClick} = this.props;
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
        onClick={onClick(name)} 
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
  onClick: name => () => dispatch(setSelected(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
