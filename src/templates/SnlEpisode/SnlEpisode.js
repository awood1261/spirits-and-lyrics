import React from "react"
import Layout from "../../components/layout"

const SnlEpisode = ({ pageContext }) => (
    <Layout>
        <h1>{pageContext.title}</h1>
        <img
            src={pageContext.images.featured.portrait}
        />
    </Layout>
)

export default SnlEpisode