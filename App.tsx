import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Wines from './pages/Wines';
import FoodMenu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/about' },
    { name: 'Vini', path: '/wines' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contatti', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-playfair text-2xl tracking-wider text-secondary hover:text-white transition-colors">
              Enoteca Don Pietro
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-secondary'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent hover:bg-red-900 text-white px-4 py-2 rounded font-poppins text-sm font-bold transition-colors"
              >
                Prenota
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Apri menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium font-poppins ${
                  isActive(link.path)
                    ? 'text-secondary bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-secondary">Enoteca Don Pietro</h3>
            <p className="font-poppins text-gray-400 text-sm leading-relaxed">
              Dal 2010, selezioniamo vini artigianali e storie autentiche nel cuore di Milano. Un luogo dove la passione incontra la convivialità.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><MapPin size={20} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-secondary">Contatti</h3>
            <div className="space-y-3 font-poppins text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <span>Via Vigevano, 9<br />20144 Milano (MI)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+393386828287" className="hover:text-white">338 682 8287</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@enotecadonpietro.it" className="hover:text-white">info@enotecadonpietro.it</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-secondary">Orari</h3>
            <div className="space-y-3 font-poppins text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="mt-1 text-accent" />
                <div>
                  <p><span className="text-white">Mar - Sab:</span> 17:30 - 00:00</p>
                  <p><span className="text-white">Dom - Lun:</span> Chiuso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center font-poppins text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Enoteca Don Pietro. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wines" element={<Wines />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;