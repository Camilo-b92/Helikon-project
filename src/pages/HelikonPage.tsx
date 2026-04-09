import "../styles/helikon.css";
import { Col, Container, Row } from "react-bootstrap";
import PageMenu from "../components/PageMenu";
import SectionMarker from "../components/SectionMarker";
import SocialRail from "../components/SocialRail";

const menuItems = [
  { href: "#marca", label: "Marca" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function HelikonPage() {
  return (
    <div className="content-page helikon-page">
      <section className="page-hero-band">
        <Container fluid="xl">
          <Row className="align-items-start justify-content-between g-4">
            <Col md={3}>
              <PageMenu items={menuItems} />
            </Col>
            <Col md={6} className="text-center">
              <p className="helikon-greeting mb-0">!hola!</p>
              <p className="helikon-greeting secondary">somos...</p>
              <h1 className="brand-title">HELIKON</h1>
            </Col>
            <Col md={3} className="d-flex justify-content-md-end">
              <SocialRail />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="marca" className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Marca" />
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <div className="feature-card main">
                <div className="media-placeholder feature-image" />
                <h3>Nuestra Esencia</h3>
                <p>
                  Descubre quienes somos y que nos inspira. Aqui encontraras la
                  raiz creativa que da vida a Helikon.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="feature-grid">
                <div className="feature-card secondary">
                  <h3>Nuestro Proceso Creativo</h3>
                </div>
                <div className="feature-card secondary">
                  <h3>Nuestro Impacto</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="nosotros" className="section-band">
        <Container fluid="xl">
          <SectionMarker title="Integrantes" align="right" />
          <Row className="g-4">
            {["Gabriel Torres", "Camilo Betancourt", "Brayhan Castillo"].map(
              (member) => (
                <Col md={4} key={member}>
                  <div className="member-card">
                    <div className="media-placeholder member-photo" />
                    <h3>{member}</h3>
                  </div>
                </Col>
              ),
            )}
          </Row>
        </Container>
      </section>

      <section className="section-band" id="redes">
        <Container fluid="xl">
          <SectionMarker title="Siguenos!" />
          <div className="follow-panel">
            <SocialRail direction="grid" tone="dark" />
          </div>
        </Container>
      </section>

      <section className="section-band" id="contacto">
        <Container fluid="xl">
          <SectionMarker title="Contacto" />
          <div className="text-section narrow">
            <p>
              Si quieres hablar con nosotros sobre colaboraciones, procesos
              creativos o futuras experiencias, este espacio presenta el punto
              de contacto principal del proyecto Helikon.
            </p>
            <p className="mb-0">helikonco@gmail.com</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
