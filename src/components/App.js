import React, {Component} from "react";
import axios from "axios";

import SavedGifs from './SavedGifs.jsx'
import RandomGif from './RandomGif.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png"/>
        <h1>Strange Things</h1>
        <RandomGif />
        <SavedGifs />
      </div>
    )
  }
}

export default App
