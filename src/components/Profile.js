import React from 'react';

class Profile extends React.PureComponent {

  constructor() {
    super();
    this.state = {hovered: false, clicked: false};
  }
  onMouseOver = () => this.setState({hovered: true});
  onMouseOut = () => this.setState({hovered: false});
  onClick = () => this.setState((prevState) => ({...prevState, clicked: !prevState.clicked}));
  render() {
    const {name} = this.props;
    const {hovered, clicked} = this.state;
    const color = (hovered || clicked) ? '#CCC': '#333';
    const style = {
      color
    };
    return (
      <div
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onClick={this.onClick.bind(this)} 
      >
        <h4 style={style}>{name} </h4>
      </div>
    );
  }
}

export default Profile;
