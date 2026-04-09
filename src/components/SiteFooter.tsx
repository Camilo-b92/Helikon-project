import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container fluid="xl">
        <Row className="gy-4 align-items-start">
          <Col md={4}>
            <p className="site-footer-heading">Contactanos</p>
            <p className="site-footer-copy mb-1">helikonco@gmail.com</p>
            <p className="site-footer-copy mb-1">+57 3003000030</p>
            <p className="site-footer-copy mb-0">Carrera 10 #10 - 10</p>
          </Col>
          <Col xs={6} md={2}>
            <p className="site-footer-heading">JUANES</p>
            <div className="site-footer-links">
              <a href="/juanes#premios">Premios</a>
              <a href="/juanes#artista">Artista</a>
              <a href="/juanes#tienda">Tienda</a>
              <a href="/juanes#discografia">Discografia</a>
            </div>
          </Col>
          <Col xs={6} md={2}>
            <p className="site-footer-heading">HELIKON</p>
            <div className="site-footer-links">
              <a href="/helikon#marca">Marca</a>
              <a href="/helikon#nosotros">Nosotros</a>
              <a href="/helikon#redes">Redes sociales</a>
              <a href="/helikon#contacto">Contacto</a>
            </div>
          </Col>
          <Col md={4} className="text-md-end">
            <Link to="/" className="home-return-pill">
              Pagina principal
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
