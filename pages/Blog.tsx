import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="font-playfair text-4xl text-primary">News & Racconti</h1>
           <p className="font-poppins text-gray-500 mt-4">Storie di vino, eventi e cultura enologica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 font-poppins mb-3 space-x-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="font-playfair text-xl text-primary mb-3 leading-tight">{post.title}</h3>
                <p className="font-poppins text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <button className="text-accent font-bold text-sm font-poppins uppercase tracking-wider hover:text-primary transition-colors text-left">
                  Leggi Articolo &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;