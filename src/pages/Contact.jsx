import PageHero from '../components/PageHero'

const contacts = [

  {
    name: 'Rekha N. Menon',
    role: 'Partner',
    phone: '+91 99466 45333'
  },

  {
    name: 'Abhilash Raveendran',
    role: 'Partner',
    phone: '+91 77364 32075'
  },

  {
    name: 'Santosh Kumar',
    role: 'Partner',
    phone: '+91 97448 81992'
  },

  {
    name: 'Sureshkumar M R',
    role: 'Managing Partner',
    phone: '+91 99610 05161'
  }

]

function Contact() {

  return (
    <>

      <PageHero
        label="CONTACT MULTIMAX"
        title="LET'S START A CONVERSATION"
        description="Connect with our team for industrial supply, partnerships and business enquiries."
      />


      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">


            {/* CONTACT PEOPLE */}

            <div>

              <p className="section-label">
                GET IN TOUCH
              </p>

              <h2>
                OUR
                <span> TEAM</span>
              </h2>


              <div className="contact-list">

                {contacts.map(contact => (

                  <div
                    className="contact-person"
                    key={contact.name}
                  >

                    <div>

                      <h3>
                        {contact.name}
                      </h3>

                      <p>
                        {contact.role}
                      </p>

                    </div>

                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    >
                      {contact.phone}
                    </a>

                  </div>

                ))}

              </div>


              <div className="contact-location">

                <h3>HEADQUARTERS</h3>

                <p>
                  Kochi, Kerala, India
                </p>

              </div>

            </div>


            {/* FORM */}

            <div className="contact-form-container">

              <p className="section-label">
                BUSINESS ENQUIRY
              </p>

              <h2>
                SEND US
                <span> A MESSAGE</span>
              </h2>


              <form>

                <div className="form-group">

                  <label>
                    NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    EMAIL
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                  />

                </div>


                <div className="form-group">

                  <label>
                    COMPANY
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    PHONE
                  </label>

                  <input
                    type="tel"
                    placeholder="Phone number"
                  />

                </div>


                <div className="form-group">

                  <label>
                    MESSAGE
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                  />

                </div>


                <button
                  type="submit"
                  className="btn primary-btn"
                >
                  SEND ENQUIRY
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Contact