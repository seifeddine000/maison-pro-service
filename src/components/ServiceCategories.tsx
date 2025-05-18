
import React from 'react';
import CategoryCard from './CategoryCard';
import { Wrench, Zap, Paintbrush, Home, Hammer, Droplet, SquareDashedBottom, Thermometer } from 'lucide-react';

const ServiceCategories = () => {
  const categories = [
    {
      icon: <Wrench size={32} />,
      title: 'Plomberie',
      description: 'Réparation, installation et entretien de systèmes de plomberie',
      link: '/artisans?category=plomberie'
    },
    {
      icon: <Zap size={32} />,
      title: 'Électricité',
      description: 'Installation électrique, dépannage et mise aux normes',
      link: '/artisans?category=electricite'
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Peinture',
      description: 'Travaux de peinture intérieure et extérieure',
      link: '/artisans?category=peinture'
    },
    {
      icon: <Home size={32} />,
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre habitation',
      link: '/artisans?category=renovation'
    },
    {
      icon: <Hammer size={32} />,
      title: 'Menuiserie',
      description: 'Fabrication et réparation de meubles et structures en bois',
      link: '/artisans?category=menuiserie'
    },
    {
      icon: <Droplet size={32} />,
      title: 'Étanchéité',
      description: 'Solutions d\'étanchéité pour toitures et terrasses',
      link: '/artisans?category=etancheite'
    },
    {
      icon: <SquareDashedBottom size={32} />,
      title: 'Carrelage',
      description: 'Pose et réparation de carrelage et de revêtements',
      link: '/artisans?category=carrelage'
    },
    {
      icon: <Thermometer size={32} />,
      title: 'Climatisation',
      description: 'Installation et maintenance de systèmes de climatisation',
      link: '/artisans?category=climatisation'
    }
  ];

  return (
    <section className="py-16 bg-artisan-gray-light">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-3 text-center">Nos catégories de services</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Découvrez nos artisans qualifiés dans différentes spécialités pour tous vos besoins de travaux et d'entretien
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CategoryCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                link={category.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
