import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Icon from "../components/icon"

import ballSnd from "../assets/baseball.mp3"
import ferrySnd from "../assets/ferryBldg.mp3"
import keysSnd from "../assets/clubDeluxe.mp3"
import muniSnd from "../assets/muni.mp3"
import prideSnd from "../assets/pride.mp3"
import wavesSnd from "../assets/waves.mp3"

class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <section className='grid'>
          <Icon
            imgSrc={this.props.data.ballImg.childImageSharp.fluid}
            audioSrc={ballSnd}
          />
          <Icon
            imgSrc={this.props.data.ferryImg.childImageSharp.fluid}
            audioSrc={ferrySnd}
          />
          <Icon
            imgSrc={this.props.data.keyImg.childImageSharp.fluid}
            audioSrc={keysSnd}
          />
          <Icon
            imgSrc={this.props.data.nImg.childImageSharp.fluid}
            audioSrc={muniSnd}
          />
          <Icon
            imgSrc={this.props.data.prideImg.childImageSharp.fluid}
            audioSrc={prideSnd}
          />
          <Icon
            imgSrc={this.props.data.wavesImg.childImageSharp.fluid}
            audioSrc={wavesSnd}
          />
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query MainPageQuery {
    ballImg: file(relativePath: { eq: "ICON_ball.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    ferryImg: file(relativePath: { eq: "ICON_ferry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    keyImg: file(relativePath: { eq: "ICON_keys.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    nImg: file(relativePath: { eq: "ICON_N.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    prideImg: file(relativePath: { eq: "ICON_pride.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wavesImg: file(relativePath: { eq: "ICON_waves.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`