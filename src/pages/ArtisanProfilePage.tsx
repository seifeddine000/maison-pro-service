
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle2, Scissors, Phone, Mail, Clock } from 'lucide-react';
import artisansData from '@/data/artisansData';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArtisanProfilePage = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the artisan with the matching id
    const foundArtisan = artisansData.find(a => a.id === id);
    
    if (foundArtisan) {
      setArtisan(foundArtisan);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-8 flex justify-center items-center min-h-[70vh]">
          <p>Chargement du profil...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-8 flex justify-center items-center min-h-[70vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Profil introuvable</h1>
            <p>L'artisan que vous recherchez n'existe pas.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Artisan Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={artisan.profileImage} alt={artisan.name} />
                  <AvatarFallback>{artisan.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{artisan.name}</CardTitle>
                <p className="text-artisan-blue font-medium flex items-center gap-1 justify-center mt-1">
                  {artisan.profession === "Couturier" && <Scissors className="h-4 w-4" />}
                  {artisan.profession}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center items-center mb-2">
                  <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                  <span className="ml-1 font-semibold">{artisan.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-1">({artisan.reviewCount} avis)</span>
                </div>
                
                <div className="flex items-center text-gray-600 justify-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{artisan.location}</span>
                </div>
                
                {artisan.verified && (
                  <div className="flex items-center text-green-600 justify-center">
                    <CheckCircle2 size={16} className="mr-1" />
                    <span>Vérifié</span>
                  </div>
                )}
                
                {artisan.hourlyRate && (
                  <p className="text-green-600 font-semibold text-center">
                    Tarif: {artisan.hourlyRate} / heure
                  </p>
                )}
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-500" />
                      <span>+213 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-500" />
                      <span>{artisan.name.split(' ')[0].toLowerCase()}@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500" />
                      <span>Disponible 7j/7, 8h-18h</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Spécialités</h4>
                  <div className="flex flex-wrap gap-2">
                    {artisan.categories.map((category: string, index: number) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-artisan-blue border-artisan-blue">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>À propos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {artisan.description}
                  {/* Extended description */}
                  {artisan.profession === "Chauffagiste" && 
                    " Je me spécialise dans l'installation et la réparation de systèmes de chauffage pour les résidences et les petites entreprises. Je travaille avec tous les types de systèmes, y compris le chauffage central, les chaudières et les systèmes de chauffage au sol. Je vous garantis un service professionnel, rapide et fiable."}
                  {artisan.profession === "Électricienne" && 
                    " Spécialisée dans les installations électriques résidentielles et commerciales, j'offre des services de qualité pour tous vos besoins en électricité. De la rénovation à l'installation de nouveaux systèmes, je m'engage à fournir un travail sécuritaire et conforme aux normes."}
                  {artisan.profession === "Menuisier" && 
                    " Passionné par le bois depuis plus de 15 ans, je crée des meubles sur mesure et restaure des pièces anciennes. Chaque projet est réalisé avec précision et attention aux détails, en utilisant des matériaux de haute qualité pour un résultat durable et élégant."}
                  {artisan.profession === "Peintre" && 
                    " Avec mon expertise en peinture décorative, je transforme vos espaces avec des finitions impeccables. Je maîtrise différentes techniques et styles pour créer l'ambiance parfaite dans votre maison ou votre bureau. La satisfaction du client est ma priorité absolue."}
                  {artisan.profession === "Carreleur" && 
                    " Expert en pose de carrelage et de revêtement de sol, je réalise des installations de qualité pour vos salles de bain, cuisines et autres espaces. Je travaille avec une variété de matériaux et de designs pour créer des espaces fonctionnels et esthétiques."}
                  {artisan.profession === "Couturier" && 
                    " Dans mon atelier, je crée et modifie des vêtements sur mesure avec passion et précision. Que ce soit pour des retouches ou des créations originales, je m'efforce de dépasser vos attentes avec un travail soigné et des finitions impeccables."}
                </p>
              </CardContent>
            </Card>
            
            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Galerie de travaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Photo {item}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Avis clients ({artisan.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>U{item}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Client {item}</div>
                            <div className="text-xs text-gray-500">il y a {item} jour{item > 1 ? 's' : ''}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= 5 - (item * 0.5) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {item === 1 && "Excellent service, très professionnel et travail soigné. Je recommande vivement!"}
                        {item === 2 && "Travail rapide et efficace. Prix raisonnable pour la qualité fournie."}
                        {item === 3 && "Bon artisan, ponctuel et sérieux. Le résultat correspond à mes attentes."}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtisanProfilePage;
