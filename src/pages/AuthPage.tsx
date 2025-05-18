
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import { UserPlus, UserRound } from 'lucide-react';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const [language, setLanguage] = useState<"fr" | "ar">("fr");

  const handleLanguageChange = (lang: "fr" | "ar") => {
    setLanguage(lang);
  };

  // Texte pour la page d'inscription dans les deux langues
  const signupText = {
    fr: {
      title: "Créez votre compte en quelques minutes",
      description: "Inscrivez-vous en tant que client, artisan ou magasin d'outillage. Les clients peuvent soumettre leurs demandes, suivre leurs projets et noter les prestataires. Les artisans reçoivent des missions, gèrent leurs disponibilités et améliorent leur visibilité. Les magasins proposent leurs produits et communiquent directement avec les clients. Paiement sécurisé en dinars algériens."
    },
    ar: {
      title: "أنشئ حسابك في دقائق معدودة",
      description: "سجّل كعميل، حرفي، أو متجر أدوات. يمكن للعملاء تقديم طلباتهم، ومتابعة مشاريعهم، وتقييم مقدمي الخدمات. يتلقى الحرفيون المهام، ويديرون توفرهم، ويحسنون رؤيتهم. تقدم المتاجر منتجاتها وتتواصل مباشرة مع العملاء. دفع آمن بالدينار الجزائري."
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-artisan-gray-light">
        <div className="container-custom max-w-md mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
              {activeTab === "signup" 
                ? (language === "fr" ? signupText.fr.title : signupText.ar.title) 
                : (language === "fr" ? "Accès à votre espace" : "الوصول إلى حسابك")}
            </h1>
            
            {activeTab === "signup" && (
              <p className="text-gray-600 mb-8 text-center" dir={language === "ar" ? "rtl" : "ltr"}>
                {language === "fr" ? signupText.fr.description : signupText.ar.description}
              </p>
            )}
            
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="login" className="flex items-center justify-center gap-2">
                  <UserRound className="h-4 w-4" />
                  <span>{language === "fr" ? "Connexion" : "تسجيل الدخول"}</span>
                </TabsTrigger>
                <TabsTrigger value="signup" className="flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>{language === "fr" ? "Inscription" : "التسجيل"}</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="signup">
                <SignupForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;
