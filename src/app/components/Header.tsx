import { useState } from 'react';
import logoImage from '../../imports/imagen_(2).png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid max-w-7xl mx-auto px-3">
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => scrollToSection('hero')}>
          <img src={logoImage} alt="Logo Chinchintirapie" className="me-2" style={{ width: '40px', height: '40px' }} />
          <span className="fw-bold text-primary">Chinchintirapie</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection('escuela')}>Escuela</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection('talleres')}>Talleres</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection('galeria')}>Galería</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection('eventos')}>Eventos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary text-white" onClick={() => scrollToSection('contacto')}>Contacto</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
