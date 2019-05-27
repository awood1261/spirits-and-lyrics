/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
    const episodes = require("./data/episodes.json")
    episodes.forEach(episode => {
      createPage({
        path: `/episode/${episode.slug}/`,
        component: require.resolve("./src/templates/SnlEpisode/SnlEpisode.js"),
        context: { ...episode }
      })
    })
  }