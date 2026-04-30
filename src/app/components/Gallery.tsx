import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1767979349910-655bdc4e2f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Bailarina con traje vibrante amarillo y rojo',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1741789632328-4940fc43cbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Hombre con traje colorido de carnaval',
    span: ''
  },
  {
    src: 'https://images.unsplash.com/photo-1718996958977-caf0d806a88b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Grupo de personas con trajes de carnaval',
    span: ''
  },
  {
    src: 'https://images.unsplash.com/photo-1769133092838-2417fe549c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Danza tradicional con pintura facial',
    span: 'md:col-span-2'
  }
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-foreground mb-4">
            Nuestra Galería
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="font-['Montserrat'] text-lg text-muted-foreground max-w-2xl mx-auto">
            Momentos de ensayo, presentaciones y la energía de nuestra comunidad carnavalera
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
