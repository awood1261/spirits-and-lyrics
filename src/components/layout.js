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

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: "0:00",
      isPlaying: false,
      isInitialized: false,
      audioSrc: ""
    }

    this.handleCurrentTimeChange = this.handleCurrentTimeChange.bind(this)
    this.handlePlayClick = this.handlePlayClick.bind(this)
    this.handlePauseClick = this.handlePauseClick.bind(this)
    this.initializePlayer = this.initializePlayer.bind(this)
  }
  handleCurrentTimeChange(currentTime, duration) {
    this.setState({
      currentTime: currentTime - duration,
      isPlaying: false,
    })
  }
  handlePlayClick() {
    this.setState({
      isPlaying: true,
    })
    document.querySelectorAll("#audio-src")[0].play()
  }
  handlePauseClick() {
    this.setState({
      isPlaying: false,
    })
    document.querySelectorAll("#audio-src")[0].pause()
  }
  initializePlayer(e) {
    const audioUrl = e.target.closest(".featured-episode-control-icon").dataset
      .audioSrc
    const audioSrc = document.querySelectorAll("#audio-src")[0]
    const mercury = document.querySelectorAll(
      ".site-player-progressbar-mercury"
    )[0]
    const currentTime = document.querySelectorAll(".current-time")[0]
    const fullTime = document.querySelectorAll(".full-time")[0]

    if (!this.state.isInitialized) {
      this.setState({
        isPlaying: true,
        isInitialized: true,
        audioSrc: audioUrl,
      })

      audioSrc.src = audioUrl
      audioSrc.play()

      audioSrc.ontimeupdate = function() {
        let currentFormatted = new Date(audioSrc.currentTime * 1000)
          .toISOString()
          .substr(11, 8)
        let durationFormatted = new Date(audioSrc.duration * 1000)
          .toISOString()
          .substr(11, 8)

        mercury.style.width =
          (audioSrc.currentTime / audioSrc.duration) * 100 + "%"
        currentTime.innerHTML = currentFormatted
        fullTime.innerHTML = durationFormatted
      }
    }
  }
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        audioSrc: this.state.audioSrc,
        initializePlayer: this.initializePlayer,
        isPlayerInitialized: this.isInitialized,
      })
    })
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Class Component --- Spirits &amp; Lyrics, a podcast about libations,
            songwriting and the supernatural.
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
              footermap: file(
                relativePath: { eq: "images/recording-map.png" }
              ) {
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
                // onClick={playPlayer}
                onPlayClick={this.handlePlayClick}
                onPauseClick={this.handlePauseClick}
                currentTime={playerEpisode.currentTime}
                duration={playerEpisode.duration}
                title={playerEpisode.title}
                isPlaying={this.state.isPlaying}
                src={playerEpisode.src}
                isInitialized={this.state.isInitialized}
              />
            </>
          )}
        />
      </>
    )
  }
}

// function playPlayer(e) {
//   console.log(e.target)
//   const audioSrc = document.querySelectorAll("#audio-src")[0]
//   const mercury = document.querySelectorAll(
//     ".site-player-progressbar-mercury"
//   )[0]
//   const currentTime = document.querySelectorAll(".current-time")[0]
//   const fullTime = document.querySelectorAll(".full-time")[0]
//   if (audioSrc.paused) {
//     audioSrc.play()
//     e.target.innerHTML = "Pause"
//   } else {
//     audioSrc.pause()
//     e.target.innerHTML = "Play"
//   }
//   audioSrc.ontimeupdate = function() {
//     console.log((audioSrc.currentTime / audioSrc.duration) * 100)
//     mercury.style.width = (audioSrc.currentTime / audioSrc.duration) * 100 + "%"
//     currentTime.innerHTML = audioSrc.currentTime
//     fullTime.innerHTML = audioSrc.duration
//   }
// }

const playerEpisode = {
  title: "Middle Tennessee: USA",
  src: "http://traffic.libsyn.com/spiritsandlyrics/middle-tenn-final.mp3",
  currentTime: "0:00",
  duration: "100:00",
}

// const Layout = ({ children }) => (
//   <>
//     <Helmet>
//       <meta charSet="utf-8" />
//       <title>
//         Spirits &amp; Lyrics, a podcast about libations, songwriting and the
//         supernatural.
//       </title>
//     </Helmet>
//     <StaticQuery
//       query={graphql`
//         query SiteTitleQuery {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//           logo: file(relativePath: { eq: "images/snl-header-logo.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 244) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           footermap: file(relativePath: { eq: "images/recording-map.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 124) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           footerlogo: file(relativePath: { eq: "images/footer-logo.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 232) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <>
//           <SnlHeader logoUrl={data.logo.childImageSharp.fluid} />
//           <MobileHeader footerLogoUrl={data.footerlogo.childImageSharp.fluid} />
//           <main className="middle-content">{children}</main>
//           <Footer
//             year={new Date().getFullYear()}
//             footerMapUrl={data.footermap.childImageSharp.fluid}
//             footerLogoUrl={data.footerlogo.childImageSharp.fluid}
//           />
//           <PersistentPlayer />
//           <Player
//             onClick={playPlayer}
//             currentTime={playerEpisode.currentTime}
//             duration={playerEpisode.duration}
//             title={playerEpisode.title}
//             isPlaying={playerEpisode.isPlaying}
//           />
//         </>
//       )}
//     />
//   </>
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
