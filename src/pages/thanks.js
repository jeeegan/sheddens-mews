import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Thanks = props => (
  <Layout>
    <Helmet>
      <title>Sheddens Mews | Thanks</title>
      <meta name="description" content="Thank you page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Thanks!</h1>
          </header>
          <div className="content">
            <p>We've received your message, we'll be in touch soon.</p>
            <ul className="actions">
              <li>
                <a href="/" className="button next scrolly">
                  Return to main page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Thanks
