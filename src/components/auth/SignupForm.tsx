
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Wrench, Store } from "lucide-react";

// Modifier le schéma pour que acceptTerms puisse être boolean au lieu de uniquement true
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit comporter au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit comporter au moins 8 caractères.",
  }),
  userType: z.enum(["client", "artisan", "magasin"], {
    required_error: "Veuillez sélectionner un type d'utilisateur.",
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions générales."
  }),
});

const SignupForm = () => {
  const { toast } = useToast();
  const [userTypeDescription, setUserTypeDescription] = useState<string>("");
  const [language, setLanguage] = useState<"fr" | "ar">("fr");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "client",
      acceptTerms: false,
    },
  });
  
  const onUserTypeChange = (value: string) => {
    if (value === "client") {
      setUserTypeDescription(language === "fr" 
        ? "En tant que client, vous pourrez soumettre des demandes de services, suivre vos projets, et évaluer les prestataires."
        : "كعميل، يمكنك تقديم طلبات الخدمة، ومتابعة مشاريعك، وتقييم مقدمي الخدمة.");
    } else if (value === "artisan") {
      setUserTypeDescription(language === "fr"
        ? "En tant qu'artisan, vous pourrez recevoir des missions, gérer vos disponibilités et être noté par les clients."
        : "كحرفي، يمكنك تلقي المهام، وإدارة توفرك، والحصول على تقييمات من العملاء.");
    } else if (value === "magasin") {
      setUserTypeDescription(language === "fr"
        ? "En tant que magasin, vous aurez la possibilité de publier vos produits, recevoir des commandes et communiquer avec des professionnels du bâtiment."
        : "كمتجر، ستتمكن من نشر منتجاتك، وتلقي الطلبات، والتواصل مع محترفي البناء.");
    }
  };

  React.useEffect(() => {
    // Set initial description
    onUserTypeChange("client");
  }, [language]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // For demonstration purposes, just show a toast notification
    toast({
      title: language === "fr" ? "Compte créé avec succès!" : "تم إنشاء الحساب بنجاح!",
      description: language === "fr" ? "Cette fonctionnalité sera disponible prochainement." : "ستتوفر هذه الميزة قريبًا.",
    });
    console.log(values);
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant={language === "fr" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setLanguage("fr")}
            className="text-sm"
          >
            Français
          </Button>
          <Button 
            variant={language === "ar" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setLanguage("ar")}
            className="text-sm"
          >
            العربية
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{language === "fr" ? "Prénom" : "الاسم"}</FormLabel>
                  <FormControl>
                    <Input placeholder={language === "fr" ? "Prénom" : "الاسم"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{language === "fr" ? "Nom" : "اللقب"}</FormLabel>
                  <FormControl>
                    <Input placeholder={language === "fr" ? "Nom" : "اللقب"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder={language === "fr" ? "votre@email.com" : "بريدك@الإلكتروني.com"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{language === "fr" ? "Mot de passe" : "كلمة المرور"}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder={language === "fr" ? "Créez un mot de passe" : "أنشئ كلمة مرور"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>{language === "fr" ? "Type de compte" : "نوع الحساب"}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value);
                      onUserTypeChange(value);
                    }}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="client" />
                      </FormControl>
                      <FormLabel className="font-normal flex items-center gap-2">
                        <User className="h-4 w-4" /> {language === "fr" ? "Client" : "عميل"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="artisan" />
                      </FormControl>
                      <FormLabel className="font-normal flex items-center gap-2">
                        <Wrench className="h-4 w-4" /> {language === "fr" ? "Artisan" : "حرفي"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="magasin" />
                      </FormControl>
                      <FormLabel className="font-normal flex items-center gap-2">
                        <Store className="h-4 w-4" /> {language === "fr" ? "Magasin" : "متجر"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                {userTypeDescription && <FormDescription>{userTypeDescription}</FormDescription>}
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    {language === "fr" ? (
                      <>J'accepte les <a href="#" className="text-artisan-blue hover:underline">conditions générales</a> et la <a href="#" className="text-artisan-blue hover:underline">politique de confidentialité</a>.</>
                    ) : (
                      <>أوافق على <a href="#" className="text-artisan-blue hover:underline">الشروط والأحكام</a> و <a href="#" className="text-artisan-blue hover:underline">سياسة الخصوصية</a>.</>
                    )}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-artisan-blue hover:bg-artisan-blue-dark">
            {language === "fr" ? "Créer mon compte" : "إنشاء حسابي"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
