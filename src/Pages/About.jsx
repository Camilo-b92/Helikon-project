import '../styles/About.css'

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">Sobre Helikon</h1>
          <p className="lead text-white-50 mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            Un proyecto multimedia que rescata la identidad musical colombiana a través del cómic digital.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">¿Qué es Helikon?</h2>
              <p className="text-muted">
                Helikon es un cómic digital interactivo que narra la historia de la música colombiana
                desde sus raíces hasta las nuevas generaciones. A través de personajes y aventuras,
                exploramos los ritmos, artistas y tradiciones que forman nuestra identidad sonora.
              </p>
              <p className="text-muted">
                El proyecto nace de la necesidad de conectar a los jóvenes con su patrimonio cultural
                musical, usando narrativas visuales atractivas y plataformas digitales modernas.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-placeholder-img rounded-3 bg-secondary d-flex align-items-center justify-content-center">
                <span className="text-white-50 fs-1">🎸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Nuestro propósito</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">🎵</div>
                <h5 className="fw-bold">Identidad</h5>
                <p className="text-muted small">
                  Conectar a los jóvenes con las raíces musicales colombianas y su herencia cultural.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">📖</div>
                <h5 className="fw-bold">Narrativa</h5>
                <p className="text-muted small">
                  Contar historias que emocionan y enseñan a través del cómic y la exploración visual.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">🌎</div>
                <h5 className="fw-bold">Cultura viva</h5>
                <p className="text-muted small">
                  Llevar la música colombiana a plataformas digitales para las nuevas generaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About