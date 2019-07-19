import React from "react"

const Newsletter = props => (
  <section className="newsletter band band--dark-gray">
    <div className="container">
      <h2 className="subtitle">Newsletter</h2>
      <h3 className="section-title">Subscribe to the S&amp;L Newsletter!</h3>
      <form>
        <div className="input input--text">
          <input className="input-text" id="email" type="text" required />
          <label htmlFor="email">
            Enter your email address
          </label>
        </div>
        <button className="button button--small button--violet">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </section>
)

export default Newsletter
