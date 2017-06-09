import '../styles/App.css'

import React, {Component} from 'react'
import Profile from './Profile';

class App extends Component {
  render() {
    return <div className="App">
      <Profile name="Alex" id={1} />
      <Profile name="Georgie" id={2} />
      <Profile name="Pete" id={3} />
      <Profile name="Dim" id={4} />
    </div>
  }
}

export default App
