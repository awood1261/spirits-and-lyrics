import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomepageHero from "../components/Hero/HomepageHero"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query logosQuery {
        itunes: file(relativePath: { eq: "images/itunes-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 13) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        googleplay: file(relativePath: { eq: "images/google-play-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 13) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        {/* <HomepageHero itunesUrl={data.itunes.childImageSharp.fluid} /> */}
        <HomepageHero
          itunesUrl={data.itunes.childImageSharp.fluid}
          googlePlayUrl={data.googleplay.childImageSharp.fluid}
        />
      </Layout>
    )}
  />
)

export default IndexPage
