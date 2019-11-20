import React, { Component } from 'react'
import Img from 'gatsby-image'

class Icon extends Component {
  audio = new Audio();

  setAndPlayAudio = () => {
    audio.src = props.audioSrc;
    audio.play();
  };
  render() {
    return (
      <div
        className="icon"
        onClick={this.setAndPlayAudio()}
      >
        <Img
          sizes={props.imgSrc}
        />
      </div>
    );
  }
}


export default Icon