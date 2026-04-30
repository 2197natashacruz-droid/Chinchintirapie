import { Music, Users, Sparkles, Heart, Drum, Palette } from 'lucide-react';

const workshops = [
  {
    icon: Users,
    title: 'Danza Carnavalera',
    description: 'Técnica, coreografía y expresión corporal inspirada en las comparsas tradicionales y contemporáneas.',
    highlight: true
  },
  {
    icon: Drum,
    title: 'Percusión',
    description: 'Ritmos de candombe, murga y batucada. Aprende a tocar bombo, redoblante y platillos.',
    highlight: false
  },
  {
    icon: Music,
    title: 'Comparsa',
    description: 'Ensayos colectivos donde integramos danza, música y vestuario en una experiencia completa.',
    highlight: false
  },
  {
    icon: Sparkles,
    title: 'Expresión Corporal',
    description: 'Explora el movimiento libre, la improvisación y la conexión con tu cuerpo en un espacio seguro.',
    highlight: false
  },
  {
    icon: Heart,
    title: 'Formación Comunitaria',
    description: 'Talleres abiertos para todas las edades centrados en el encuentro, la celebración y el aprendizaje compartido.',
    highlight: false
  },
  {
    icon: Palette,
    title: 'Vestuario y Diseño',
    description: 'Creación y confección de trajes, máscaras y accesorios para la comparsa.',
    highlight: false
  }
];

export function Workshops() {
  return (
    <section id="talleres" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-foreground mb-4">
            Nuestros Talleres
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-['Montserrat'] text-lg text-muted-foreground max-w-2xl mx-auto">
            Propuestas artísticas para todas las edades y niveles de experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => {
            const Icon = workshop.icon;
            return (
              <div
                key={index}
                className={`
                  bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer
                  ${workshop.highlight ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary/20 shadow-md' : ''}
                `}
              >
                <div className="flex flex-col gap-4">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center
                    ${workshop.highlight ? 'bg-primary' : 'bg-secondary'}
                  `}>
                    <Icon
                      size={28}
                      className={workshop.highlight ? 'text-primary-foreground' : 'text-foreground'}
                    />
                  </div>

                  <h3 className="font-['Cinzel'] text-2xl text-foreground">
                    {workshop.title}
                  </h3>

                  <p className="font-['Montserrat'] text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
