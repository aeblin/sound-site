import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Icon from "../components/icon"

class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <section>
          <Icon
            imgSrc={this.props.data.ballImg.childImageSharp.fluid}
            audioSrc={this.props.data.ballSnd}
          />
          <Icon
            imgSrc={this.props.data.ferryImg.childImageSharp.fluid}
          />
          <Icon
            imgSrc={this.props.data.keyImg.childImageSharp.fluid}
          />
          <Icon
            imgSrc={this.props.data.nImg.childImageSharp.fluid}
          />
          <Icon
            imgSrc={this.props.data.prideImg.childImageSharp.fluid}
          />
          <Icon
            imgSrc={this.props.data.wavesImg.childImageSharp.fluid}
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
    ballSnd: file(relativePath: { eq: "baseball.mp3" }),
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
    keySnd: file(relativePath: { eq: "clubDeluxe.mp3" }),
    nImg: file(relativePath: { eq: "ICON_N.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    nSnd: file(relativePath: { eq: "muni.mp3" }),
    prideImg: file(relativePath: { eq: "ICON_pride.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    prideSnd: file(relativePath: { eq: "pride.mp3" }),
    wavesImg: file(relativePath: { eq: "ICON_waves.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wavesSnd: file(relativePath: { eq: "waves.mp3" }),
  }
`