import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Img from "gatsby-image"
import SEO from "../../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const bgImage = frontmatter.episodeBg.childImageSharp.fluid.src
  const heroImage = frontmatter.heroImg.childImageSharp.fluid
  const ogImage = frontmatter.ogImg.childImageSharp.fluid.src
  return (
    <Layout>
      <SEO
        title={`${frontmatter.title}`}
        description={frontmatter.graphDescription}
        image={ogImage}
      />
      <div
        className="episode-page-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="episode-page">
          <div className="episode-page-prologue bounds bounds--narrow">
            <h1 className="subtitle">{frontmatter.title}</h1>
            <div className="episode-page-overview">
              <span><strong>Aired: </strong>{frontmatter.date}</span>
              <span className="episode-page-overview-divider">|</span>
              <span><strong>Length: </strong> 140 Minutes</span>
            </div>
            <p className="episode-page-prologue">{frontmatter.prologue}</p>
            <div
              className="episode-page-player"
              dangerouslySetInnerHTML={{ __html: frontmatter.episodeUrl }}
            />
          </div>
          <div class="episode-page-hero bounds bounds--wider" />
          <Img
            alt="Hero Image"
            fluid={heroImage}
            className="episode-page-hero-image"
          />
          <div
            className="episode-page-content bounds bounds--narrow"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        prologue
        graphDescription
        episodeUrl
        episodeBg {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
        heroImg {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ogImg {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    }
  }
`
