import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa"

const FeaturedEpisode = props => (
  <section className="featured-episode ribbon">
    <div className="featured-episode-content container">
      <h2 className="subtitle">Featured Episode</h2>
    </div>
    <Img
      alt="Freddie Waters, Uncle Nearest and a Werewolf figurine."
      fluid={props.midtnUrl}
      className="featured-episode-imagery"
    />

    <div className="container">
      <div className="featured-episode-header">
        <button
          className="featured-episode-control-icon"
          data-audio-src="http://traffic.libsyn.com/spiritsandlyrics/middle-tenn-final.mp3"
          onClick={props.initializePlayer}
        >
          <FaRegPlayCircle />
        </button>
        <div>
          <h3 className="section-title">
            Middle Tennessee, USA: Legacies of Choice
          </h3>
          <div className="featured-episode-info">
            <p>Aired: 05/25/2019</p>
            <p>Length: 148 minutes</p>
          </div>
        </div>
      </div>
      <p className="featured-episode-description">
        The guys travel to Middle Tennessee in the United States and talk about the legend of Nathan "Nearest" Greene before tasting Uncle Nearest 1856 Premium Whiskey and Tennessee Gold. Afterwards, the Legend of The Werewolf of Dickson County and the stories of its sightings are talked about. Finally, the guys discuss Freddie Waters and "A Full Moon on Main Street".
      </p>
      <Link to="episodes/middle-tennessee" className="link link--violet">
        READ MORE
      </Link>
    </div>
  </section>
)

export default FeaturedEpisode
