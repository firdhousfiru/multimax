import PageHero from '../components/PageHero'

function Business() {

  return (
    <>

      <PageHero
        label="BUSINESS DIVISIONS"
        title="DIVERSIFIED INDUSTRIAL CAPABILITIES"
        description="Integrated solutions across mining, minerals trading, industrial supply and fire safety."
      />


      {/* MINING */}

      <section className="business-detail">

        <div className="container">

          <div className="business-detail-header">

            <span>01</span>

            <div>
              <p className="section-label">
                MINING & AGGREGATES
              </p>

              <h2>
                FROM QUARRY
                <span> TO PROJECT</span>
              </h2>
            </div>

          </div>


          <p className="business-intro">
            Multimax Corporation operates quarry mining
            and aggregate production with complete
            operational control to ensure quality,
            consistency, and timely delivery.
          </p>


          <div className="business-columns">

            <div>

              <h3>Services</h3>

              <ul>
                <li>Granite Quarry Mining</li>
                <li>Quarry Operations</li>
                <li>Aggregate Production</li>
                <li>M-Sand</li>
                <li>P-Sand</li>
                <li>6 mm Aggregates</li>
                <li>12 mm Aggregates</li>
                <li>20 mm Aggregates</li>
                <li>40 mm Aggregates</li>
                <li>Custom Aggregate Grades</li>
                <li>Crushing & Grading</li>
                <li>Stockpile Management</li>
              </ul>

            </div>


            <div>

              <h3>Mining Support Services</h3>

              <ul>
                <li>End-to-end Mining Licensing</li>
                <li>Land Acquisition</li>
                <li>Legal Documentation</li>
                <li>Statutory Compliance</li>
                <li>Government Clearances</li>
                <li>Lease Management</li>
              </ul>


              <h3 className="sub-heading">
                Regulatory Expertise
              </h3>

              <ul>
                <li>KMMC Rules Compliance</li>
                <li>Environmental Clearance (EC)</li>
                <li>Pollution Control Board (PCB) Approvals</li>
                <li>Audit-ready Documentation</li>
              </ul>

            </div>

          </div>


          <div className="value-box">

            <strong>VALUE PROPOSITION</strong>

            <p>
              Multimax Corporation provides complete
              mining solutions through a single-window
              approach covering material supply, statutory
              documentation, legal compliance, and
              operational support.
            </p>

          </div>

        </div>

      </section>


      {/* MINERALS */}

      <section className="business-detail dark-business">

        <div className="container">

          <div className="business-detail-header">

            <span>02</span>

            <div>
              <p className="section-label">
                MINERALS TRADING
              </p>

              <h2>
                CONNECTING SOURCES
                <span> TO INDUSTRY</span>
              </h2>
            </div>

          </div>


          <p className="business-intro">
            Multimax Corporation supplies minerals to
            cement plants, steel industries, infrastructure
            companies, and industrial customers across
            India through an extensive sourcing and
            logistics network.
          </p>


          <h3>Products</h3>

          <div className="pill-grid">

            <span>Limestone</span>
            <span>Clinker</span>
            <span>Bauxite</span>

          </div>


          <h3>Features</h3>

          <div className="feature-grid light-grid">

            <div>High Calcium Limestone</div>
            <div>Dolomitic Limestone</div>
            <div>Reliable Clinker Supply</div>
            <div>Third-party Assay & Quality Control</div>
            <div>Bulk Mineral Trading</div>
            <div>500+ MT Consignments</div>
            <div>Pan-India Supply Network</div>

          </div>


          <h3>Logistics & Quality</h3>

          <div className="feature-grid light-grid">

            <div>End-to-end logistics</div>
            <div>Mine-to-Plant delivery</div>
            <div>Weighment Management</div>
            <div>Third-party Testing</div>
            <div>Real-time Shipment Tracking</div>
            <div>Bulk Handling</div>
            <div>Quality Certificates</div>
            <div>Flexible Credit Support</div>
            <div>Structured Credit Lines</div>

          </div>


          <div className="network-highlight">

            <strong>8+</strong>

            <p>
              Indian states with active sourcing and
              transportation partnerships.
            </p>

          </div>

        </div>

      </section>


      {/* INDUSTRIAL TRADING */}

      <section className="business-detail">

        <div className="container">

          <div className="business-detail-header">

            <span>03</span>

            <div>
              <p className="section-label">
                INDUSTRIAL TRADING
              </p>

              <h2>
                INDUSTRIAL PRODUCTS
                <span> THAT PERFORM</span>
              </h2>
            </div>

          </div>


          <p className="business-intro">
            Multimax Corporation supplies industrial
            lubricants, oils, piping systems, valves,
            fittings, and allied industrial products to
            construction, manufacturing, infrastructure,
            and industrial sectors.
          </p>


          <div className="business-columns">

            <div>

              <h3>Industrial Lubricants</h3>

              <ul>
                <li>Engine Oils</li>
                <li>Hydraulic Oils</li>
                <li>EP Gear Oils</li>
                <li>Industrial Greases</li>
                <li>Compressor Oils</li>
                <li>Chain Oils</li>
              </ul>


              <h3 className="sub-heading">
                PVC Products
              </h3>

              <ul>
                <li>PVC Pipes</li>
                <li>UPVC Pipes</li>
                <li>SWR Pipes</li>
                <li>Pipe Fittings</li>
              </ul>

            </div>


            <div>

              <h3>Industrial Fittings</h3>

              <ul>
                <li>Valves</li>
                <li>Elbows</li>
                <li>Tees</li>
                <li>Adaptors</li>
                <li>Industrial Project Kits</li>
              </ul>


              <h3 className="sub-heading">
                Features
              </h3>

              <ul>
                <li>Authorized Supplier</li>
                <li>Preferred Supplier</li>
                <li>Genuine Products</li>
                <li>Technical Support</li>
                <li>Reliable Supply Chain</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* FIRE FIGHTING */}

      <section className="fire-section">

        <div className="container">

          <p className="section-label">
            04 — FIRE FIGHTING EQUIPMENT
          </p>

          <h2>
            SAFETY FOR
            <span> CRITICAL ENVIRONMENTS</span>
          </h2>

          <p>
            Multimax Corporation also supplies firefighting
            equipment and industrial safety products for
            commercial, industrial, manufacturing, and
            infrastructure projects.
          </p>

        </div>

      </section>

    </>
  )
}

export default Business