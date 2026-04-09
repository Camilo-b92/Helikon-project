import "../styles/juanes.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageMenu from "../components/PageMenu";
import SectionMarker from "../components/SectionMarker";
import SimpleIcon from "../components/SimpleIcon";
import SocialRail from "../components/SocialRail";

const menuItems = [
  { href: "#premios", label: "Premio" },
  { href: "#artista", label: "Artista" },
  { href: "#tienda", label: "Tienda" },
  { href: "#discografia", label: "Discografia" },
];

export default function JuanesPage() {
  return (
    <div className="content-page juanes-page">
      <section className="page-hero-band">
        <Container fluid="xl">
          <Row className="align-items-start justify-content-between g-4">
            <Col md={3}>
              <PageMenu items={menuItems} />
            </Col>
            <Col md={6} className="text-center">
              <h1 className="brand-title brand-title-dark">JUANES</h1>
              <SimpleIcon label="mouse" className="hero-mouse" />
            </Col>
            <Col md={3} className="d-flex justify-content-md-end">
              <SocialRail />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="lyric-band">
        <Container fluid="xl">
          <p className="lyric-line">Tengo la camisa negra, hoy mi amor esta de luto...</p>
          <p className="lyric-line text-end mb-0">
            Hoy tengo en el alma una pena y es por culpa...
          </p>
        </Container>
      </section>

      <section id="premios" className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Premios" align="right" />
          <div className="award-row">
            <button className="slider-arrow" aria-label="Anterior">
              <span aria-hidden="true">&lt;</span>
            </button>
            <div className="award-card">
              <div className="media-placeholder rectangular" />
              <h3>Grammys</h3>
            </div>
            <div className="award-card">
              <div className="media-placeholder rectangular" />
              <h3>Tv y Novelas</h3>
            </div>
            <div className="award-card">
              <div className="media-placeholder rectangular" />
              <h3>Lo Nuestro</h3>
            </div>
            <button className="slider-arrow" aria-label="Siguiente">
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </Container>
      </section>

      <section id="artista" className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Juanes" align="right" />
          <div className="text-section narrow">
            <p>
              Juan Esteban Aristizabal Vasquez es un cantautor, compositor y
              productor colombiano reconocido por unir sensibilidad, identidad
              latina y una estetica sonora profundamente emocional.
            </p>
            <p>
              Su musica se caracteriza por la fusion entre rock, pop y ritmos
              latinos, junto con una narrativa cercana que conecta con la
              experiencia personal y social.
            </p>
            <p className="mb-0">
              Gracias a su autenticidad, este proyecto lo presenta como una
              figura capaz de vincular cancion, imagen y relato en una sola
              experiencia.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Sus inicios" />
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="section-copy-large">
                En Antioquia dio sus primeros pasos junto a otros amigos en una
                banda de metal, pero con el tiempo encontro en la cancion
                sensible y la narrativa intima el lenguaje que terminaria
                definiendo su identidad artistica.
              </p>
              <p className="section-copy-large">
                Esa busqueda se convirtio en el punto de partida para una obra
                que hoy inspira esta experiencia digital.
              </p>
              <Button className="pill-button" variant="light">
                Leer mas
              </Button>
            </Col>
            <Col lg={5}>
              <div className="asymmetric-media">
                <div className="media-placeholder rounded-photo large" />
                <div className="media-placeholder rounded-photo medium" />
                <div className="media-placeholder square-float" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="tienda" className="section-band">
        <Container fluid="xl">
          <div className="store-panel">
            <div className="store-arrows">
              <span aria-hidden="true" className="store-arrow-symbol">
                -&gt;
              </span>
              <span aria-hidden="true" className="store-arrow-symbol">
                &lt;-
              </span>
            </div>
            <div className="store-word">TIENDA</div>
            <Button className="pill-button" variant="light">
              Ir a la tienda
            </Button>
          </div>
        </Container>
      </section>

      <section id="discografia" className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Discografia" align="right" />
          <Row className="align-items-end g-4">
            <Col lg={4}>
              <div className="album-copy">
                <div className="media-placeholder album-cover" />
                <div>
                  <h3>Un dia normal</h3>
                  <p>
                    Album clave dentro de su recorrido artistico, con canciones
                    que consolidaron su voz y su conexion con el publico.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="media-placeholder album-floating" />
            </Col>
            <Col lg={4}>
              <div className="media-placeholder album-floating small" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-band">
        <Container fluid="xl">
          <div className="video-section">
            <div className="video-play">
              <span className="play-triangle" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-band gallery-strip">
        <Container fluid="xl">
          <div className="mini-gallery">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="media-placeholder mini-thumb" />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
