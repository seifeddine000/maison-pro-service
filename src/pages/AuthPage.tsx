
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import { UserPlus, UserRound } from 'lucide-react';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-artisan-gray-light">
        <div className="container-custom max-w-md mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-8">Accès à votre espace</h1>
            
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="login" className="flex items-center justify-center gap-2">
                  <UserRound className="h-4 w-4" />
                  <span>Connexion</span>
                </TabsTrigger>
                <TabsTrigger value="signup" className="flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Inscription</span>
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
