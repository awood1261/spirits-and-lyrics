import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const bgImage = frontmatter.episodeBg.childImageSharp.fluid.src;
  return (
    <Layout>
      <SEO
          title={`${frontmatter.title} | Spirits & Lyrics`}
          description="Description goes there"
      />
      <div className="episode-page-container" style={ {backgroundImage: `url(${bgImage})`} }>
        <div className="episode-page">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="episode-page-content"
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
        episodeUrl
        episodeBg {
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
