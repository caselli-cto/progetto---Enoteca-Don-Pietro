import React from 'react';
import { Wine } from '../types';
import { Plus } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="group bg-white rounded-sm overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section - Taller aspect ratio for bottles */}
      <div className="relative h-[400px] overflow-hidden bg-[#F5F5F5]">
        <img 
          src={wine.image} 
          alt={wine.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Region Tag */}
        <div className="absolute top-4 left-4">
           <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-white/90 backdrop-blur px-3 py-1 rounded-sm shadow-sm">{wine.region}</span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-primary text-white font-playfair font-medium px-4 py-1 rounded-sm shadow-lg text-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          €{wine.price}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <div className="mb-2">
           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{wine.type}</span>
        </div>
        
        <h3 className="font-playfair text-2xl text-primary mb-1 group-hover:text-accent transition-colors duration-300 leading-tight">{wine.name}</h3>
        <p className="font-crimson text-gray-500 italic mb-4 text-base">{wine.producer}</p>
        
        <div className="w-12 h-[1px] bg-gray-200 mb-4 group-hover:bg-secondary transition-colors duration-300"></div>

        <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-light">
          {wine.description}
        </p>
        
        <button className="w-full mt-auto border border-primary text-primary py-3 px-4 rounded-sm font-poppins text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md">
          <Plus size={14} /> Scheda Vino
        </button>
      </div>
    </div>
  );
};

export default WineCard;