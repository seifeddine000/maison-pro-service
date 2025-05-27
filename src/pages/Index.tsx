import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCategories from '@/components/ServiceCategories';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { UserCheck, Wrench, Star, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Welcome Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-center">Bienvenue sur ArtiConnect</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Bienvenue sur notre plateforme dédiée à la mise en relation dans le domaine des services professionnels. Que vous soyez un particulier ou une entreprise à la recherche d’un artisan qualifié, un professionnel souhaitant proposer ses compétences, ou un magasin d’outillage ciblant des clients spécifiques, vous êtes au bon endroit.

Notre mission est de faciliter l’accès à des services fiables et rapides, en connectant les clients aux meilleurs prestataires de leur région. Explorez notre interface simple et intuitive, choisissez le service dont vous avez besoin, et profitez d’un accompagnement complet tout au long du processus, de la recherche jusqu’à la réalisation de la mission.

Avec nous, trouvez le bon professionnel au bon moment, et gagnez en temps, en qualité et en confiance.</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            </p>
              
              <div className="flex justify-center gap-4">
                <Link to="/artisans">
                  <Button size="lg" className="bg-artisan-blue hover:bg-artisan-blue-dark">
                    Découvrir nos artisans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <ServiceCategories />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-3 text-center">Comment ça fonctionne</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Trouvez facilement des artisans professionnels et des outils pour vos projets en quelques étapes simples
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-artisan-blue">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Trouvez</h3>
                <p className="text-gray-600">
                  Recherchez des artisans qualifiés selon vos besoins spécifiques et votre localisation
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-artisan-blue">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Contactez</h3>
                <p className="text-gray-600">
                  Discutez avec les artisans, recevez des devis personnalisés et choisissez le bon professionnel
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-artisan-blue">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Réalisez</h3>
                <p className="text-gray-600">
                  Faites réaliser vos travaux et évaluez le service pour aider la communauté
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="#" className="inline-flex items-center text-artisan-blue hover:text-artisan-blue-dark font-medium">
                En savoir plus
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-artisan-gray-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Pourquoi choisir notre plateforme?</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 text-artisan-blue">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Artisans qualifiés et vérifiés</h3>
                      <p className="text-gray-600">
                        Tous nos artisans sont vérifiés et évalués par notre communauté pour garantir un service de qualité.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 text-artisan-blue">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Outils professionnels</h3>
                      <p className="text-gray-600">
                        Accédez à une large gamme d'outils professionnels sélectionnés pour leur qualité et durabilité.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 text-artisan-blue">
                      <Star size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Évaluations transparentes</h3>
                      <p className="text-gray-600">
                        Consultez les avis vérifiés des clients précédents pour choisir en toute confiance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 text-artisan-blue">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Service sécurisé</h3>
                      <p className="text-gray-600">
                        Profitez d'un service fiable avec une assistance dédiée tout au long de votre projet.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/artisans">
                    <Button size="lg" className="mr-4 hover:bg-artisan-blue-dark bg-orange-500 hover:bg-orange-400">
                      Trouver un artisan
                    </Button>
                  </Link>
                  <Link to="/tools">
                    <Button size="lg" variant="outline">
                      Découvrir les outils
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4" alt="Artisan au travail" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <span className="ml-2 font-semibold">4.8/5</span>
                  </div>
                  <p className="text-sm">"Service exceptionnel ! J'ai trouvé un excellent électricien en moins d'une heure."</p>
                  <p className="text-xs text-gray-500 mt-1">Marie D. - Paris</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-artisan-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre projet?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Rejoignez notre communauté et trouvez les meilleurs artisans pour tous vos besoins de travaux et d'entretien.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-artisan-blue hover:bg-blue-50">
                Je suis un client
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white rounded-sm bg-orange-500 hover:bg-orange-400">
                Je suis un artisan
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;