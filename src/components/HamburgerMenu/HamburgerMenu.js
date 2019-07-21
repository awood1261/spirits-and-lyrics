import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const HamburgerMenu = props => (
    /**    Made by Erik Terwan    **/
    /**   24th of November 2015   **/
    /**        MIT License        **/
    <nav role="navigation">
      <div id="menuToggle">
        {/* A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it. */}
        <input type="checkbox" />
        
        {/* Some spans to act as a hamburger.
        
        They are acting like a real hamburger,
        not that McDonalds stuff. */}
        <span></span>
        <span></span>
        <span></span>
        
        {/* Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic. */}
        <ul id="menu">
          <Link className="link link--violet" to="/"><li>Home</li></Link>
          <Link className="link link--violet" to="/episodes"><li>Episodes</li></Link>
          <Link className="link link--violet" to="/how-to-listen"><li>How To Listen</li></Link>
          <Link className="link link--violet" to="/about"><li>About</li></Link>
          <Link className="link link--violet" to="/sponsors"><li>Sponsors</li></Link>
        </ul>
      </div>
    </nav>
)

export default HamburgerMenu
