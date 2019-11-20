import React, { component } from 'react'
import Img from 'gatsby-image'

class Icon extends Component {
  audio = new Audio();

  setAndPlayAudio = (audioUrl) => {
    audio.src = audioUrl;
    audio.play();
  };
  render() {
    return (
      <div
        className="icon"
        onClick={setAndPlayAudio({props.audioSrc})}
      >
        <Img
          sizes={props.imgSrc}
        />
      </div>
    );
  }
}


export default Icon