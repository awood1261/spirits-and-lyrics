import React from "react"
import Layout from "../../components/layout"

function playerHtml (playerHtml) {
    return {__html: playerHtml};
}

const SnlEpisode = ({ pageContext }) => (
    <Layout>
        <h1>{pageContext.title}</h1>
        <img
            alt="episode image"
            src={pageContext.images.featured.portrait}
        />
        {/* <p>{pageContext.player}</p> */}
        <p dangerouslySetInnerHTML={playerHtml(pageContext.player)}></p>
    </Layout>
)

export default SnlEpisode