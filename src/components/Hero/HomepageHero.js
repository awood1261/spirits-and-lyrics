import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const HomepageHero = props => (
    <section className="hero hero--homepage">
        <h1 className="hero-catchline">Libations, Songwriting, <span className="emphasis">The Supernatural.</span></h1>
        <p className="hero-description">Spirits &amp; Lyrics is a monthly podcast about a drink, a supernatural story and a song...from a new location each episode.</p>
        <div className="hero-cta-section">
            <Link className="button button--black" to="http://itunes.com">SUBSCRIBE VIA iTunes</Link> <span className="text-between">or</span> <Link className="button button--black" to="http://google.com">SUBSCRIBE VIA GOOGLE PLAY</Link>
        </div>
    </section>
)

export default HomepageHero