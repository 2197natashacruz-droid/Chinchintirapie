import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from '../../imports/WhatsApp Image 2026-04-28 at 17.00.58.jpeg';

export function About() {
  return (
    <section id="escuela" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <ImageWithFallback
              src={aboutImage}
              alt="Personas con vestimenta tradicional y pintura facial bailando"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <h2 className="font-cinzel display-4 text-primary">Sobre la Escuela</h2>
            <hr className="w-25 bg-secondary" />
            <p className="font-montserrat text-muted mb-3">
              Chinchintirapie es más que una escuela de danza, es un espacio de encuentro cultural donde el carnaval cobra vida a través del movimiento, la música y la comunidad.
            </p>
            <p className="font-montserrat text-muted mb-3">
              Nuestro nombre evoca el sonido festivo de los instrumentos de percusión, el ritmo contagioso que nos mueve y la alegría de compartir juntos esta tradición viva.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2">
                <span className="badge bg-primary me-2">Identidad cultural:</span>
                Preservamos y reinventamos la tradición carnavalera desde una mirada contemporánea.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="badge bg-primary me-2">Experiencia colectiva:</span>
                Creemos en el poder transformador del arte comunitario y la creación colectiva.
              </li>
              <li className="d-flex align-items-start">
                <span className="badge bg-primary me-2">Formación integral:</span>
                Integramos técnica, expresión corporal, música y diseño en una propuesta artística completa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
