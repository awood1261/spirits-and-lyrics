import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Footer = props => (
  <section className="band">
    <footer className="footer container">
      <div className="footer-col footer-credits">
        <Img
          alt="Spirits and Lyrics Logo"
          fluid={props.footerLogoUrl}
          className="footer-logo"
        />
        <p className="legal">
          Spirits &amp; Lyrics is produced by Alex Wood. All episodes are
          recorded in Lansdale and Philadelphia PA.
        </p>
        <Img
          alt="Pennsylvania Map"
          fluid={props.footerMapUrl}
          className="footer-map"
        />
        <p className="legal">&copy; {props.year} <a className="footer-link" href="http://glownfolks.com" target="blank">Glown Folks Podcast Network</a></p>
      </div>
      <div className="footer-col">
        <ul className="footer-list">
          <li className="footer-list-item">
            <Link className="footer-link footer-link-title" to="/episodes">
              Episodes
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/episode-vault">
              Episode Vault
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/recommended-episodes">
              Recommended
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <ul className="footer-list">
          <li className="footer-list-item">
            <Link className="footer-link footer-link-title" to="/about">
              About
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/about-alex">
              About Alex
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/about-james">
              About James
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/about-travis">
              About Travis
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/press-kit">
              Press Kit
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <ul className="footer-list">
          <li className="footer-list-item">
            <Link className="footer-link footer-link-title" to="/how-to-listen">
              How To Listen
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/subscribing">
              Subscribing
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/social-media">
              Social Media
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <ul className="footer-list">
          <li className="footer-list-item">
            <Link className="footer-link footer-link-title" to="/sponsors">
              Sponsors
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/become-a-sponsor">
              Become a Sponsor
            </Link>
          </li>
          <li className="footer-list-item">
            <Link className="footer-link" to="/our-sponsors">
              Our Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </section>
)

export default Footer
