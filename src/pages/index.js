import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomepageHero from "../components/Hero/HomepageHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomepageHero />
  </Layout>
)

export default IndexPage
