import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const EpisodeCards = props => (
  <section className="episode-cards container">
    {props.cardData.map((item, key) => (
      <div className="episode-card">
        <span className="episode-card-date">{item.node.published}</span>
        <Link to={item.node.url}>
          <Img
            alt="Episode Card Image"
            fluid={item.node.images.featured.card.childImageSharp.fluid}
            className="episode-card-image"
          />
        </Link>
        <h3 className="episode-card-title">{item.node.displayName}</h3>
        <p className="episode-card-pitch">{item.node.pitchText}</p>
        <Link to={item.node.url} className="link link--violet">
          LISTEN NOW
        </Link>
      </div>
    ))}
  </section>
)

export default EpisodeCards
