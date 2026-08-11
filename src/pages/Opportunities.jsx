import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const opportunities = [

  {
    number: '01',
    title: 'Investors',
    description: `Investment opportunities for quarry expansion, crushing plant development, and infrastructure growth with structured return models linked to long-term supply contracts.`
  },

  {
    number: '02',
    title: 'Joint Venture Partners',
    description: `Partnership opportunities with quarry owners, logistics companies, regional distributors, and infrastructure organizations for mining operations and industrial expansion.`
  },

  {
    number: '03',
    title: 'Industrial Buyers',
    description: `Annual Rate Contracts (ARCs), long-term supply agreements, dedicated account management, priority dispatch, and flexible commercial terms for industrial customers.`
  }

]

function Opportunities() {

  return (
    <>

      <PageHero
        label="BUSINESS OPPORTUNITIES"
        title="LET'S BUILD LONG-TERM PARTNERSHIPS"
        description="Multimax Corporation welcomes strategic partnerships across various business models."
      />


      <section className="opportunities-section">

        <div className="container">

          <div className="opportunities-grid">

            {opportunities.map(opportunity => (

              <div
                className="opportunity-card"
                key={opportunity.title}
              >

                <span>
                  {opportunity.number}
                </span>

                <h2>
                  {opportunity.title}
                </h2>

                <p>
                  {opportunity.description}
                </p>

                <Link to="/contact">
                  DISCUSS AN OPPORTUNITY →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="opportunity-cta">

        <div className="container">

          <p>
            READY TO EXPLORE A PARTNERSHIP?
          </p>

          <h2>
            BUILD THE NEXT
            <span> OPPORTUNITY TOGETHER.</span>
          </h2>

          <Link
            to="/contact"
            className="btn primary-btn"
          >
            CONTACT US
          </Link>

        </div>

      </section>

    </>
  )
}

export default Opportunities