import React from 'react';
import { Wine } from '../types';
import { Plus } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-[300px] overflow-hidden bg-gray-50">
        <img 
          src={wine.image} 
          alt={wine.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary font-poppins font-bold px-3 py-1 rounded-sm shadow-sm text-sm">
          €{wine.price}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="mb-3 flex justify-between items-start">
           <span className="text-[10px] font-bold uppercase tracking-widest text-warmGray">{wine.region}</span>
           <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-red-50 px-2 py-0.5 rounded">{wine.type}</span>
        </div>
        
        <h3 className="font-playfair text-xl text-primary mb-1 group-hover:text-accent transition-colors duration-300 leading-tight">{wine.name}</h3>
        <p className="font-crimson text-gray-500 italic mb-4 text-sm">{wine.producer}</p>
        
        <div className="w-10 h-[1px] bg-secondary mb-4"></div>

        <p className="font-poppins text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
          {wine.description}
        </p>
        
        <button className="w-full mt-auto bg-primary text-white py-3 px-4 rounded-sm font-poppins text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
          <Plus size={14} /> Scopri Dettagli
        </button>
      </div>
    </div>
  );
};

export default WineCard;