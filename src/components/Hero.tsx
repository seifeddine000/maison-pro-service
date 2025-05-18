
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 animate-slide-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Trouvez les meilleurs artisans pour vos travaux
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Une plateforme qui connecte clients et professionnels qualifiés pour tous vos projets de réparation et d'entretien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/artisans">
                <Button size="lg" className="bg-white text-artisan-blue hover:bg-blue-100 font-bold">
                  Trouver un artisan
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  Découvrir les outils
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-artisan-blue-dark text-xl mb-4 font-semibold">Quel service recherchez-vous?</h3>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Plomberie, électricité, menuiserie..." 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ville ou code postal" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue"
                  />
                </div>
                <Button className="w-full bg-artisan-blue hover:bg-artisan-blue-dark">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
