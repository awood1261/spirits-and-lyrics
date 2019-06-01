import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactAudioPlayer from "react-audio-player"

const Player = props => (
  <section className="site-player">
    <audio id="audio-src" src="http://traffic.libsyn.com/spiritsandlyrics/middle-tenn-final.mp3" />
    <div className="site-player-content">
      <div className="site-player-controls">
        <button onClick={props.onClick}>Play</button>
      </div>
      <div className="site-player-overview">
        <div className="site-player-progressbar">
            <div className="site-player-progressbar-mercury" />
        </div>
        <div className="site-player-overview-content">
          <div>
            Middle Tennessee, USA
          </div>
          <div><span className="current-time">0:00</span> / <span className="full-time">100:00</span></div>
        </div>
      </div>
    </div>
  </section>
)

export default Player
