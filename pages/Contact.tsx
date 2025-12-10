import React, { useState } from 'react';
import { ReservationData } from '../types';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: 'Cena',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Reservation Submitted:', formData);
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="bg-white min-h-screen">
       {/* Hero Split */}
       <div className="flex flex-col lg:flex-row min-h-[600px]">
         
         {/* Left Info Panel */}
         <div className="lg:w-1/3 bg-primary text-white p-10 lg:p-16 flex flex-col justify-center">
           <h1 className="font-playfair text-4xl mb-10 text-secondary">Vieni a Trovarci</h1>
           
           <div className="space-y-10 font-poppins text-sm md:text-base">
             <div className="flex items-start gap-4">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Indirizzo</h3>
                  <p className="text-gray-300">Via Vigevano, 9<br/>20144 Milano (MI)</p>
                  <a href="#" className="text-secondary underline text-xs mt-2 block">Vedi su Mappa</a>
                </div>
             </div>

             <div className="flex items-start gap-4">
                <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Telefono</h3>
                  <p className="text-gray-300">338 682 8287</p>
                  <p className="text-xs text-gray-400 mt-1">Disponibile dalle 15:00</p>
                </div>
             </div>

             <div className="flex items-start gap-4">
                <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-300">info@enotecadonpietro.it</p>
                </div>
             </div>
           </div>

           <div className="mt-16 pt-8 border-t border-white/10">
              <h3 className="font-playfair text-xl mb-4 text-secondary">Orari</h3>
              <p className="font-poppins text-gray-300">Martedì - Sabato: 17:30 - 00:00</p>
              <p className="font-poppins text-gray-300">Domenica - Lunedì: Chiuso</p>
           </div>
         </div>

         {/* Right Form Panel */}
         <div className="lg:w-2/3 p-10 lg:p-16 bg-offWhite flex items-center">
            <div className="w-full max-w-2xl mx-auto">
              {isSubmitted ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-lg border border-green-100">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="font-playfair text-3xl text-primary mb-4">Richiesta Inoltrata!</h2>
                  <p className="font-poppins text-gray-600">Grazie {formData.name}, ti contatteremo a breve per confermare la tua prenotazione.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-accent underline font-poppins text-sm"
                  >
                    Effettua un'altra prenotazione
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-playfair text-3xl text-primary mb-2">Prenota un Tavolo</h2>
                  <p className="font-poppins text-gray-500 mb-8 italic">La nostra enoteca è intima. Consigliamo vivamente la prenotazione.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Nome Completo *</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Telefono *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-bold text-gray-700 font-poppins">Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Data *</label>
                        <input 
                          type="date" 
                          name="date" 
                          required 
                          value={formData.date} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Orario *</label>
                        <input 
                          type="time" 
                          name="time" 
                          required 
                          value={formData.time} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Persone *</label>
                        <select 
                          name="guests" 
                          value={formData.guests} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        >
                          {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                          <option value="9+">Gruppo (9+)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-bold text-gray-700 font-poppins">Occasione</label>
                        <select 
                          name="occasion" 
                          value={formData.occasion} 
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        >
                          <option value="Cena">Cena / Aperitivo</option>
                          <option value="Compleanno">Compleanno</option>
                          <option value="Anniversario">Anniversario</option>
                          <option value="Degustazione">Degustazione Guidata</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-bold text-gray-700 font-poppins">Note / Allergie</label>
                      <textarea 
                        name="notes" 
                        value={formData.notes} 
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                        placeholder="Hai preferenze particolari?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-primary text-white font-bold py-4 rounded font-poppins transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Richiedi Prenotazione
                    </button>
                  </form>
                </>
              )}
            </div>
         </div>
       </div>

       {/* Map Placeholder */}
       <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
         <p className="text-gray-500 font-poppins">Google Maps Embed Would Be Here</p>
       </div>
    </div>
  );
};

export default Contact;