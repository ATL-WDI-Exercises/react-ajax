import React, { Component } from 'react';
import Thumbs from './Thumbs';

class RandomGif extends Component {
  render() {
    return (
      <div>
        <h3>Random GIF</h3>
        <img src={this.props.gif} />
        <Thumbs approve={this.props.saveRandomGif} disapprove={this.props.getRandomGif} />
      </div>
    );
  }
}

export default RandomGif;