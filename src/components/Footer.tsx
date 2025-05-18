
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ArtiConnect</h3>
            <p className="text-gray-300 mb-4">La plateforme qui connecte clients et artisans professionnels pour tous vos travaux.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/artisans" className="text-gray-300 hover:text-white transition-colors">Artisans</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-white transition-colors">Outils</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Comment ça marche</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/artisans?category=plomberie" className="text-gray-300 hover:text-white transition-colors">Plomberie</Link></li>
              <li><Link to="/artisans?category=electricite" className="text-gray-300 hover:text-white transition-colors">Électricité</Link></li>
              <li><Link to="/artisans?category=menuiserie" className="text-gray-300 hover:text-white transition-colors">Menuiserie</Link></li>
              <li><Link to="/artisans?category=peinture" className="text-gray-300 hover:text-white transition-colors">Peinture</Link></li>
              <li><Link to="/artisans" className="text-gray-300 hover:text-white transition-colors">Voir tout</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contact@articonnect.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="#" className="bg-artisan-blue hover:bg-artisan-blue-dark text-white py-2 px-4 rounded inline-block transition-colors">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ArtiConnect. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
              <Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
