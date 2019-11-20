import React from 'react'
import Img from 'gatsby-image'

const Icon = props => (
  <div
    className="icon"
  >
    <Img
      sizes={props.imgSrc}
    />
  </div>
)

export default Icon