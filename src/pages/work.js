import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout pageTitle="Work">
    <h2>Work</h2>

    <section>
      <h3>いもむしくん</h3>

      <figure>
        <Img
          fluid={data.imomushi_kun.childImageSharp.fluid}
          alt="いもむしくん"
        />
        <figcaption>いもむしくん</figcaption>
      </figure>

      <p>
        いもむしくんは猫野研究所のシンボルです。緑色は世界平和を、黒い点は目を表しています。
      </p>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    imomushi_kun: file(relativePath: { eq: "imomushi-kun.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
