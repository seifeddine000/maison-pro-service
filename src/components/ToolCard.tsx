
import React from 'react';
import { Card } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  discountPercentage?: number;
  inStock: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  id,
  name, 
  category, 
  price, 
  rating, 
  reviewCount, 
  image,
  discountPercentage,
  inStock
}) => {
  const discountedPrice = discountPercentage 
    ? price - (price * discountPercentage / 100) 
    : null;
    
  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-DZ')} DZD`;
  };

  return (
    <Card className="card-hover overflow-hidden bg-white h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover" 
        />
        
        {/* Discount Badge */}
        {discountPercentage && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            -{discountPercentage}%
          </Badge>
        )}
        
        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-sm font-medium">
              Rupture de stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <Badge variant="outline" className="self-start mb-2 bg-gray-100 text-gray-600">
          {category}
        </Badge>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 fill-gray-300'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-xs ml-1">({reviewCount})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline mb-3">
            {discountedPrice ? (
              <>
                <span className="text-xl font-bold text-artisan-blue mr-2">
                  {formatPrice(discountedPrice)}
                </span>
                <span className="text-gray-500 line-through">
                  {formatPrice(price)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-artisan-blue">
                {formatPrice(price)}
              </span>
            )}
          </div>
          
          <Button 
            className="w-full gap-2" 
            disabled={!inStock}
          >
            <ShoppingCart size={18} />
            {inStock ? "Ajouter au panier" : "Indisponible"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
