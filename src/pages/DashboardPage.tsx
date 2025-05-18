
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Search, MessageSquare, Star, Bell, Calendar, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardPage = () => {
  const [userType, setUserType] = useState<"client" | "artisan" | "store">("client");
  const [language, setLanguage] = useState<"fr" | "ar">("fr");

  const handleLanguageChange = (lang: "fr" | "ar") => {
    setLanguage(lang);
  };

  // Content for the dashboard in both languages
  const dashboardContent = {
    fr: {
      client: {
        title: "Votre espace personnel",
        description: "Gérez vos demandes de service et communiquez avec les artisans.",
        searchTitle: "Rechercher un artisan",
        requestsTitle: "Vos demandes récentes",
        searchPlaceholder: "Rechercher par métier ou nom",
        locationPlaceholder: "Votre région",
        search: "Rechercher",
        noRequests: "Vous n'avez pas encore de demandes.",
        viewAll: "Voir tout",
        intro: [
          "Recherchez des artisans qualifiés selon votre région en Algérie.",
          "Consultez les avis, envoyez des demandes et communiquez avec les prestataires.",
          "Suivez vos projets en temps réel, bénéficiez d'un service fiable et local."
        ]
      },
      artisan: {
        title: "Votre espace professionnel",
        description: "Gérez vos missions, disponibilités et profil professionnel.",
        requestsTitle: "Demandes de clients",
        upcomingTitle: "Interventions prévues",
        ratingsTitle: "Vos évaluations récentes",
        noRequests: "Aucune nouvelle demande pour le moment.",
        noUpcoming: "Aucune intervention prévue.",
        noRatings: "Aucune évaluation pour le moment.",
        viewAll: "Voir tout",
        intro: [
          "Recevez des demandes de clients selon vos compétences et votre région.",
          "Gérez vos disponibilités, tarifs et acceptez des missions facilement.",
          "Améliorez votre visibilité grâce aux évaluations clients et développez votre activité."
        ]
      },
      store: {
        title: "Espace dédié aux magasins d'outillage",
        description: "Gérez vos produits et commandes en ligne.",
        productsTitle: "Produits populaires",
        ordersTitle: "Commandes récentes",
        addProduct: "Ajouter un produit",
        noProducts: "Aucun produit ajouté pour le moment.",
        noOrders: "Aucune commande reçue pour le moment.",
        viewAll: "Voir tout",
        intro: [
          "Ajoutez vos produits, gérez le stock, et recevez des commandes en dinars algériens (DZD).",
          "Profitez d'une visibilité locale pour toucher artisans et clients à travers l'Algérie.",
          "Interface simple et sécurisée."
        ]
      }
    },
    ar: {
      client: {
        title: "مساحتك الشخصية",
        description: "إدارة طلبات الخدمة والتواصل مع الحرفيين.",
        searchTitle: "البحث عن حرفي",
        requestsTitle: "طلباتك الأخيرة",
        searchPlaceholder: "البحث حسب المهنة أو الاسم",
        locationPlaceholder: "منطقتك",
        search: "بحث",
        noRequests: "ليس لديك أي طلبات حتى الآن.",
        viewAll: "عرض الكل",
        intro: [
          "ابحث عن حرفيين مؤهلين في الجزائر حسب منطقتك.",
          "اطلع على التقييمات، أرسل الطلبات وتواصل مباشرة مع مقدمي الخدمات.",
          "تابع مشاريعك في الوقت الحقيقي واستفد من خدمة موثوقة ومحلية."
        ]
      },
      artisan: {
        title: "مساحتك المهنية",
        description: "إدارة مهامك وتوفرك وملفك الشخصي المهني.",
        requestsTitle: "طلبات العملاء",
        upcomingTitle: "التدخلات المقبلة",
        ratingsTitle: "تقييماتك الأخيرة",
        noRequests: "لا توجد طلبات جديدة في الوقت الحالي.",
        noUpcoming: "لا توجد تدخلات مخططة.",
        noRatings: "لا توجد تقييمات في الوقت الحالي.",
        viewAll: "عرض الكل",
        intro: [
          "استقبل طلبات من العملاء حسب مهاراتك ومنطقتك.",
          "أدر توفرك وأسعارك واقبل المهام بسهولة.",
          "حسّن ظهورك من خلال تقييمات العملاء وطوّر نشاطك."
        ]
      },
      store: {
        title: "مساحة مخصصة لمتاجر الأدوات",
        description: "إدارة المنتجات والطلبات عبر الإنترنت.",
        productsTitle: "المنتجات الشائعة",
        ordersTitle: "الطلبات الأخيرة",
        addProduct: "إضافة منتج",
        noProducts: "لم يتم إضافة أي منتج بعد.",
        noOrders: "لم يتم استلام أي طلب حتى الآن.",
        viewAll: "عرض الكل",
        intro: [
          "أضف منتجاتك، وأدر المخزون، واستقبل الطلبات بالدينار الجزائري.",
          "استفد من الظهور المحلي للوصول إلى الحرفيين والعملاء في جميع أنحاء الجزائر.",
          "واجهة بسيطة وآمنة."
        ]
      }
    }
  };

  // Mock data for the dashboard
  const mockRequests = [
    { id: 1, service: "Plomberie", date: "2023-05-15", status: "En attente" },
    { id: 2, service: "Électricité", date: "2023-05-10", status: "Accepté" },
    { id: 3, service: "Menuiserie", date: "2023-05-05", status: "Terminé" },
  ];

  const mockArtisanRequests = [
    { id: 1, client: "Ahmed M.", service: "Plomberie", date: "2023-05-15", location: "Alger" },
    { id: 2, client: "Karim L.", service: "Plomberie", date: "2023-05-14", location: "Oran" },
  ];

  const mockRatings = [
    { id: 1, client: "Ahmed M.", rating: 5, comment: "Excellent travail, rapide et professionnel" },
    { id: 2, client: "Karim L.", rating: 4, comment: "Bon service, ponctuel" },
  ];

  const mockProducts = [
    { id: 1, name: "Perceuse", price: "12,500 DZD", stock: 15 },
    { id: 2, name: "Marteau", price: "2,200 DZD", stock: 30 },
    { id: 3, name: "Set de tournevis", price: "4,800 DZD", stock: 20 },
  ];

  const mockOrders = [
    { id: 1, client: "Yousef H.", products: "Perceuse, Marteau", total: "14,700 DZD", date: "2023-05-14" },
    { id: 2, client: "Ahmed K.", products: "Set de tournevis", total: "4,800 DZD", date: "2023-05-12" },
  ];

  const content = dashboardContent[language][userType];

  return (
    <div className="min-h-screen flex flex-col" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header />
      
      <main className="flex-grow py-8 bg-artisan-gray-light">
        <div className="container-custom">
          <div className="flex justify-end mb-6">
            <div className="flex items-center space-x-2">
              <Button 
                variant={language === "fr" ? "default" : "outline"} 
                size="sm" 
                onClick={() => handleLanguageChange("fr")}
                className="text-sm"
              >
                Français
              </Button>
              <Button 
                variant={language === "ar" ? "default" : "outline"} 
                size="sm" 
                onClick={() => handleLanguageChange("ar")}
                className="text-sm mx-2"
              >
                العربية
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-gray-600 mb-6">{content.description}</p>

          <Tabs defaultValue="client" value={userType} onValueChange={(value) => setUserType(value as "client" | "artisan" | "store")} className="w-full mb-8">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="client">
                {language === "fr" ? "Client" : "عميل"}
              </TabsTrigger>
              <TabsTrigger value="artisan">
                {language === "fr" ? "Artisan" : "حرفي"}
              </TabsTrigger>
              <TabsTrigger value="store">
                {language === "fr" ? "Magasin" : "متجر"}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>{language === "fr" ? "Bienvenue" : "مرحبا بك"}</CardTitle>
                <CardDescription>{language === "fr" ? "Votre tableau de bord personnalisé" : "لوحة التحكم المخصصة لك"}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {content.intro.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <UserCheck className="h-5 w-5 text-artisan-blue mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {userType === "client" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="col-span-3 md:col-span-3">
                  <CardHeader>
                    <CardTitle>{content.searchTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-grow">
                        <Search className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-3 text-gray-400`} size={20} />
                        <input 
                          type="text" 
                          placeholder={content.searchPlaceholder}
                          className={`w-full ${language === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue`}
                        />
                      </div>
                      <div className="relative sm:w-1/3">
                        <input 
                          type="text" 
                          placeholder={content.locationPlaceholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-artisan-blue"
                        />
                      </div>
                      <Button className="bg-artisan-blue hover:bg-artisan-blue-dark">
                        {content.search}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.requestsTitle}</CardTitle>
                  <Button variant="outline" size="sm">{content.viewAll}</Button>
                </CardHeader>
                <CardContent>
                  {mockRequests.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">{language === "fr" ? "ID" : "المعرف"}</TableHead>
                          <TableHead>{language === "fr" ? "Service" : "الخدمة"}</TableHead>
                          <TableHead>{language === "fr" ? "Date" : "التاريخ"}</TableHead>
                          <TableHead>{language === "fr" ? "Statut" : "الحالة"}</TableHead>
                          <TableHead className="text-right">{language === "fr" ? "Action" : "إجراء"}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">{request.id}</TableCell>
                            <TableCell>{request.service}</TableCell>
                            <TableCell>{request.date}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded text-xs ${
                                request.status === "En attente" ? "bg-yellow-100 text-yellow-800" :
                                request.status === "Accepté" ? "bg-blue-100 text-blue-800" : 
                                "bg-green-100 text-green-800"
                              }`}>
                                {request.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {language === "fr" ? "Contacter" : "اتصال"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">{content.noRequests}</div>
                  )}
                </CardContent>
              </Card>
            </>
          )}

          {userType === "artisan" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.requestsTitle}</CardTitle>
                  <Button variant="outline" size="sm">{content.viewAll}</Button>
                </CardHeader>
                <CardContent>
                  {mockArtisanRequests.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{language === "fr" ? "Client" : "العميل"}</TableHead>
                          <TableHead>{language === "fr" ? "Service" : "الخدمة"}</TableHead>
                          <TableHead>{language === "fr" ? "Lieu" : "الموقع"}</TableHead>
                          <TableHead className="text-right">{language === "fr" ? "Action" : "إجراء"}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockArtisanRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>{request.client}</TableCell>
                            <TableCell>{request.service}</TableCell>
                            <TableCell>{request.location}</TableCell>
                            <TableCell className="text-right space-x-1">
                              <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200">
                                {language === "fr" ? "Accepter" : "قبول"}
                              </Button>
                              <Button variant="outline" size="sm" className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200">
                                {language === "fr" ? "Refuser" : "رفض"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">{content.noRequests}</div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.ratingsTitle}</CardTitle>
                  <Button variant="outline" size="sm">{content.viewAll}</Button>
                </CardHeader>
                <CardContent>
                  {mockRatings.length > 0 ? (
                    <div className="space-y-4">
                      {mockRatings.map((rating) => (
                        <div key={rating.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{rating.client}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  className={i < rating.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{rating.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">{content.noRatings}</div>
                  )}
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.upcomingTitle}</CardTitle>
                  <Button variant="outline" size="sm">{content.viewAll}</Button>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">{content.noUpcoming}</div>
                </CardContent>
              </Card>
            </div>
          )}

          {userType === "store" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.productsTitle}</CardTitle>
                  <Button variant="default" size="sm">
                    {content.addProduct}
                  </Button>
                </CardHeader>
                <CardContent>
                  {mockProducts.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{language === "fr" ? "Produit" : "المنتج"}</TableHead>
                          <TableHead>{language === "fr" ? "Prix" : "السعر"}</TableHead>
                          <TableHead>{language === "fr" ? "Stock" : "المخزون"}</TableHead>
                          <TableHead className="text-right">{language === "fr" ? "Action" : "إجراء"}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockProducts.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                {language === "fr" ? "Modifier" : "تعديل"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">{content.noProducts}</div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{content.ordersTitle}</CardTitle>
                  <Button variant="outline" size="sm">{content.viewAll}</Button>
                </CardHeader>
                <CardContent>
                  {mockOrders.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{language === "fr" ? "Client" : "العميل"}</TableHead>
                          <TableHead>{language === "fr" ? "Articles" : "العناصر"}</TableHead>
                          <TableHead>{language === "fr" ? "Total" : "المجموع"}</TableHead>
                          <TableHead className="text-right">{language === "fr" ? "Action" : "إجراء"}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell>{order.client}</TableCell>
                            <TableCell>{order.products}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                {language === "fr" ? "Détails" : "التفاصيل"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">{content.noOrders}</div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
