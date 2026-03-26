import { NavLink } from 'react-router-dom'
 
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
 
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          🎵 Helikon
        </NavLink>
 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-semibold' : 'nav-link'
                }
                to="/about"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-semibold' : 'nav-link'
                }
                to="/comic"
              >
                Cómic
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-semibold' : 'nav-link'
                }
                to="/contact"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
 
      </div>
    </nav>
  )
}
 
export default Header