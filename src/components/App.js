import React, {Component} from "react";
import axios from "axios";
import RandomGif from './RandomGif';
import SavedGifsList from "./SavedGifsList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png"/>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;