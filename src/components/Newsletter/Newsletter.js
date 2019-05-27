import React from "react"
import Img from "gatsby-image"

const Newsletter = props => (
  <section className="newsletter band band--dark-gray">
    <div className="container">
      <h2 className="subtitle">Newsletter</h2>
      <h3 className="section-title">Subscribe to the S&amp;L Newsletter!</h3>
      <form>
        <div className="input input--text">
          <label for="email">Stay up to date on the latest happenings and special events and
        givewaways!</label>
          <input className="input-text" id="email" type="text" />
        </div>
        <button className="button button--small button--violet">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </section>
)

export default Newsletter
