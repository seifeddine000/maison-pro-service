import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
interface ArtisanHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
const ArtisanHero: React.FC<ArtisanHeroProps> = ({
  searchTerm,
  setSearchTerm
}) => {
  return <section className="bg-artisan-blue text-white py-10">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-4">Trouvez les meilleurs artisans</h1>
        <p className="max-w-2xl">Des professionnels qualifiés </p>
        
        <div className="mt-6 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input type="text" placeholder="Rechercher un artisan par nom, spécialité ou ville..." className="w-full md:w-2/3 pl-10 pr-4 py-6 bg-white text-black" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </div>
    </section>;
};
export default ArtisanHero;