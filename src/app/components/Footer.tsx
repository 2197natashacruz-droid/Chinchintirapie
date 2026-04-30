import { Instagram, Mail } from 'lucide-react';
import logoImage from '../../imports/imagen_(2).png';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Logo Chinchintirapie"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <h3 className="font-['Cinzel'] text-xl">Chinchintirapie</h3>
            </div>
            <p className="font-['Montserrat'] text-sm text-background/80">
              Escuela carnavalera · danza · ritmo · comunidad
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-['Cinzel'] text-lg mb-2">Navegación</h4>
            <a href="#escuela" className="font-['Montserrat'] text-sm text-background/80 hover:text-background transition-colors">
              Sobre la Escuela
            </a>
            <a href="#talleres" className="font-['Montserrat'] text-sm text-background/80 hover:text-background transition-colors">
              Talleres
            </a>
            <a href="#galeria" className="font-['Montserrat'] text-sm text-background/80 hover:text-background transition-colors">
              Galería
            </a>
            <a href="#eventos" className="font-['Montserrat'] text-sm text-background/80 hover:text-background transition-colors">
              Eventos
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-['Cinzel'] text-lg mb-2">Seguinos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/chinchintirapie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@chinchintirapie.com"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="font-['Montserrat'] text-sm text-background/80 mt-4">
              Buenos Aires, Argentina
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="font-['Montserrat'] text-sm text-background/60 text-center">
            © 2026 Chinchintirapie Escuela Carnavalera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
