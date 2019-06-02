import React from "react"
import { FaPlay, FaPause } from "react-icons/fa"

function renderPlayerContent(
  isPlaying,
  onPauseClick,
  onPlayClick,
  title,
  currentTime,
  duration
) {
  return (
    <div className="site-player-content">
      <div className="site-player-controls">
        {isPlaying ? (
          <FaPause
            onClick={onPauseClick}
            className="site-player-controls-icon"
          />
        ) : (
          <FaPlay
            onClick={onPlayClick}
            className="site-player-controls-icon"
          />
        )}

        {/* <button onClick={onClick}>Play</button> */}
      </div>
      <div className="site-player-overview">
        <div className="site-player-progressbar">
          <div className="site-player-progressbar-mercury" />
        </div>
        <div className="site-player-overview-content">
          <div>{title}</div>
          <div>
            <span className="current-time">{currentTime}</span> /{" "}
            <span className="full-time">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Player = props => (
  <div className="site-player-root">
    {props.isInitialized ? (
      <section className="site-player site-player--is-open">
        <audio id="audio-src" />
        {renderPlayerContent(
          props.isPlaying,
          props.onPauseClick,
          props.onPlayClick,
          props.title,
          props.currentTime,
          props.duration
        )}
      </section>
    ) : (
      <section className="site-player">
        <audio id="audio-src" />
        {renderPlayerContent(
          props.isPlaying,
          props.onPauseClick,
          props.onPlayClick,
          props.title,
          props.currentTime,
          props.duration
        )}
      </section>
    )}
  </div>
)

export default Player
