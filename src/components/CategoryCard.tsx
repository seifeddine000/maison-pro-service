
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link}>
      <Card className="card-hover h-full bg-white flex flex-col items-center p-6 text-center cursor-pointer">
        <div className="text-artisan-blue mb-4 bg-blue-50 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
