
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Star, MapPin, CheckCircle2, Scissors } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ArtisanCardProps {
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
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ 
  id,
  name, 
  profession, 
  rating, 
  reviewCount, 
  location, 
  verified, 
  profileImage,
  categories,
  description,
  hourlyRate
}) => {
  return (
    <Card className="card-hover overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Image Section */}
        <div className="md:col-span-1">
          <img 
            src={profileImage} 
            alt={name}
            className="w-full h-48 md:h-full object-cover" 
          />
        </div>

        {/* Content Section */}
        <div className="p-4 md:col-span-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-artisan-blue font-medium flex items-center gap-1">
                {profession === "Couturier" && <Scissors className="h-4 w-4" />}
                {profession}
              </p>
              {hourlyRate && (
                <p className="text-green-600 font-semibold text-sm mt-1">
                  Tarif: {hourlyRate} / heure
                </p>
              )}
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
              <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
              <span className="text-gray-500 ml-1">({reviewCount} avis)</span>
            </div>
          </div>
          
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
            {verified && (
              <div className="ml-3 flex items-center text-green-600">
                <CheckCircle2 size={16} className="mr-1" />
                <span className="text-sm">Vérifié</span>
              </div>
            )}
          </div>
          
          <div className="mt-3">
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 text-artisan-blue border-artisan-blue">
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <Link 
              to={`/artisan/${id}`} 
              className="text-artisan-blue hover:text-artisan-blue-dark font-medium"
            >
              Voir profil
            </Link>
            <button className="btn-primary">
              Contacter
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArtisanCard;
