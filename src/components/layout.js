/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import SnlHeader from "./SnlHeader/SnlHeader"
import Footer from "./Footer/Footer"

// import "./layout.css"
import "../styles/norm/_normalize.scss"
import "../styles/base.scss"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Spirits &amp; Lyrics, a podcast about libations, songwriting and the
        supernatural.
      </title>
    </Helmet>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          logo: file(relativePath: { eq: "images/snl-header-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 244) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          footermap: file(relativePath: { eq: "images/recording-map.png" }) {
            childImageSharp {
              fluid(maxWidth: 124) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          footerlogo: file(relativePath: { eq: "images/footer-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 232) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <SnlHeader logoUrl={data.logo.childImageSharp.fluid} />
          <main>{children}</main>
          <Footer
            year={new Date().getFullYear()}
            footerMapUrl={data.footermap.childImageSharp.fluid}
            footerLogoUrl={data.footerlogo.childImageSharp.fluid}
          />
        </>
      )}
    />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
