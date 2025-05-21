
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, Star } from 'lucide-react';
import { availableCategories } from '@/data/artisansData';

interface ArtisanFiltersProps {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  verifiedOnly: boolean;
  setVerifiedOnly: (verified: boolean) => void;
  resetFilters: () => void;
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (open: boolean) => void;
  isMobile?: boolean;
}

const ArtisanFilters: React.FC<ArtisanFiltersProps> = ({
  selectedCategories,
  toggleCategory,
  minRating,
  setMinRating,
  verifiedOnly,
  setVerifiedOnly,
  resetFilters,
  mobileFiltersOpen, 
  setMobileFiltersOpen,
  isMobile = false
}) => {
  if (isMobile) {
    return (
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
                onClick={resetFilters}
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
    );
  }
  
  return (
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
          onClick={resetFilters}
        >
          Réinitialiser les filtres
        </Button>
      </Card>
    </div>
  );
};

export default ArtisanFilters;
