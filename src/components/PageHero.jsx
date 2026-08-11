function PageHero({ label, title, description }) {

  return (

    <section className="page-hero">

      <div className="container">

        <p className="page-hero-label">
          {label}
        </p>

        <h1>
          {title}
        </h1>

        {description && (
          <p className="page-hero-description">
            {description}
          </p>
        )}

      </div>

    </section>

  )
}

export default PageHero