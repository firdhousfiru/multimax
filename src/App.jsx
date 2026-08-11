import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Business from './pages/Business'
import Products from './pages/Products'
import Leadership from './pages/Leadership'
import Clients from './pages/Clients'
import Opportunities from './pages/Opportunities'
import Contact from './pages/Contact'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/multimax" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/products" element={<Products />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App