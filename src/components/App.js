import '../styles/App.css';

import React, {Component} from 'react';
import ProfileList from './ProfileList';

class App extends Component {
  render() {
    return (<div className="App">
      <ProfileList />
    </div>);
  }
}

export default App;
