import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkAuth();
    const {
      data: authListener
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-artisan-blue">ArtiConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors">Accueil</Link>
            <Link to="/artisans" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors">Artisans</Link>
            <Link to="/tools" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors">Outils</Link>
            <Link to="/dashboard" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors">service </Link>
            <Link to="#" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors">Comment ça marche</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Search size={16} />
              <span>Rechercher</span>
            </Button>
            {isAuthenticated ? <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <User size={16} />
                    <span>Profil</span>
                  </Button>
                </Link>
              </div> : <Link to="/auth">
                <Button size="sm" className="bg-artisan-blue hover:bg-artisan-blue-dark">Se connecter</Button>
              </Link>}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-white py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link to="/artisans" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                Artisans
              </Link>
              <Link to="/tools" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                Outils
              </Link>
              <Link to="/dashboard" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                Tableau de bord
              </Link>
              <Link to="#" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                Comment ça marche
              </Link>
              {isAuthenticated ? <Link to="/profile" className="font-medium text-gray-700 hover:text-artisan-blue transition-colors px-2" onClick={() => setIsMenuOpen(false)}>
                  Profil
                </Link> : null}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="flex items-center justify-center gap-1">
                  <Search size={16} />
                  <span>Rechercher</span>
                </Button>
                {isAuthenticated ? <Button size="sm" className="bg-artisan-blue hover:bg-artisan-blue-dark w-full" onClick={async () => {
              await supabase.auth.signOut();
              navigate('/auth');
              setIsMenuOpen(false);
            }}>
                    Se déconnecter
                  </Button> : <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="bg-artisan-blue hover:bg-artisan-blue-dark w-full">Se connecter</Button>
                  </Link>}
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;