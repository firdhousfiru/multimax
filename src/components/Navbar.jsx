import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link
  to="/"
  className="navbar-logo"
  onClick={closeMenu}
>
  <img
    src={logo}
    alt="Multimax Corporation Logo"
    className="navbar-logo-image"
  />

  <div className="logo-text">
    <div className="logo-main">
      MULTIMAX
    </div>

    <div className="logo-sub">
      CORPORATION
    </div>
  </div>
</Link>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>


        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <NavLink
            to="/multimax"
            onClick={closeMenu}
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/business"
            onClick={closeMenu}
          >
            BUSINESS
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
          >
            PRODUCTS
          </NavLink>

          <NavLink
            to="/leadership"
            onClick={closeMenu}
          >
            LEADERSHIP
          </NavLink>

          <NavLink
            to="/clients"
            onClick={closeMenu}
          >
            CLIENTS
          </NavLink>

          <NavLink
            to="/opportunities"
            onClick={closeMenu}
          >
            OPPORTUNITIES
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            CONTACT
          </NavLink>

        </nav>

      </div>

    </header>
  )
}

export default Navbar