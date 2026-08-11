import { Link } from 'react-router-dom'

function Home() {

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <div className="container hero-content">

            <p className="hero-small">
              MULTIMAX CORPORATION
            </p>

            <h1>
              Building Foundations.
              <br />
              <span>Powering Industries.</span>
            </h1>

            <p className="hero-description">
              Integrated industrial solutions across mining,
              minerals trading, industrial products, and
              infrastructure supply.
            </p>

            <div className="hero-buttons">

              <Link
                to="/business"
                className="btn primary-btn"
              >
                EXPLORE OUR BUSINESS
              </Link>

              <Link
                to="/contact"
                className="btn secondary-btn"
              >
                CONTACT US
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* COMPANY INTRODUCTION */}

      <section className="home-about">

        <div className="container">

          <div className="section-heading">

            <p>ABOUT MULTIMAX</p>

            <h2>
              INTEGRATED SOLUTIONS
              <span> FROM GROUND TO INDUSTRY</span>
            </h2>

          </div>


          <div className="about-home-grid">

            <div>

              <p>
                Multimax Corporation is a diversified
                industrial enterprise established in 2022
                and headquartered in Kochi, Kerala, India.
              </p>

              <p>
                The company delivers integrated solutions
                across mining, minerals trading, industrial
                products, and infrastructure supply.
              </p>

              <p>
                With strong expertise in operations, legal
                compliance, logistics, and industrial trading,
                Multimax Corporation provides end-to-end
                solutions that support construction,
                infrastructure, manufacturing, and industrial
                sectors across India.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                DISCOVER MULTIMAX →
              </Link>

            </div>


            <div className="snapshot-card">

              <h3>COMPANY SNAPSHOT</h3>

              <div className="snapshot-item">
                <strong>2022</strong>
                <span>Established</span>
              </div>

              <div className="snapshot-item">
                <strong>Kochi</strong>
                <span>Kerala, India</span>
              </div>

              <div className="snapshot-item">
                <strong>8+</strong>
                <span>States with sourcing & transportation partnerships</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BUSINESS */}

      <section className="business-preview">

        <div className="container">

          <div className="section-heading light">

            <p>OUR BUSINESS</p>

            <h2>
              DIVERSIFIED INDUSTRIAL
              <span> EXPERTISE</span>
            </h2>

          </div>


          <div className="business-preview-grid">

            <div className="business-preview-card">

              <span>01</span>

              <h3>
                Mining & Aggregates
              </h3>

              <p>
                Quarry mining, aggregate production,
                mining licensing, land acquisition,
                and regulatory compliance.
              </p>

              <Link to="/business">
                EXPLORE →
              </Link>

            </div>


            <div className="business-preview-card">

              <span>02</span>

              <h3>
                Minerals Trading
              </h3>

              <p>
                Limestone, clinker and bauxite supply
                supported by sourcing and logistics
                networks across India.
              </p>

              <Link to="/business">
                EXPLORE →
              </Link>

            </div>


            <div className="business-preview-card">

              <span>03</span>

              <h3>
                Industrial Trading
              </h3>

              <p>
                Industrial lubricants, oils, PVC products,
                valves, fittings and allied products.
              </p>

              <Link to="/business">
                EXPLORE →
              </Link>

            </div>


            <div className="business-preview-card">

              <span>04</span>

              <h3>
                Fire Fighting Equipment
              </h3>

              <p>
                Firefighting equipment and industrial
                safety products for major projects.
              </p>

              <Link to="/business">
                EXPLORE →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* WHY MULTIMAX */}

      <section className="why-section">

        <div className="container">

          <div className="section-heading">

            <p>WHY MULTIMAX</p>

            <h2>
              BUILT ON
              <span> TRUST & RELIABILITY</span>
            </h2>

          </div>


          <div className="why-grid">

            <div>
              <strong>01</strong>
              <h3>Integrated Solutions</h3>
              <p>
                Mining, legal, logistics and supply
                solutions under one roof.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Regulatory Expertise</h3>
              <p>
                Expertise in KMMC, EC, PCB and
                statutory compliance.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Pan-India Network</h3>
              <p>
                Active sourcing and transportation
                partnerships across 8+ states.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Quality Assurance</h3>
              <p>
                Reliable products, quality control
                and timely delivery.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="container">

          <p>
            BUILDING LONG-TERM INDUSTRIAL PARTNERSHIPS
          </p>

          <h2>
            LET'S BUILD
            <span> SOMETHING STRONGER</span>
          </h2>

          <Link
            to="/contact"
            className="btn primary-btn"
          >
            GET IN TOUCH
          </Link>

        </div>

      </section>

    </>
  )
}

export default Home