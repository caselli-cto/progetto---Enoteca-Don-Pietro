import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Wine as WineIcon, Users, Grape, ArrowRight, ChevronRight } from 'lucide-react';
import { WINES } from '../constants';

const Home: React.FC = () => {
  // Select top 5 wines for the featured section
  const featuredWines = WINES.slice(0, 5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Real Wine Cellar Ambience */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569937756447-e1601f86836c?q=80&w=1920&auto=format&fit=crop" 
            alt="Cantina Enoteca Don Pietro" 
            className="w-full h-full object-cover animate-fade-in"
          />
          {/* Gradient Overlay for better text readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#1A1A1A]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-block border-b border-secondary/60 pb-2 mb-6">
            <span className="font-poppins text-secondary uppercase tracking-[0.3em] text-sm md:text-base animate-slide-up">Dal 2010 a Milano</span>
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl text-white mb-8 leading-none drop-shadow-2xl">
            Enoteca <span className="text-secondary font-italic block md:inline">Don Pietro</span>
          </h1>
          <p className="font-crimson italic text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            "Nel cuore dei Navigli, dove ogni calice racconta la storia di una terra e delle mani che l'hanno lavorata."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/wines" 
              className="group relative px-10 py-4 bg-accent overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,47,55,0.4)]"
            >
              <span className="relative z-10 font-poppins font-bold text-white tracking-widest uppercase text-xs md:text-sm">Scopri la Cantina</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-red-900/50"></div>
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-4 border border-white/30 text-white font-poppins text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 rounded-sm backdrop-blur-sm"
            >
              Prenota un Tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section Cards */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl text-primary mb-6">L'Eccellenza nel Dettaglio</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-offWhite flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 border border-transparent group-hover:border-secondary">
                <WineIcon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-3xl text-primary mb-4">Qualità Consapevole</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Selezioniamo vini da piccoli produttori indipendenti, dove ogni bottiglia racconta una storia di passione e artigianalità unica.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-offWhite flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 border border-transparent group-hover:border-secondary">
                <Users className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-3xl text-primary mb-4">Convivialità Autentica</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Un'atmosfera intima e accogliente, ispirata ai bacari veneziani. Lo spazio perfetto per scoprire, assaggiare, condividere.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-offWhite flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 border border-transparent group-hover:border-secondary">
                <Grape className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-3xl text-primary mb-4">Esperienza Enologica</h3>
              <p className="font-poppins text-gray-500 leading-relaxed text-sm px-4">
                Dal bicchiere al magnum. Ogni visita è un'occasione per approfondire la cultura del vino con i nostri sommelier.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STYLISH FEATURED WINES SECTION */}
      <section className="py-24 bg-[#141414] relative overflow-hidden border-t border-white/5">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-3">
               <div className="h-[1px] w-12 bg-secondary"></div>
               <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs font-poppins">La Selezione del Mese</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl text-white">Vini in Evidenza</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollRight}
              className="hidden md:flex w-14 h-14 rounded-full border border-white/10 items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300 group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link to="/wines" className="flex items-center text-gray-400 font-medium hover:text-white transition-colors font-poppins text-sm uppercase tracking-wider group">
              Vedi Tutti <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-16 hide-scrollbar snap-x snap-mandatory pl-4 md:pl-[max(2rem,calc((100vw-1400px)/2))]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 md:gap-8 min-w-max pr-8">
            {featuredWines.map((wine, index) => (
              <div 
                key={wine.id} 
                className="w-[280px] md:w-[320px] h-[520px] snap-start relative group cursor-pointer"
              >
                {/* Number Watermark */}
                <span className="absolute -top-6 -right-4 font-playfair text-9xl text-white/5 z-0 group-hover:text-white/10 transition-colors duration-500">
                  0{index + 1}
                </span>

                {/* Card Body */}
                <div className="h-full w-full relative overflow-hidden rounded-sm bg-[#1e1e1e] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="h-full w-full relative">
                    <img 
                      src={wine.image} 
                      alt={wine.name} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Top Tag */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest rounded-full">{wine.type}</span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-secondary text-xs font-poppins uppercase tracking-wider mb-2 block">{wine.region}</span>
                      <h3 className="font-playfair text-3xl text-white mb-2 leading-tight group-hover:text-secondary transition-colors duration-300">
                        {wine.name}
                      </h3>
                      <p className="font-crimson italic text-gray-400 mb-6 text-sm">
                        {wine.producer}
                      </p>

                      {/* Hidden details revealed on hover */}
                      <div className="h-0 group-hover:h-16 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <div className="flex justify-between items-center border-t border-white/20 pt-4">
                          <span className="font-playfair text-2xl text-white">€{wine.price}</span>
                          <span className="text-white/80 text-xs font-poppins border-b border-white/50 pb-0.5">Scopri</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* "View All" CTA Card */}
            <div className="w-[200px] h-[520px] snap-start flex items-center justify-center">
               <Link to="/wines" className="group flex flex-col items-center justify-center text-center h-full w-full p-6 hover:bg-white/5 rounded-sm transition-colors duration-300">
                 <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary group-hover:text-primary text-gray-400 transition-all duration-300 transform group-hover:scale-110">
                   <ArrowRight size={32} />
                 </div>
                 <span className="font-playfair text-3xl text-white mb-2">Esplora</span>
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
             <div className="absolute -top-6 -left-6 w-full h-full border border-secondary/40 rounded-sm"></div>
             <img 
               src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop" 
               alt="Tasting moment" 
               className="rounded-sm shadow-2xl relative z-10 aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="font-playfair text-5xl text-primary leading-tight">Oltre un semplice <br/>wine bar</h2>
            <p className="font-poppins text-gray-600 leading-relaxed text-lg font-light">
              La nostra vera misura di successo non è il numero, è lo sguardo di meraviglia di chi scopre il suo nuovo vino preferito. Venite a scoprire la nostra selezione in continua evoluzione, frutto di viaggi e amicizie con i produttori.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-secondary"></div>
                 <span className="font-poppins text-primary font-medium">Degustazioni settimanali con i produttori</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-secondary"></div>
                 <span className="font-poppins text-primary font-medium">Oltre 300 etichette in carta</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-secondary"></div>
                 <span className="font-poppins text-primary font-medium">Cicchetti preparati al momento</span>
               </div>
            </div>

            <Link to="/about" className="inline-block mt-6 px-8 py-3 bg-primary text-white font-poppins text-sm uppercase tracking-widest hover:bg-secondary hover:text-primary transition-colors duration-300">
              La nostra storia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;