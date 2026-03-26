import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row gy-4">

          <div className="col-md-4">
            <h5 className="fw-bold mb-2">🎵 Helikon</h5>
            <p className="text-white-50 small mb-0">
              Un cómic que celebra la música colombiana, su historia y su identidad cultural.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-semibold mb-3 text-uppercase small tracking-wide">Navegación</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <NavLink to="/about" className="text-white-50 text-decoration-none footer-link">
                  Nosotros
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/comic" className="text-white-50 text-decoration-none footer-link">
                  Cómic
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/contact" className="text-white-50 text-decoration-none footer-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-semibold mb-3 text-uppercase small">Contacto</h6>
            <p className="text-white-50 small mb-1">📧 hola@helikon.co</p>
            <p className="text-white-50 small mb-0">📍 Colombia</p>
          </div>

        </div>

        <hr className="border-secondary mt-4 mb-3" />
        <p className="text-white-50 small text-center mb-0">
          &copy; {new Date().getFullYear()} Helikon Project. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer