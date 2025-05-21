
import { useState } from 'react';
import artisansData from '@/data/artisansData';

interface UseArtisanFiltersProps {
  initialCategories?: string[];
}

export const useArtisanFilters = ({ initialCategories = [] }: UseArtisanFiltersProps = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
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

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setMinRating(0);
    setVerifiedOnly(false);
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

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    minRating,
    setMinRating,
    verifiedOnly,
    setVerifiedOnly,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    toggleCategory,
    resetFilters,
    filteredArtisans
  };
};
