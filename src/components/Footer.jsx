import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-company">

          <h2>MULTIMAX</h2>

          <span>CORPORATION</span>

          <p>
            Building Foundations. Powering Industries.
          </p>

          <p>
            A diversified industrial enterprise delivering
            integrated solutions from ground to industry.
          </p>

        </div>


        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <Link to="/about">About</Link>

          <Link to="/business">Business</Link>

          <Link to="/products">Products</Link>

          <Link to="/leadership">Leadership</Link>

          <Link to="/clients">Clients</Link>

          <Link to="/opportunities">
            Opportunities
          </Link>

          <Link to="/contact">Contact</Link>

        </div>


        <div className="footer-contact">

          <h3>CONTACT</h3>

          <p>
            Kochi, Kerala, India
          </p>

          <p>
            +91 99610 05161
          </p>

          <p>
            +91 99466 45333
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Multimax Corporation.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer