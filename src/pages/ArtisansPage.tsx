
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtisanHero from '@/components/artisans/ArtisanHero';
import ArtisanFilters from '@/components/artisans/ArtisanFilters';
import ArtisansList from '@/components/artisans/ArtisansList';
import { useArtisanFilters } from '@/hooks/useArtisanFilters';

const ArtisansPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  const {
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
  } = useArtisanFilters({
    initialCategories: categoryParam ? [categoryParam] : []
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <ArtisanHero 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile Filters */}
            <ArtisanFilters
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              verifiedOnly={verifiedOnly}
              setVerifiedOnly={setVerifiedOnly}
              resetFilters={resetFilters}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
              isMobile={true}
            />
            
            {/* Desktop Filters */}
            <ArtisanFilters
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              verifiedOnly={verifiedOnly}
              setVerifiedOnly={setVerifiedOnly}
              resetFilters={resetFilters}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
              isMobile={false}
            />
            
            {/* Artisans List */}
            <ArtisansList artisans={filteredArtisans} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtisansPage;
