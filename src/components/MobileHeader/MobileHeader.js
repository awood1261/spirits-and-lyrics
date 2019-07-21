import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

const MobileHeader = props => (
  <header className="mobile-header">
    <HamburgerMenu />
    <Link to="/">
      <Img
        alt="Spirits and Lyrics Logo"
        fluid={props.footerLogoUrl}
        className="footer-logo mobile-header-logo"
      />
    </Link>
  </header>
)

export default MobileHeader
