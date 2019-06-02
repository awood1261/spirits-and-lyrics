import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const SnlHeader = props => (
  <header className="header">
    <Link to="/">
      <Img alt="logo" fluid={props.logoUrl} className="header-logo" />
    </Link>
    <ul className="header-nav">
      <li className="header-nav-item">
        <Link className="header-nav-link" to="/episodes">
          Episodes
        </Link>
      </li>
      <li className="header-nav-item">
        <Link className="header-nav-link" to="/how-to-listen">
          How To Listen
        </Link>
      </li>
      <li className="header-nav-item">
        <Link className="header-nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="header-nav-item">
        <Link className="header-nav-link" to="/sponsors">
          Sponsors
        </Link>
      </li>
    </ul>
  </header>
)

export default SnlHeader

// export const pageQuery = graphql`
//   query {
//     logo: file(relativePath: { eq: "images/snl-header-logo.png" }) {
//       childImageSharp {
//         fluid {
//           src
//         }
//       }
//     }
//   }
// `
