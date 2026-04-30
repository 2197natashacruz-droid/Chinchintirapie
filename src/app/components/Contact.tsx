import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-['Montserrat'] text-lg text-muted-foreground max-w-2xl mx-auto">
            Escribinos para sumarte a nuestra comunidad carnavalera
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-['Cinzel'] text-xl text-foreground mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Montserrat'] text-muted-foreground hover:text-primary transition-colors"
                >
                  +54 9 11 1234-5678
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-['Cinzel'] text-xl text-foreground mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/chinchintirapie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Montserrat'] text-muted-foreground hover:text-primary transition-colors"
                >
                  @chinchintirapie
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-['Cinzel'] text-xl text-foreground mb-2">Email</h3>
                <a
                  href="mailto:info@chinchintirapie.com"
                  className="font-['Montserrat'] text-muted-foreground hover:text-primary transition-colors"
                >
                  info@chinchintirapie.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-['Cinzel'] text-xl text-foreground mb-2">Ubicación</h3>
                <p className="font-['Montserrat'] text-muted-foreground">
                  Sede: Por confirmar<br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="font-['Cinzel'] text-2xl text-foreground mb-6">Envianos un mensaje</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="font-['Montserrat'] text-sm text-foreground mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="font-['Montserrat'] text-sm text-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="font-['Montserrat'] text-sm text-foreground mb-2 block">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Contanos sobre tu consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-['Montserrat']"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
