import React, { useState, useMemo } from 'react';
import { WINES } from '../constants';
import WineCard from '../components/WineCard';
import { Filter } from 'lucide-react';

const Wines: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('Tutti');
  const [activeRegion, setActiveRegion] = useState<string>('Tutte');
  
  const types = ['Tutti', 'Rosso', 'Bianco', 'Spumante', 'Naturale'];
  // Extract unique regions from WINES
  const regions = ['Tutte', ...Array.from(new Set(WINES.map(w => w.region)))];

  const filteredWines = useMemo(() => {
    return WINES.filter(wine => {
      const typeMatch = activeType === 'Tutti' || wine.type === activeType;
      const regionMatch = activeRegion === 'Tutte' || wine.region === activeRegion;
      return typeMatch && regionMatch;
    });
  }, [activeType, activeRegion]);

  return (
    <div className="bg-offWhite min-h-screen">
      {/* Header */}
      <div className="bg-primary py-16 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-5xl mb-4">Cantina Selezionata</h1>
        <p className="font-crimson italic text-xl text-gray-300">"Piccoli produttori, Grande qualità"</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Filter size={20} />
                <h3 className="font-playfair text-xl">Filtra Vini</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-poppins font-semibold text-sm uppercase text-gray-500 mb-3">Tipologia</h4>
                <div className="space-y-2">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeType === type 
                        ? 'bg-accent text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-poppins font-semibold text-sm uppercase text-gray-500 mb-3">Regione</h4>
                <div className="space-y-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeRegion === region 
                        ? 'bg-primary text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            {/* Intro Text */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8 border-l-4 border-secondary">
              <p className="font-poppins text-gray-600 leading-relaxed">
                La nostra selezione vinicola è il frutto di una ricerca costante e appassionata. 
                Dai vini bianchi freschi e minerali ai rossi strutturati e profumi, 
                dalla tradizione piemontese alle scoperte contemporanee: c'è sempre qualcosa di nuovo da scoprire.
              </p>
            </div>

            {filteredWines.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-playfair text-2xl text-gray-400">Nessun vino corrisponde ai filtri selezionati.</p>
                <button 
                  onClick={() => {setActiveType('Tutti'); setActiveRegion('Tutte');}}
                  className="mt-4 text-accent hover:underline font-poppins"
                >
                  Resetta filtri
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWines.map(wine => (
                  <WineCard key={wine.id} wine={wine} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wines;