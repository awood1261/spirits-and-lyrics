import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactAudioPlayer from "react-audio-player"
import { FaPlay } from 'react-icons/fa'

const Player = props => (
  <section className="site-player">
    <audio id="audio-src" src="http://traffic.libsyn.com/spiritsandlyrics/middle-tenn-final.mp3" />
    <div className="site-player-content">
      <div className="site-player-controls">
        <FaPlay />
        <button onClick={props.onClick}>Play</button>
      </div>
      <div className="site-player-overview">
        <div className="site-player-progressbar">
            <div className="site-player-progressbar-mercury" />
        </div>
        <div className="site-player-overview-content">
          <div>{props.title}</div>
          <div><span className="current-time">{props.currentTime}</span> / <span className="full-time">{props.duration}</span></div>
        </div>
      </div>
    </div>
  </section>
)

export default Player
