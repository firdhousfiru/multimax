import PageHero from '../components/PageHero'

function About() {

  return (
    <>

      <PageHero
        label="ABOUT MULTIMAX"
        title="INTEGRATED SOLUTIONS FROM GROUND TO INDUSTRY"
        description="A diversified industrial enterprise serving construction, infrastructure, manufacturing and industrial sectors across India."
      />


      <section className="content-section">

        <div className="container">

          <div className="content-grid">

            <div>

              <p className="section-label">
                COMPANY OVERVIEW
              </p>

              <h2>
                BUILT FOR INDUSTRIAL
                <span> EXCELLENCE</span>
              </h2>

            </div>


            <div className="content-text">

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

              <p>
                The company's core philosophy is to provide
                integrated solutions from ground to industry
                while maintaining the highest standards of
                quality, transparency, and reliability.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SNAPSHOT */}

      <section className="snapshot-section">

        <div className="container">

          <div className="section-heading">

            <p>COMPANY SNAPSHOT</p>

            <h2>
              MULTIMAX
              <span> AT A GLANCE</span>
            </h2>

          </div>


          <div className="snapshot-grid">

            <div className="big-stat">
              <strong>2022</strong>
              <span>Established</span>
            </div>

            <div className="big-stat">
              <strong>KOCHI</strong>
              <span>Kerala, India</span>
            </div>

            <div className="big-stat">
              <strong>8+</strong>
              <span>Indian states with active sourcing and transportation partnerships</span>
            </div>

            <div className="big-stat">
              <strong>360°</strong>
              <span>Integrated industrial solutions</span>
            </div>

          </div>

        </div>

      </section>


      {/* CORE STRENGTHS */}

      <section className="content-section">

        <div className="container">

          <div className="section-heading">

            <p>OUR STRENGTHS</p>

            <h2>
              WHAT DRIVES
              <span> MULTIMAX</span>
            </h2>

          </div>


          <div className="feature-grid">

            <div>Multi-vertical expertise</div>

            <div>Mining operations</div>

            <div>Minerals trading</div>

            <div>Industrial supply</div>

            <div>Regulatory compliance</div>

            <div>Logistics management</div>

          </div>

        </div>

      </section>

    </>
  )
}

export default About