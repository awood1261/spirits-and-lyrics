import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomepageHero from "../components/Hero/HomepageHero"
import FeaturedEpisode from "../components/FeaturedEpisode/FeaturedEpisode"
import Newsletter from "../components/Newsletter/Newsletter"
import EpisodeCards from "../components/EpisodeCards/EpisodeCards"

const EpisodesPage = props => (
  <StaticQuery
    query={graphql`
      query episodeCardQuery {
        allEpisodecardsJson {
          edges {
            node {
              displayName
              pitchText
              published
              images {
                featured {
                  card {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Episode Vault"
          description="Our back catalog of all our episodes"
        />
        <div className="page">
          <h2 className="subtitle container">Episode Vault</h2>
          <EpisodeCards cardData={data.allEpisodecardsJson.edges} />
        </div>
        <Newsletter />
      </Layout>
    )}
  />
)

export default EpisodesPage
