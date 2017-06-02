import '../styles/App.css'

import React, {Component} from 'react'
import Profile from './Profile';

class App extends Component {
  render() {
    return <div className="App">
      <Profile name="Alex" />
      <Profile name="Georgie" />
      <Profile name="Pete" />
      <Profile name="Dim" />
    </div>
  }
}

export default App
