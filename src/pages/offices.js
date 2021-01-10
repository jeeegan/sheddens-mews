import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Offices = props => (
  <Layout>
    <Helmet>
      <title>Sheddens Mews | Offices</title>
      <meta name="description" content="Offices Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>South Suite</h3>
              </header>
              <p>
                Our South Suite is perfect for a 1-2 person office. With high
                ceilings and period features it's a pleasant place to get your
                work done.
              </p>
              <p>Get in touch today to find out about current availability.</p>
              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>North Suite</h3>
              </header>
              <p>
                Our North Suite suits a 2-3 person office set up. It has the
                same high ceilings and period features as our South Suite with a
                bit more space.
              </p>
              <p>Get in touch today to find out about current availability.</p>
              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Executive Suite</h3>
              </header>
              <p>
                Our Executive Suite fits up to 4 people, or maybe you'll use it
                as a large and luxurious 1 person space, it's up to you.
              </p>
              <p>Get in touch today to find out about current availability.</p>
              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Offices
