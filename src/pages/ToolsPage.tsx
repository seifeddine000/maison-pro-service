
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, ShoppingCart, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';

// Updated tools data with prices in Algerian dinars (DZD)
const toolsData = [
  {
    id: '1',
    name: 'Perceuse sans fil 18V',
    category: 'Perçage',
    price: 8000,
    rating: 4.7,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1572981779307-38e053ec0a36',
    discountPercentage: 15,
    inStock: true
  },
  {
    id: '2',
    name: 'Scie circulaire professionnelle',
    category: 'Découpe',
    price: 12500,
    rating: 4.8,
    reviewCount: 87,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c',
    discountPercentage: null,
    inStock: true
  },
  {
    id: '3',
    name: 'Coffret de tournevis de précision',
    category: 'Outillage à main',
    price: 3200,
    rating: 4.6,
    reviewCount: 213,
    image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd',
    discountPercentage: 10,
    inStock: true
  },
  {
    id: '4',
    name: 'Marteau de charpentier',
    category: 'Outillage à main',
    price: 1200,
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72',
    discountPercentage: null,
    inStock: false
  },
  {
    id: '5',
    name: 'Niveau laser professionnel',
    category: 'Mesure',
    price: 9500,
    rating: 4.9,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1623121222577-611601373bdd',
    discountPercentage: 20,
    inStock: true
  },
  {
    id: '6',
    name: 'Scie sauteuse électrique',
    category: 'Découpe',
    price: 5800,
    rating: 4.4,
    reviewCount: 71,
    image: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d',
    discountPercentage: null,
    inStock: true
  },
  {
    id: '7',
    name: 'Ponceuse excentrique',
    category: 'Ponçage',
    price: 7200,
    rating: 4.6,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1613723739945-669e31835f98',
    discountPercentage: 5,
    inStock: true
  },
  {
    id: '8',
    name: 'Kit de clés à douille',
    category: 'Outillage à main',
    price: 4500,
    rating: 4.7,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1541474583361-8f9a5d52e822',
    discountPercentage: null,
    inStock: true
  }
];

const ToolsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Get unique categories from data
  const allCategories = Array.from(new Set(toolsData.map(tool => tool.category)));

  // Handle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter tools based on criteria
  const filteredTools = toolsData.filter(tool => {
    // Filter by search term
    const searchMatch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    // Filter by categories
    const categoryMatch = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(tool.category);
      
    // Filter by discount
    const discountMatch = !showDiscountOnly || tool.discountPercentage !== null;
    
    // Filter by stock
    const stockMatch = !inStockOnly || tool.inStock;
    
    return searchMatch && categoryMatch && discountMatch && stockMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-artisan-blue text-white py-10">
          <div className="container-custom">
            <h1 className="text-3xl font-bold mb-4">Outils et équipements professionnels</h1>
            <p className="max-w-2xl">
              Trouvez tous les outils nécessaires pour vos projets, comme les marteaux à 1 200 DZD et les perceuses à 8 000 DZD, sélectionnés pour leur qualité et leur durabilité. Paiement en dinars algériens (DZD).
            </p>
            
            <div className="mt-6 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input 
                type="text" 
                placeholder="Rechercher des outils..." 
                className="w-full md:w-2/3 pl-10 pr-4 py-6 bg-white text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="mt-4 flex justify-end">
              <div className="relative">
                <Button variant="ghost" className="text-white border border-white hover:bg-blue-700 flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Panier
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-artisan-blue rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
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
                    {allCategories.map((category) => (
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
                  <h3 className="font-medium mb-2">Promotions et disponibilité</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="discount"
                        checked={showDiscountOnly}
                        onCheckedChange={() => setShowDiscountOnly(!showDiscountOnly)}
                      />
                      <Label 
                        htmlFor="discount"
                        className="ml-2 text-sm cursor-pointer"
                      >
                        Articles en promotion uniquement
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="inStock"
                        checked={inStockOnly}
                        onCheckedChange={() => setInStockOnly(!inStockOnly)}
                      />
                      <Label 
                        htmlFor="inStock"
                        className="ml-2 text-sm cursor-pointer"
                      >
                        En stock uniquement
                      </Label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                    setShowDiscountOnly(false);
                    setInStockOnly(false);
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
                      {allCategories.map((category) => (
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
                    <h3 className="font-medium mb-2">Promotions et disponibilité</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox 
                          id="discount-mobile"
                          checked={showDiscountOnly}
                          onCheckedChange={() => setShowDiscountOnly(!showDiscountOnly)}
                        />
                        <Label 
                          htmlFor="discount-mobile"
                          className="ml-2 cursor-pointer"
                        >
                          Articles en promotion uniquement
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox 
                          id="inStock-mobile"
                          checked={inStockOnly}
                          onCheckedChange={() => setInStockOnly(!inStockOnly)}
                        />
                        <Label 
                          htmlFor="inStock-mobile"
                          className="ml-2 cursor-pointer"
                        >
                          En stock uniquement
                        </Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategories([]);
                        setShowDiscountOnly(false);
                        setInStockOnly(false);
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
            
            {/* Tools Grid */}
            <div className="w-full md:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredTools.length} article{filteredTools.length !== 1 ? 's' : ''} trouvé{filteredTools.length !== 1 ? 's' : ''}
                </h2>
                <div className="text-sm text-gray-500">
                  Trier par: <span className="font-medium text-black">Popularité</span>
                </div>
              </div>
              
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard 
                      key={tool.id} 
                      {...tool} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-lg font-medium mb-2">Aucun outil trouvé</h3>
                  <p className="text-gray-500">Essayez de modifier vos filtres de recherche</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolsPage;
