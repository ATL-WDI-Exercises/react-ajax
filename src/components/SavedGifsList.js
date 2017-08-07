import React, { Component } from 'react';
import SavedGif from './SavedGif';

class SavedGifsList extends Component {
  render(){
    return (
      <div className="savedGifsContainer">
        <h2>Previously Saved Gifs</h2>
        <div className="savedGifsFlexContainer">
          {this.props.savedGifs.map((savedGif) => {
            return <SavedGif key={savedGif._id} gif={savedGif}/>
          })}
        </div>
      </div>
    )
  }
}

export default SavedGifsList;