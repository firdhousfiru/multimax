import PageHero from '../components/PageHero'

const clients = [
  'Afcons Infrastructure Ltd',
  'Oriental Structural Engineering',
  'Shivalaya Constructions Ltd',
  'DBL Infra Ltd',
  'NSC Ltd – CIAL',
  'Malabar Cements Ltd'
]

function Clients() {

  return (
    <>

      <PageHero
        label="OUR CLIENTS"
        title="TRUSTED BY INDUSTRY"
        description="Building long-term relationships with infrastructure, construction and industrial organizations."
      />


      <section className="clients-section">

        <div className="container">

          <div className="section-heading">

            <p>MAJOR CLIENTS</p>

            <h2>
              PARTNERSHIPS BUILT ON
              <span> TRUST</span>
            </h2>

          </div>


          <div className="clients-grid">

            {clients.map((client, index) => (

              <div
                className="client-card"
                key={client}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {client}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  )
}

export default Clients