import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Wine as WineIcon, Users, Grape, ArrowRight, ChevronRight, Star } from 'lucide-react';
import { WINES } from '../constants';

const Home: React.FC = () => {
  // Select top 5 wines for the featured section
  const featuredWines = WINES.slice(0, 5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Updated to Wine Theme */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1920&auto=format&fit=crop" 
            alt="Enoteca interior with wine bottles" 
            className="w-full h-full object-cover animate-fade-in"
          />
          {/* Gradient Overlay for better text readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1A1A1A]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-block border-b border-secondary/60 pb-2 mb-6">
            <span className="font-poppins text-secondary uppercase tracking-[0.2em] text-sm md:text-base">Dal 2010 a Milano</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-xl">
            Enoteca <span className="text-secondary font-italic">Don Pietro</span>
          </h1>
          <p className="font-crimson italic text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            "Nel cuore dei Navigli, dove ogni calice racconta la storia di una terra e delle mani che l'hanno lavorata."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/wines" 
              className="group relative px-8 py-4 bg-accent overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(114,47,55,0.6)]"
            >
              <span className="relative z-10 font-poppins font-bold text-white tracking-wide uppercase text-sm">Scopri la Cantina</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-red-900/50"></div>
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-white/30 text-white font-poppins text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-primary transition-colors duration-300 rounded-sm backdrop-blur-sm"
            >
              Prenota un Tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section Cards */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-primary mb-4">L'Eccellenza nel Dettaglio</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-offWhite flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <WineIcon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">Qualità Consapevole</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Selezioniamo vini da piccoli produttori indipendenti, dove ogni bottiglia racconta una storia di passione e artigianalità unica.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-offWhite flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Users className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">Convivialità Autentica</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Un'atmosfera intima e accogliente, ispirata ai bacari veneziani. Lo spazio perfetto per scoprire, assaggiare, condividere.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-offWhite flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Grape className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-2xl text-primary mb-4">Esperienza Enologica</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Dal bicchiere al magnum. Ogni visita è un'occasione per approfondire la cultura del vino con i nostri sommelier.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STYLISH FEATURED WINES SECTION */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Decorational Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-xs font-poppins mb-2 block">La Selezione del Mese</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">Vini in Evidenza</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollRight}
              className="hidden md:flex w-12 h-12 rounded-full border border-gray-700 items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            <Link to="/wines" className="flex items-center text-gray-400 font-medium hover:text-secondary transition-colors font-poppins text-sm uppercase tracking-wider">
              Vedi Tutti <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))]"
        >
          <div className="flex gap-8 min-w-max pr-8">
            {featuredWines.map((wine) => (
              <div key={wine.id} className="w-[280px] md:w-[340px] h-[500px] snap-start relative group cursor-pointer perspective-1000">
                {/* Dark Card Body */}
                <div className="absolute inset-0 bg-[#252525] rounded-sm overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 shadow-xl border border-white/5 group-hover:border-secondary/30">
                  
                  {/* Image Container - Full height with gradient */}
                  <div className="h-full w-full relative">
                    <img 
                      src={wine.image} 
                      alt={wine.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="px-2 py-1 bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider rounded-sm">{wine.type}</span>
                      <span className="text-gray-300 text-xs font-poppins uppercase tracking-wider">{wine.region}</span>
                    </div>

                    <h3 className="font-playfair text-2xl text-white mb-2 leading-tight group-hover:text-secondary transition-colors duration-300">
                      {wine.name}
                    </h3>
                    
                    <p className="font-crimson italic text-gray-400 mb-4 text-sm line-clamp-2 group-hover:text-gray-300">
                      {wine.producer}
                    </p>

                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                       <span className="font-poppins text-xl text-secondary font-light">€{wine.price}</span>
                       <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                         <ArrowRight size={14} />
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* "View All" CTA Card */}
            <div className="w-[200px] h-[500px] snap-start flex items-center justify-center">
               <Link to="/wines" className="group flex flex-col items-center justify-center text-center h-full w-full p-6">
                 <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary group-hover:text-primary text-gray-400 transition-all duration-300 transform group-hover:scale-110">
                   <ArrowRight size={32} />
                 </div>
                 <span className="font-playfair text-2xl text-white mb-2">Esplora</span>
                 <span className="font-crimson text-gray-400 italic">Tutta la cantina</span>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mini About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/30 rounded-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1550951298-5c7b95a66b90?q=80&w=800&auto=format&fit=crop" 
               alt="Tasting moment" 
               className="rounded-lg shadow-2xl relative z-10 aspect-[4/3] object-cover"
             />
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="font-playfair text-5xl text-primary leading-tight">Oltre un semplice <br/>wine bar</h2>
            <p className="font-poppins text-gray-600 leading-relaxed text-lg font-light">
              La nostra vera misura di successo non è il numero, è lo sguardo di meraviglia di chi scopre il suo nuovo vino preferito. Venite a scoprire la nostra selezione in continua evoluzione, frutto di viaggi e amicizie con i produttori.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-secondary"></div>
                 <span className="font-poppins text-gray-800">Degustazioni settimanali con i produttori</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-secondary"></div>
                 <span className="font-poppins text-gray-800">Oltre 300 etichette in carta</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-secondary"></div>
                 <span className="font-poppins text-gray-800">Cicchetti preparati al momento</span>
               </div>
            </div>

            <Link to="/about" className="inline-block mt-4 text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors font-poppins uppercase tracking-wider text-sm">
              La nostra storia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;