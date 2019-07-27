import React from "react"
import Img from "gatsby-image"
import { IoIosRadio } from "react-icons/io"

const HomepageHero = props => (
  <section className="hero hero--homepage">
    <div className="hero-content-area">
      <h1 className="hero-catchline">
        Libations, Songwriting,{" "}
        <span className="emphasis">The Supernatural.</span>
      </h1>
      <p className="hero-description">
        Spirits &amp; Lyrics is a monthly podcast about a drink, a supernatural
        story and a song...from a new location each episode.
      </p>
      <div className="hero-cta-section">
        <a className="button button--violet-bright" href="/listen">
          <span className="hero-cta-section-icon">
            <IoIosRadio />
          </span>
          <span className="hero-cta-section-text">LISTEN NOW</span>
        </a>
        <div className="hero-cta-section-links">
          <ul>
            <li>
              <a href="/spotify">SPOTIFY</a>
            </li>
            <li>
              <a href="/stitcher">STITCHER</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default HomepageHero
