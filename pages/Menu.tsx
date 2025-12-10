import React from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuCategory: React.FC<{ title: string; items: MenuItem[] }> = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="font-playfair text-3xl text-primary border-b border-gray-200 pb-4 mb-8 inline-block pr-12">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map(item => (
        <div key={item.id} className="group">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-playfair text-xl text-gray-800 group-hover:text-accent transition-colors">
              {item.name}
              {item.isSeasonal && (
                <span className="ml-2 text-xs font-poppins text-green-600 bg-green-100 px-2 py-0.5 rounded-full align-middle">
                  Stagionale
                </span>
              )}
            </h4>
            <span className="font-poppins font-bold text-secondary">
              {item.price ? `€${item.price}` : 'Prezzo variabile'}
            </span>
          </div>
          <p className="font-poppins text-gray-600 text-sm mb-2">{item.description}</p>
          {item.pairing && (
            <p className="font-crimson text-accent text-sm italic">
              🍷 Abbinamento consigliato: {item.pairing}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

const FoodMenu: React.FC = () => {
  const cicchetti = MENU_ITEMS.filter(i => i.category === 'Cicchetti');
  const piatti = MENU_ITEMS.filter(i => i.category === 'Piatti');
  const stagionali = MENU_ITEMS.filter(i => i.category === 'Stagionali');

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/429/1920/800" 
            alt="Food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-playfair text-5xl mb-4">Menu</h1>
          <p className="font-crimson text-2xl italic">"Dove il cibo incontra il vino"</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <MenuCategory title="Cicchetti & Assaggi" items={cicchetti} />
        <MenuCategory title="Piatti Ricercati" items={piatti} />
        <MenuCategory title="Proposte Stagionali" items={stagionali} />

        {/* Pairing Section */}
        <div className="mt-20 bg-offWhite p-10 rounded-xl border border-secondary/20">
          <h3 className="font-playfair text-2xl text-center text-primary mb-8">L'Arte dell'Abbinamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
               <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                 <img src="https://picsum.photos/id/292/300/200" alt="Pairing 1" className="w-full h-full object-cover" />
               </div>
               <h4 className="font-playfair text-lg text-primary">Rosso & Formaggi</h4>
               <p className="text-sm text-gray-600 font-poppins mt-2">I tannini del Barolo puliscono il palato dopo un pecorino stagionato.</p>
            </div>
            <div className="text-center">
               <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                 <img src="https://picsum.photos/id/1080/300/200" alt="Pairing 2" className="w-full h-full object-cover" />
               </div>
               <h4 className="font-playfair text-lg text-primary">Bollicine & Salumi</h4>
               <p className="text-sm text-gray-600 font-poppins mt-2">L'acidità del Franciacorta bilancia perfettamente la grassezza del culatello.</p>
            </div>
            <div className="text-center">
               <div className="h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                 <img src="https://picsum.photos/id/1060/300/200" alt="Pairing 3" className="w-full h-full object-cover" />
               </div>
               <h4 className="font-playfair text-lg text-primary">Bianco & Pesce</h4>
               <p className="text-sm text-gray-600 font-poppins mt-2">Etna Bianco e Carpaccio: un incontro di mineralità e freschezza.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodMenu;