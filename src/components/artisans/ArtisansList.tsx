
import React from 'react';
import ArtisanCard from '@/components/ArtisanCard';

interface ArtisansListProps {
  artisans: Array<{
    id: string;
    name: string;
    profession: string;
    rating: number;
    reviewCount: number;
    location: string;
    verified: boolean;
    profileImage: string;
    categories: string[];
    description: string;
    hourlyRate?: string;
  }>;
}

const ArtisansList: React.FC<ArtisansListProps> = ({ artisans }) => {
  return (
    <div className="w-full md:w-3/4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {artisans.length} artisan{artisans.length !== 1 ? 's' : ''} trouvé{artisans.length !== 1 ? 's' : ''}
        </h2>
        <div className="text-sm text-gray-500">
          Trier par: <span className="font-medium text-black">Meilleures évaluations</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {artisans.length > 0 ? (
          artisans.map((artisan) => (
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
  );
};

export default ArtisansList;
