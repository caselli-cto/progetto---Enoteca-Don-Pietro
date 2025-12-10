import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary py-16 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-white">La Nostra Storia</h1>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Section 1: Origins */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="https://picsum.photos/id/447/600/500" 
              alt="Enoteca beginnings" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-6">
            <h2 className="font-playfair text-3xl text-primary">Nati dal Cuore dei Navigli (2010)</h2>
            <div className="font-poppins text-gray-600 space-y-4 leading-relaxed">
              <p>
                Enoteca Don Pietro nasce nel 2010 come realizzazione di una passione: 
                creare uno spazio dove il vino non è solo una bevanda, ma un medium 
                di connessione e scoperta.
              </p>
              <p>
                Situati nel cuore del quartiere Navigli, pochi passi da Porta Genova, 
                abbiamo costruito una comunità di appassionati che condividono 
                la ricerca di qualità e autenticità.
              </p>
              <p className="font-crimson text-xl text-primary italic pt-4">
                - Pietro Angelo Giuffrida, Fondatore
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Philosophy */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-playfair text-3xl text-primary">La Nostra Filosofia</h2>
            <div className="font-poppins text-gray-600 space-y-4 leading-relaxed">
              <p>
                Non crediamo nel volume, crediamo nella scelta consapevole.
              </p>
              <p>
                Ogni vino nella nostra selezione è stato degustato e approvato 
                dal nostro team. Collaboriamo direttamente con piccoli produttori 
                che condividono la nostra visione: eccellenza over commercio.
              </p>
              <p>
                Bontà regionali italiane. Viticoltori indipendenti. 
                Storie in bottiglia. Questa è Enoteca Don Pietro.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/292/600/500" 
              alt="Vineyard philosophy" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Section 3: Community */}
        <div className="bg-offWhite rounded-2xl p-8 md:p-16 text-center space-y-8">
           <h2 className="font-playfair text-3xl text-primary">Una Comunità che Cresce</h2>
           <p className="font-poppins text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
             15 anni dopo, siamo orgogliosi di aver costruito una comunità 
             di oltre 1.300 followers su Instagram e centinaia di clienti affezionati.
             <br/><br/>
             Ma la nostra vera misura di successo non è il numero, 
             è lo sguardo di meraviglia di chi scopre il suo nuovo vino preferito.
           </p>
           <div className="pt-4">
             <span className="font-playfair text-6xl text-secondary block">15</span>
             <span className="font-poppins text-gray-500 uppercase tracking-widest text-sm">Anni di Storia</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;