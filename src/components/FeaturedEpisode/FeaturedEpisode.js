import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactAudioPlayer from "react-audio-player"

const FeaturedEpisode = props => (
  <section className="featured-episode ribbon">
    <div className="featured-episode-content">
      <h2 className="subtitle">Featured Episode</h2>
    </div>
    <Img
      alt="Freddie Waters, Uncle Nearest and a Werewolf figurine."
      fluid={props.midtnUrl}
      className="featured-episode-imagery"
    />

    <div className="container">
      <h3 className="section-title">
        Middle Tennessee, USA: Legacies of Choice
      </h3>
      <div className="featured-episode-info">
        <p>Aired: 05/25/2019</p>
        <p>Length: 108 minutes</p>
      </div>
      <p className="featured-episode-description">
        Nunc eleifend augue id finibus maximus. Cras mollis diam urna, et
        feugiat leo venenatis nec. Pellentesque dictum a nisl id convallis.
        Aenean lobortis accumsan dictum. Morbi at enim eget ex condimentum
        laoreet quis ac arcu. Suspendisse vitae finibus ligula. Mauris finibus
        accumsan nisl.
      </p>
      <ReactAudioPlayer src="http://traffic.libsyn.com/spiritsandlyrics/middle-tenn-final.mp3" className="snl-player" controls />
      <Link to="episode/middle-tennessee" className="link link--violet">
        READ MORE
      </Link>
    </div>
  </section>
)

export default FeaturedEpisode
