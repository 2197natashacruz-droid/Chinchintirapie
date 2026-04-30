import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Inscripciones Abiertas 2026',
    date: 'Mayo - Junio',
    time: 'Inicio de clases en Julio',
    location: 'Todas las disciplinas',
    description: 'Abrimos inscripciones para todos nuestros talleres. ¡No te quedes afuera!',
    featured: true
  },
  {
    title: 'Muestra Anual de Talleres',
    date: '15 de Diciembre 2026',
    time: '18:00 hs',
    location: 'Teatro Municipal',
    description: 'Presentación de fin de año con todas las propuestas artísticas de la escuela.',
    featured: false
  },
  {
    title: 'Carnaval Comunitario',
    date: 'Febrero 2027',
    time: 'A confirmar',
    location: 'Plaza del barrio',
    description: 'Desfile y celebración abierta con toda la comunidad. Música, danza y color.',
    featured: false
  }
];

export function Events() {
  return (
    <section id="eventos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-foreground mb-4">
            Agenda y Actividades
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-['Montserrat'] text-lg text-muted-foreground max-w-2xl mx-auto">
            Próximos eventos, muestras e inscripciones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`
                bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                ${event.featured ? 'ring-2 ring-secondary shadow-md' : ''}
              `}
            >
              <div className="flex flex-col gap-4">
                {event.featured && (
                  <span className="inline-block self-start px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-['Montserrat'] font-medium">
                    Destacado
                  </span>
                )}

                <h3 className="font-['Cinzel'] text-2xl text-foreground">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-3 text-muted-foreground font-['Montserrat']">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="font-['Montserrat'] text-muted-foreground leading-relaxed mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
