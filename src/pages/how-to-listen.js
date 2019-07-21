import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomepageHero from "../components/Hero/HomepageHero"
import FeaturedEpisode from "../components/FeaturedEpisode/FeaturedEpisode"
import Newsletter from "../components/Newsletter/Newsletter"
import EpisodeCards from "../components/EpisodeCards/EpisodeCards"

const NewsletterSuccessPage = props => (
  <Layout>
    <SEO
      title="Thank You For Signing Up!"
      description="Thank you for signing up for the newsletter, you'll hear from us soon about news!"
    />
    <div className="container">
      <h1>How To Listen</h1>
      <p>
        You can find the podcast on all the popular podcast outlets:
        <ul>
            <li>Apple</li>
            <li>Google Play</li>
            <li>Spotify</li>
            <li>Stitcher</li>
        </ul>
      </p>
    </div>
    <Newsletter />
  </Layout>
)

export default NewsletterSuccessPage
