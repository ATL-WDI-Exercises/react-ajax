import React, { Component } from 'react';
import Thumbs from './Thumbs';

class SavedGif extends Component{
  render(){
    return (
      <div className="gif" >
        <img src={this.props.gif.url} />
        <p>Points: +{this.props.gif.strangeness}</p>
        <Thumbs />
      </div>
    )
  }
}

export default SavedGif;