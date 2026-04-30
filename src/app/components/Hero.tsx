import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '../../imports/imagen_(2).png';
import heroImage from '../../imports/WhatsApp Image 2026-04-28 at 17.00.58.jpeg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section id="hero" className="min-vh-100 d-flex align-items-center justify-content-center pt-5 px-3 position-relative overflow-hidden bg-light">
  <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
    <div className="position-absolute top-20 start-10 w-32 h-32 rounded-circle bg-primary bg-opacity-20 blur" style={{ filter: 'blur(30px)' }}></div>
    <div className="position-absolute bottom-20 end-10 w-40 h-40 rounded-circle bg-secondary bg-opacity-20 blur" style={{ filter: 'blur(30px)' }}></div>
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <img src={logoImage} alt="Logo Chinchintirapie Escuela Carnavalera" className="img-fluid w-50" />
        <h1 className="font-cinzel display-4 text-primary mb-2">Chinchintirapie</h1>
        <p className="font-cinzel h4 text-muted">Escuela Carnavalera</p>
        <p className="font-montserrat lead text-muted mb-4">Ritmo, danza y comunidad en una experiencia carnavalera viva</p>
        <button onClick={() => scrollToSection('talleres')} className="btn btn-primary btn-lg me-2">Conoce nuestros talleres</button>
        <button onClick={() => scrollToSection('contacto')} className="btn btn-outline-primary btn-lg">Contáctanos</button>
      </div>
      <div className="col-md-6">
        <ImageWithFallback
          src={heroImage}
          alt="Bailarinas en trajes coloridos de carnaval"
          className="img-fluid rounded shadow-lg"
        />
        <div className="position-absolute bottom-0 start-0 w-100 bg-gradient text-white p-3">
          <p className="font-cinzel h5 mb-0">Expresión · Movimiento · Cultura</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
