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