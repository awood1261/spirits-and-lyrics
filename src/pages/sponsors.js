import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"

const SponsorsPage = props => (
  <Layout>
    <SEO
      title="Become a sponsor for the podcast!"
      description="Learn how you can become a sponsor of the podcast and view all of our current sponsors of the show."
    />
    <div className="container">
      <h1>Podcast Sponsors</h1>
      <p>
        Learn how you can become a sponsor of the podcast and view all of our current sponsors of the show.
      </p>
    </div>
    <Newsletter />
  </Layout>
)

export default SponsorsPage
