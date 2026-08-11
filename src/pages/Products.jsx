import { useState } from 'react'
import PageHero from '../components/PageHero'
import products from '../data/products'

function Products() {

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(
          product => product.category === activeCategory
        )

  return (
    <>

      <PageHero
        label="PRODUCT CATALOGUE"
        title="INDUSTRIAL PRODUCTS THAT PERFORM"
        description="Industrial lubricants, greases, oils, sprays and maintenance products for demanding applications."
      />


      <section className="products-section">

        <div className="container">

          <div className="section-heading">

            <p>PRODUCT CATEGORIES</p>

            <h2>
              INDUSTRIAL
              <span> SOLUTIONS</span>
            </h2>

          </div>


          <div className="product-filters">

            <button
              className={
                activeCategory === 'all'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveCategory('all')
              }
            >
              ALL
            </button>


            <button
              className={
                activeCategory === 'greases'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveCategory('greases')
              }
            >
              GREASES
            </button>


            <button
              className={
                activeCategory === 'oils'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveCategory('oils')
              }
            >
              OILS
            </button>


            <button
              className={
                activeCategory === 'sprays'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveCategory('sprays')
              }
            >
              SPRAYS
            </button>

          </div>


          <div className="product-count">

            Showing {filteredProducts.length} products

          </div>


          <div className="product-grid">

            {filteredProducts.map(product => (

              <div
                className="product-card"
                key={product.code}
              >

                <div className="product-code">
                  {product.code}
                </div>

                <h3>
                  {product.name}
                </h3>

                <p className="product-application">
                  {product.application}
                </p>


                <div className="product-prices">

                  {product.prices.map(
                    (item, index) => (

                      <div
                        className="price-row"
                        key={index}
                      >

                        <span>
                          {item.pack}
                        </span>

                        <strong>
                          {item.price}
                        </strong>

                      </div>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OTHER CATEGORIES */}

      <section className="product-category-info">

        <div className="container">

          <div className="section-heading">

            <p>PRODUCT RANGE</p>

            <h2>
              MORE INDUSTRIAL
              <span> SOLUTIONS</span>
            </h2>

          </div>


          <div className="feature-grid">

            <div>Hydraulic Fluids</div>

            <div>Synthetic Gear Oils</div>

            <div>Compressor Oils</div>

            <div>Industrial Greases</div>

            <div>High Temperature Greases</div>

            <div>Polyurea Greases</div>

            <div>Lithium Complex Greases</div>

            <div>Chain Oils</div>

            <div>Wire Rope Lubricants</div>

            <div>Anti-Seize Compounds</div>

            <div>Industrial Cleaners</div>

            <div>Degreasers</div>

            <div>Fire Fighting Equipment</div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Products