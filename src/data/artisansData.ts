
// Artisans data with Arabic names and Algerian context
const artisansData = [
  {
    id: '1',
    name: 'خالد بن عمر (Khaled)',
    profession: 'Chauffagiste',
    rating: 4.8,
    reviewCount: 124,
    location: 'Alger',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    categories: ['Chauffage', 'Plomberie', 'Installation'],
    description: 'Chauffagiste professionnel avec plus de 15 ans d\'expérience. Spécialisation en installations et réparations de systèmes de chauffage.',
    hourlyRate: '1200 DZD'
  },
  {
    id: '2',
    name: 'سلمى عمراني (Salma)',
    profession: 'Électricienne',
    rating: 4.7,
    reviewCount: 98,
    location: 'Oran',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    categories: ['Électricité', 'Domotique', 'Installation'],
    description: 'Électricienne certifiée, expérimentée dans les installations électriques résidentielles et commerciales. Spécialiste en domotique.',
    hourlyRate: '1500 DZD'
  },
  {
    id: '3',
    name: 'محمد بلقاسم (Mohamed)',
    profession: 'Menuisier',
    rating: 4.9,
    reviewCount: 145,
    location: 'Constantine',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1540479859555-17af45c78602',
    categories: ['Menuiserie', 'Ébénisterie', 'Rénovation'],
    description: 'Menuisier ébéniste avec une passion pour les travaux de précision. Création de meubles sur mesure et restauration d\'antiquités.',
    hourlyRate: '1400 DZD'
  },
  {
    id: '4',
    name: 'فاطمة الزهراء (Fatima)',
    profession: 'Peintre',
    rating: 4.5,
    reviewCount: 87,
    location: 'Annaba',
    verified: false,
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    categories: ['Peinture', 'Décoration', 'Revêtement'],
    description: 'Peintre décoratrice spécialisée dans les finitions de qualité et les techniques décoratives innovantes pour tous vos intérieurs.',
    hourlyRate: '1000 DZD'
  },
  {
    id: '5',
    name: 'كريم حسان (Karim)',
    profession: 'Carreleur',
    rating: 4.6,
    reviewCount: 73,
    location: 'Sétif',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6',
    categories: ['Carrelage', 'Revêtement sol', 'Salle de bain'],
    description: 'Carreleur professionnel expert en pose de carrelage et de revêtement de sol. Spécialisation dans les salles de bain et cuisines.',
    hourlyRate: '1300 DZD'
  },
  {
    id: '6',
    name: 'أمينة بلعيد (Amina)',
    profession: 'Couturier',
    rating: 4.9,
    reviewCount: 156,
    location: 'Tlemcen',
    verified: true,
    profileImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
    categories: ['Couture', 'Retouche', 'Confection'],
    description: 'Atelier de couture spécialisé en création sur mesure et retouches de qualité. Travail soigné pour tous vos vêtements et textiles.',
    hourlyRate: '900 DZD'
  }
];

// Available categories (for filter)
export const availableCategories = [
  'Plomberie', 'Électricité', 'Menuiserie', 'Peinture', 
  'Carrelage', 'Chauffage', 'Rénovation', 'Domotique', 
  'Installation', 'Décoration', 'Couture', 'Retouche', 'Confection'
];

export default artisansData;
