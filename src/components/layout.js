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

import SnlHeader from "./SnlHeader/SnlHeader"
import MobileHeader from "./MobileHeader/MobileHeader"
import Footer from "./Footer/Footer"
import Player from "./Player/Player"

// import "./layout.css"
import "../styles/norm/_normalize.scss"
import "../styles/base.scss"

function playPlayer(e) {
  console.log(e.target);
  const audioSrc = document.querySelectorAll('#audio-src')[0];
  const mercury = document.querySelectorAll('.site-player-progressbar-mercury')[0];
  const currentTime = document.querySelectorAll('.current-time')[0];
  const fullTime = document.querySelectorAll('.full-time')[0];
  if (audioSrc.paused) {
    audioSrc.play();
    e.target.innerHTML = "Pause";
  } else {
    audioSrc.pause();
    e.target.innerHTML = "Play";
  }
  audioSrc.ontimeupdate = function() {
    console.log (audioSrc.currentTime / audioSrc.duration * 100);
   mercury.style.width = audioSrc.currentTime / audioSrc.duration * 100 + '%';
   currentTime.innerHTML = audioSrc.currentTime;
   fullTime.innerHTML = audioSrc.duration;
  }
}

const playerEpisode = {
  "title": "Middle Tennessee: USA",
  "currentTime": "0:00",
  "duration": "100:00"
}

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
          <MobileHeader 
            footerLogoUrl={data.footerlogo.childImageSharp.fluid}
          />
          <main className="middle-content">{children}</main>
          <Footer
            year={new Date().getFullYear()}
            footerMapUrl={data.footermap.childImageSharp.fluid}
            footerLogoUrl={data.footerlogo.childImageSharp.fluid}
          />
          <Player
            onClick={playPlayer}
            currentTime={playerEpisode.currentTime}
            duration={playerEpisode.duration}
            title={playerEpisode.title}
            isPlaying={false}
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
