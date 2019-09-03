import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GiMouse } from "react-icons/gi"
import { GiSmartphone } from "react-icons/gi"

const TwoUp = props => (
  <section className="two-ups">
    {props.twoupData.map((item, key) => (
      <section className="two-up">
        <div className="two-up-heading">
          <h3>{item.title}</h3>
          <p className="two-up-subtitle">{item.subtitle}</p>
        </div>
        <div className="two-up-items">
          {item.cards.map((subitem, subkey) => (
            <div className="two-up-item">
              <div className="two-up-item-imagery">
                {subitem.icon ? (
                  <div className="two-up-icon">Icon Here</div>
                ) : (
                  <StaticQuery
                    query={graphql`
                      query twoUpQuery {
                        imagery: file(
                          relativePath: {
                            eq: "images/how-to-listen/serial-video.png"
                          }
                        ) {
                          childImageSharp {
                            fluid(maxWidth: 300) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    `}
                    render={data => (
                      <div className="two-up-image">
                        {/* <img src={subitem.image.src} /> */}
                        <Img
                          alt="Two Up Image"
                          fluid={
                            data.imagery.childImageSharp.fluid
                          }
                          className="two-up-image"
                        />
                      </div>
                    )}
                  />
                )}
                {/* <div className="two-up-icon">
                  <GiMouse />
                </div> */}
              </div>
              <p className="two-up-title">{subitem.title}</p>
              <p className="two-up-description">{subitem.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    ))}
  </section>
)

export default TwoUp
