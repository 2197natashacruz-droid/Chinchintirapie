import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Workshops } from './components/Workshops';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Workshops />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}