import "../styles/comic.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionMarker from "../components/SectionMarker";

export default function ComicPage() {
  return (
    <div className="content-page comic-page">
      <section className="comic-hero">
        <Container fluid="xl" className="text-center">
          <h1 className="brand-title">COMIC</h1>
          <p className="comic-tagline">
            Un relato donde la musica guia el destino de nuestro protagonista.
          </p>
          <p className="comic-summary">
            Un comic interactivo que combina narrativa y musica, donde cada
            eleccion del lector transforma la historia en una experiencia
            inolvidable.
          </p>
        </Container>
      </section>

      <section className="section-band">
        <Container fluid="xl">
          <div className="chapter-slider">
            <button className="slider-arrow" aria-label="Anterior">
              <span aria-hidden="true">&lt;</span>
            </button>
            <div className="chapter-card side">
              <div className="media-placeholder chapter-thumb" />
              <h3>Capitulo 3</h3>
              <h4>La liberacion</h4>
              <p>
                Tras pruebas dolorosas, Juanes entiende el verdadero poder del
                amor y transforma la relación con el arte.
              </p>
            </div>
            <div className="chapter-card featured">
              <div className="media-placeholder chapter-thumb" />
              <h3>Capitulo 1</h3>
              <h4>El descubrimiento</h4>
              <p>
                La infancia de Juanes se llena de curiosidad y asombro cuando
                encuentra una misteriosa guitarra que marcara su destino.
              </p>
            </div>
            <div className="chapter-card side">
              <div className="media-placeholder chapter-thumb" />
              <h3>Capitulo 2</h3>
              <h4>La maldicion</h4>
              <p>
                Mientras crece, su sueno y su vida presentan tragedias y senales
                extranas que revelan oscuros secretos.
              </p>
            </div>
            <button className="slider-arrow" aria-label="Siguiente">
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Personajes" align="right" />
          <Row className="g-4">
            {["Juanes", "Mensajero", "Ver mas"].map((item) => (
              <Col md={4} key={item}>
                <div className="member-card">
                  <div className="media-placeholder member-photo" />
                  <h3>{item}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Info. del Comic" />
          <Row className="g-4">
            <Col lg={5}>
              <div className="info-block tall">
                <h3>Que es un Comic Interactivo?</h3>
              </div>
            </Col>
            <Col lg={7}>
              <div className="info-stack">
                <div className="info-block short">
                  <h3>Historia</h3>
                </div>
                <div className="info-block short">
                  <h3>Proceso Creativo</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
