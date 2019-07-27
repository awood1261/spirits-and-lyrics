import React from "react"
import Img from "gatsby-image"

const Hero = props => (
  <div className="hero">
    <Img alt="About the Podcast" fluid={props.bgUrl} className="hero-bg" />
    <div className="hero-content">
      <h2 className="hero-title">{props.title}</h2>
      <p className="hero-subtitle">{props.subtitle}</p>
    </div>
  </div>
)

export default Hero
