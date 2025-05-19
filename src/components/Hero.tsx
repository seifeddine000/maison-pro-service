import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [language, setLanguage] = useState<"fr" | "ar">("fr");

  // Contenu en français et arabe
  const content = {
    fr: {
      title: "Bienvenue sur notre plateforme algérienne de services professionnels",
      description: "Que vous soyez un particulier à la recherche d'un artisan qualifié, un professionnel souhaitant proposer ses services, ou un magasin d'outillage désirant toucher une clientèle locale, notre plateforme facilite la mise en relation partout en Algérie.",
      details: "Trouvez rapidement des prestataires fiables près de chez vous, réservez facilement et payez en dinars algériens (DZD).",
      benefits: "Interface intuitive, support local et garanties de qualité pour tous vos besoins.",
      findArtisan: "Trouver un artisan",
      discoverTools: "Découvrir les outils",
      searchPlaceholder: "Plomberie, électricité, menuiserie...",
      locationPlaceholder: "Ville ou wilaya",
      search: "Rechercher",
      serviceTitle: "Quel service recherchez-vous?"
    },
    ar: {
      title: "مرحبًا بكم في منصتنا الجزائرية للخدمات المهنية",
      description: "سواء كنت فردًا تبحث عن حرفي مؤهل، أو محترفًا يرغب في تقديم خدماته، أو متجر أدوات يرغب في الوصول إلى العملاء المحليين، فإن منصتنا تسهل التواصل في جميع أنحاء الجزائر.",
      details: "اعثر بسرعة على مقدمي خدمات موثوقين بالقرب منك، واحجز بسهولة وادفع بالدينار الجزائري.",
      benefits: "واجهة بديهية، دعم محلي وضمانات جودة لجميع احتياجاتك.",
      findArtisan: "ابحث عن حرفي",
      discoverTools: "اكتشف الأدوات",
      searchPlaceholder: "سباكة، كهرباء، نجارة...",
      locationPlaceholder: "المدينة أو الولاية",
      search: "بحث",
      serviceTitle: "ما هي الخدمة التي تبحث عنها؟"
    }
  };
  return <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2">
            <Button variant={language === "fr" ? "default" : "outline"} size="sm" onClick={() => setLanguage("fr")} className="text-sm bg-white text-blue-700 hover:bg-blue-50">
              Français
            </Button>
            <Button variant={language === "ar" ? "default" : "outline"} size="sm" onClick={() => setLanguage("ar")} className="text-sm bg-white text-blue-700 hover:bg-blue-50">
              العربية
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 animate-slide-in" dir={language === "ar" ? "rtl" : "ltr"}>
            <h1 className="Notre plateforme facilite la mise en relation entre clients, artisans et magasins sp\xE9cialis\xE9s, afin d\u2019offrir des services professionnels fiables et rapides. Que vous recherchiez un prestataire, souhaitiez proposer vos comp\xE9tences ou repr\xE9senter un magasin, nous vous offrons une interface simple et un accompagnement complet, de la recherche jusqu\u2019\xE0 la r\xE9alisation de la mission, pour gagner du temps avec confiance et qualit\xE9.">
              {content[language].title}
            </h1>
            
            
            <p className="text-lg mb-8 text-blue-100">
              {content[language].benefits}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/artisans">
                <Button size="lg" className="bg-white text-artisan-blue hover:bg-blue-100 font-bold">
                  {content[language].findArtisan}
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  {content[language].discoverTools}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-lg" dir={language === "ar" ? "rtl" : "ltr"}>
              <h3 className="text-artisan-blue-dark text-xl mb-4 font-semibold">
                {content[language].serviceTitle}
              </h3>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-3 text-gray-400`} size={20} />
                  <input type="text" placeholder={content[language].searchPlaceholder} className={`w-full ${language === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue`} />
                </div>
                <div className="relative">
                  <input type="text" placeholder={content[language].locationPlaceholder} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue" />
                </div>
                <Button className="w-full bg-artisan-blue hover:bg-artisan-blue-dark">
                  {content[language].search}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;