
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, Star, MapPin, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtisanCard from '@/components/ArtisanCard';

// Sample artisans data
const artisansData = [
  {
    id: '1',
    name: 'Thomas Dupont',
    profession: 'Plombier',
    rating: 4.8,
    reviewCount: 124,
    location: 'Paris',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    categories: ['Plomberie', 'Chauffage', 'Installation'],
    description: 'Plombier professionnel avec plus de 15 ans d\'expérience. Spécialisé dans les installations et réparations de tout système de plomberie.'
  },
  {
    id: '2',
    name: 'Marie Lambert',
    profession: 'Électricienne',
    rating: 4.7,
    reviewCount: 98,
    location: 'Lyon',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    categories: ['Électricité', 'Domotique', 'Installation'],
    description: 'Électricienne certifiée, expérimentée dans les installations électriques résidentielles et commerciales. Spécialiste en domotique.'
  },
  {
    id: '3',
    name: 'Jean Moreau',
    profession: 'Menuisier',
    rating: 4.9,
    reviewCount: 145,
    location: 'Marseille',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1540479859555-17af45c78602',
    categories: ['Menuiserie', 'Ébénisterie', 'Rénovation'],
    description: 'Menuisier ébéniste avec une passion pour les travaux de précision. Création de meubles sur mesure et restauration d\'antiquités.'
  },
  {
    id: '4',
    name: 'Sophie Martin',
    profession: 'Peintre',
    rating: 4.5,
    reviewCount: 87,
    location: 'Bordeaux',
    verified: false,
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    categories: ['Peinture', 'Décoration', 'Revêtement'],
    description: 'Peintre décoratrice spécialisée dans les finitions de qualité et les techniques décoratives innovantes pour tous vos intérieurs.'
  },
  {
    id: '5',
    name: 'Pierre Leroy',
    profession: 'Carreleur',
    rating: 4.6,
    reviewCount: 73,
    location: 'Toulouse',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6',
    categories: ['Carrelage', 'Revêtement sol', 'Salle de bain'],
    description: 'Carreleur professionnel expert en pose de carrelage et de revêtement de sol. Spécialisation dans les salles de bain et cuisines.'
  }
];

const ArtisansPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [minRating, setMinRating] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Handle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter artisans based on criteria
  const filteredArtisans = artisansData.filter(artisan => {
    // Filter by search term
    const searchMatch = 
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
    // Filter by categories
    const categoryMatch = 
      selectedCategories.length === 0 || 
      artisan.categories.some(cat => 
        selectedCategories.some(selected => 
          cat.toLowerCase() === selected.toLowerCase()
        )
      );
      
    // Filter by rating
    const ratingMatch = artisan.rating >= minRating;
    
    // Filter by verified status
    const verifiedMatch = !verifiedOnly || artisan.verified;
    
    return searchMatch && categoryMatch && ratingMatch && verifiedMatch;
  });

  // Available categories (for filter)
  const availableCategories = [
    'Plomberie', 'Électricité', 'Menuiserie', 'Peinture', 
    'Carrelage', 'Chauffage', 'Rénovation', 'Domotique', 
    'Installation', 'Décoration'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-artisan-blue text-white py-10">
          <div className="container-custom">
            <h1 className="text-3xl font-bold mb-4">Trouvez les meilleurs artisans</h1>
            <p className="max-w-2xl">
              Des professionnels qualifiés et vérifiés pour tous vos projets, disponibles dans votre région.
            </p>
            
            <div className="mt-6 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input 
                type="text" 
                placeholder="Rechercher un artisan par nom, spécialité ou ville..." 
                className="w-full md:w-2/3 pl-10 pr-4 py-6 bg-white text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-1/4">
              <Card className="p-4 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Filtres</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Catégories</h3>
                  <div className="space-y-2">
                    {availableCategories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label 
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Évaluation minimum</h3>
                  <div className="flex items-center">
                    <div className="flex mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < minRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                          onClick={() => setMinRating(i + 1)}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{minRating > 0 ? `${minRating}+` : 'Tous'}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <Checkbox 
                      id="verified"
                      checked={verifiedOnly}
                      onCheckedChange={() => setVerifiedOnly(!verifiedOnly)}
                    />
                    <Label 
                      htmlFor="verified"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      Artisans vérifiés uniquement
                    </Label>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                    setMinRating(0);
                    setVerifiedOnly(false);
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </Card>
            </div>
            
            {/* Mobile Filter Toggle */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 mb-4"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <Filter size={18} />
                Filtres
              </Button>
              
              {mobileFiltersOpen && (
                <Card className="p-4 mb-4">
                  <h2 className="text-lg font-semibold mb-4">Filtres</h2>
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Catégories</h3>
                    <div className="flex flex-wrap gap-2">
                      {availableCategories.map((category) => (
                        <Badge 
                          key={category}
                          variant={selectedCategories.includes(category) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedCategories.includes(category) 
                              ? "bg-artisan-blue" 
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => toggleCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Évaluation minimum</h3>
                    <div className="flex items-center">
                      <div className="flex mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < minRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                            onClick={() => setMinRating(i + 1)}
                          />
                        ))}
                      </div>
                      <span>{minRating > 0 ? `${minRating}+` : 'Tous'}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center">
                      <Checkbox 
                        id="verified-mobile"
                        checked={verifiedOnly}
                        onCheckedChange={() => setVerifiedOnly(!verifiedOnly)}
                      />
                      <Label 
                        htmlFor="verified-mobile"
                        className="ml-2 cursor-pointer"
                      >
                        Artisans vérifiés uniquement
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategories([]);
                        setMinRating(0);
                        setVerifiedOnly(false);
                      }}
                    >
                      Réinitialiser
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      Appliquer
                    </Button>
                  </div>
                </Card>
              )}
            </div>
            
            {/* Artisans List */}
            <div className="w-full md:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? 's' : ''} trouvé{filteredArtisans.length !== 1 ? 's' : ''}
                </h2>
                <div className="text-sm text-gray-500">
                  Trier par: <span className="font-medium text-black">Meilleures évaluations</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredArtisans.length > 0 ? (
                  filteredArtisans.map((artisan) => (
                    <ArtisanCard key={artisan.id} {...artisan} />
                  ))
                ) : (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium mb-2">Aucun artisan trouvé</h3>
                    <p className="text-gray-500">Essayez de modifier vos filtres de recherche</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtisansPage;
