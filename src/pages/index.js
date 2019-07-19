import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomepageHero from "../components/Hero/HomepageHero"
import FeaturedEpisode from "../components/FeaturedEpisode/FeaturedEpisode"
import Newsletter from "../components/Newsletter/Newsletter"

const IndexPage = (props) => (
  <StaticQuery
    query={graphql`
      query logosQuery {
        itunes: file(relativePath: { eq: "images/itunes-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 13) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        googleplay: file(relativePath: { eq: "images/google-play-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 13) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        midtn: file(relativePath: { eq: "images/mid-ten-feat-ep.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        herobg: file(relativePath: { eq: "images/whiskey-glass-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Spirits & Lyrics"
          description="Spirits & Lyrics is a podcast about Libations, Songwriting and the Supernatural"
        />
        {/* <HomepageHero itunesUrl={data.itunes.childImageSharp.fluid} /> */}
        <HomepageHero
          itunesUrl={data.itunes.childImageSharp.fluid}
          googlePlayUrl={data.googleplay.childImageSharp.fluid}
          heroSrc={data.herobg.childImageSharp.fluid}
        />
        <FeaturedEpisode midtnUrl={data.midtn.childImageSharp.fluid} isPlayerInititalized={false} />
        <Newsletter />
      </Layout>
    )}
  />
)

export default IndexPage
