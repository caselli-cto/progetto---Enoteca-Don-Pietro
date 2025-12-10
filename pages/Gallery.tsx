import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  // Using picsum seeds to ensure consistent images
  const images = [
    { src: "https://picsum.photos/id/431/600/800", cat: "Ambiente" },
    { src: "https://picsum.photos/id/425/600/400", cat: "Bottiglie" },
    { src: "https://picsum.photos/id/225/600/600", cat: "Degustazioni" },
    { src: "https://picsum.photos/id/75/600/800", cat: "Cibo" },
    { src: "https://picsum.photos/id/292/600/500", cat: "Dettagli" },
    { src: "https://picsum.photos/id/447/600/800", cat: "Ambiente" },
    { src: "https://picsum.photos/id/1060/600/600", cat: "Cibo" },
    { src: "https://picsum.photos/id/1080/600/400", cat: "Stagione" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12 text-center text-white">
        <h1 className="font-playfair text-4xl">Galleria</h1>
        <p className="font-poppins mt-2 opacity-80">Momenti di vita in enoteca</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Masonry-like layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-xl tracking-wider border-b-2 border-secondary pb-1">
                  {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center bg-offWhite p-10 rounded-xl">
          <Instagram className="mx-auto h-10 w-10 text-accent mb-4" />
          <h2 className="font-playfair text-2xl text-primary mb-2">Seguici su Instagram</h2>
          <p className="font-poppins text-gray-600 mb-6">@enotecadonpietro - Unisciti alla nostra community di 1300+ wine lovers</p>
          <a 
            href="#" 
            className="inline-block bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-full font-poppins text-sm hover:bg-gray-50 hover:border-accent transition-colors"
          >
            Vedi Profilo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;