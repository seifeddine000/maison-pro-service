
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
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions générales." }),
  }),
});

const SignupForm = () => {
  const { toast } = useToast();
  const [userTypeDescription, setUserTypeDescription] = useState<string>("");
  
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
      setUserTypeDescription("En tant que client, vous pourrez soumettre des demandes de services, suivre vos projets, et évaluer les prestataires.");
    } else if (value === "artisan") {
      setUserTypeDescription("En tant qu'artisan, vous pourrez recevoir des missions, gérer vos disponibilités et être noté par les clients.");
    } else if (value === "magasin") {
      setUserTypeDescription("En tant que magasin, vous aurez la possibilité de publier vos produits, recevoir des commandes et communiquer avec des professionnels du bâtiment.");
    }
  };

  React.useEffect(() => {
    // Set initial description
    onUserTypeChange("client");
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // For demonstration purposes, just show a toast notification
    toast({
      title: "Compte créé avec succès!",
      description: "Cette fonctionnalité sera disponible prochainement.",
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom" {...field} />
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
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" {...field} />
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
                <Input placeholder="votre@email.com" {...field} />
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Créez un mot de passe" {...field} />
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
              <FormLabel>Type de compte</FormLabel>
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
                      <User className="h-4 w-4" /> Client
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="artisan" />
                    </FormControl>
                    <FormLabel className="font-normal flex items-center gap-2">
                      <Wrench className="h-4 w-4" /> Artisan
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="magasin" />
                    </FormControl>
                    <FormLabel className="font-normal flex items-center gap-2">
                      <Store className="h-4 w-4" /> Magasin
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
                  J'accepte les <a href="#" className="text-artisan-blue hover:underline">conditions générales</a> et la <a href="#" className="text-artisan-blue hover:underline">politique de confidentialité</a>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-artisan-blue hover:bg-artisan-blue-dark">
          Créer mon compte
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
