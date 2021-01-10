import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Sheddens Mews | Home"
          meta={[
            { name: 'description', content: 'Luxury Clarkston office space' },
            { name: 'keywords', content: 'offices clarkston glasgow' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>No Hidden Fees</h3>
                <p>We don't believe in hidden fees or lengthy contracts. Our prices include rent, maintenance, super fast internet (wired and wi-fi) and utilities.</p>
              </header>
              <Link to="/offices" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Simplifying Commercial Letting</h3>
                <p>We strive to take the cost and complexity out of commercial letting without compromising on quality. Our office suites have features comparable with City Centre offices costing thousands of pounds a week at a fraction of the price.</p>
              </header>
              <Link to="/offices" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner" id="about">
              <header className="major">
                <h2>About Us</h2>
              </header>
              <p>
                Sheddens Mews brings a new standard to serviced flexible office
                accommodation in Glasgow's South Side. Located in Clarkston Town
                Centre our fully renovated office suites provide super fast
                broadband, luxury communal areas, shower facilities, utilities
                and maintenance. All for a single monthly fee.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/offices" className="button next">
                    Find out more
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
