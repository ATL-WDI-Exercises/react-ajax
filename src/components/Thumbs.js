import React, { Component } from 'react';

class Thumbs extends Component {
  render(){
    return (
      <div className="thumbs">
          <i onClick={this.props.disapprove} className="fa fa-3x fa-thumbs-down"></i>
          <i onClick={this.props.approve} className="fa fa-3x fa-thumbs-up"></i>
      </div>
    )
  }
}

export default Thumbs;