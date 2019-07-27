import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import Hero from "../components/Hero/Hero"
import { StaticQuery, graphql } from "gatsby"

const AboutPage = props => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        heroBg: file(relativePath: { eq: "images/about/about-hero-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="About the Podcast"
          description="Learn all about the creation of the podcasts and the hosts Travis, Alex & James"
        />
        <Hero
          title="About the Podcast"
          subtitle="Learn all about the creation of the podcasts and get to know the hosts."
          bgUrl={data.heroBg.childImageSharp.fluid}
        />
        <div className="container">
          <div className="page-content">
            <p className="page-intro">
              Do you love <span>whiskey &amp; bourbon</span>, can’t get enough
              of hearing a good
              <span>ghost story</span> or have an appreciation for expositions
              of <span>music</span> then this podcast is for you!
            </p>
            <dl className="q-n-a-list">
                <dt>So what made you create the show?</dt>
                <dd>Spirits & Lyrics was born from the exact component of what makes the show enjoyable, great conversation. What began as an idea while chatting has now come full circle, and we are happy to welcome you to our round table. Our shared love for fine spirits, travel, skin crawling tales and music helped us mesh all of these pieces into a them driven presentation we bring to our listeners monthly.  As we navigate the United States and travel the globe we aim to pack our stories with detail, enlightening our audience while at the same time educating ourselves. So hop on aboard with Alex, James &amp; Travis, pour yourself a glass and enjoy the ride!!!</dd>
                <dt>Where do you record the show?</dt>
                <dd>So far all the episodes have been recorded in Travis’ music room in Lansdale PA. All the recording equipment gets transported from Philadelphia up the Blue Route (476), set up, recorded and broken back down all in the same day. It’s really an artform of efficiency.</dd>
                <dt>How do you choose the locations?</dt>
                <dd>It varies, but it usually so far has centered primarily around the drink. From there we’ll look for a supernatural story that fits and then finally a song from a musician from the area.</dd>
                <dt>So you have the drink, story and song…do you record off the cuff?</dt>
                <dd>Currently it’s a little bit of script writing, a little bit of freestyling, open conversation. The main thing is coming up with an overarching theme that threads all three segments. Once we have that, the rest of episode flows.</dd>
                <dt>Can I submit a location to be on the episode?</dt>
                <dd>Absolutely! If there’s a drink you want us to try, an intriguing tale of the supernatural or stellar songwriting that packs a punch in a song…send it to us at spiritsandlyrics@gmail.com</dd>
            </dl>
          </div>
        </div>
        <Newsletter />
      </Layout>
    )}
  />
)

export default AboutPage
