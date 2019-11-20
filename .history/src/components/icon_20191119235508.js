import React, { Component } from 'react'
import Img from 'gatsby-image'

class Icon extends Component {

  setAndPlayAudio = () => {
    const audio = new Audio();
    audio.src = this.props.audioSrc;
    audio.play();
  };
  render() {
    return (
      <div
        className="icon"
        onClick={this.setAndPlayAudio()}
      >
        <Img
          sizes={this.props.imgSrc}
        />
      </div>
    );
  }
}


export default Icon