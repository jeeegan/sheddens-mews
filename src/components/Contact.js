import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          method="POST"
          name="contact-form"
          data-netlify="true"
          action="/thanks"
        >
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required></textarea>
          </div>
          <input type="hidden" name="form-name" value="contact-form" />
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:contact@sheddensmews.co.uk">
              contact@sheddensmews.co.uk
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Sheddens Mews
              <br />
              119A Busby Road
              <br />
              Clarkston
              <br />
              G76 8BD
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
