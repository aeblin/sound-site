import React from 'react'
import Img from 'gatsby-image'

const audio = new Audio();

const setAndPlayAudio = (audioUrl) => {
  audio.src = audioUrl;
  audio.play();
};

const Icon = props => (
  <div
    className="icon"
    onClick={`setAndPlayAudio('${props.audioFile}')`}
  >
    <Img
      sizes={props.imgSrc}
    />
  </div>
)

export default Icon