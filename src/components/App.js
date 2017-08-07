import React, {Component} from "react";
import axios from "axios";
import RandomGif from './RandomGif';
import SavedGifsList from "./SavedGifsList";


class App extends Component {
  constructor(){
    super();
    
    this.state = {
      savedGifs: [],
      randomGif: ""
    }
  }

  componentWillMount(){
    this._getSavedGifs();
    this._getRandomGif();

    setInterval(() => {
      this._getSavedGifs();
    }, 5000);
  }

  _saveRandomGif = () => {
    axios.post("https://strange-thing-api.herokuapp.com/api", {
      url: this.state.randomGif,
      strangeness: 0
    }).then((res) => {
      this._getRandomGif();
      this._getSavedGifs();
    })
    .catch(err => console.error(err));
  }

  _getRandomGif = () => {
    axios.get("http://api.giphy.com/v1/gifs/random?api_key=fd016f58fbf742c4ba2f158392689069")
        .then((res) => {
          console.log(res);
          const url = res.data.data.image_original_url;
          this.setState({randomGif: url});
        })
  }

  _getSavedGifs = () => {
    axios.get("https://strange-thing-api.herokuapp.com/api")
        .then((res) => {
          this.setState({
            savedGifs: res.data.strangeThings
          })
        });
  }

  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png"/>
        <RandomGif saveRandomGif={this._saveRandomGif} getRandomGif={this._getRandomGif} gif={this.state.randomGif}/>
        <hr />
        <SavedGifsList savedGifs={this.state.savedGifs}/>
      </div>
    );
  }
}

export default App;