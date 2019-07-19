/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const episodes = require("./data/episodes.json")
  const episodeMdTemplate = path.resolve(`src/templates/episodeMdTemplate.js`)
  episodes.forEach(episode => {
    createPage({
      path: `/episode/${episode.slug}/`,
      component: require.resolve("./src/templates/SnlEpisode/SnlEpisode.js"),
      context: { ...episode },
    })
  })
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: episodeMdTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
