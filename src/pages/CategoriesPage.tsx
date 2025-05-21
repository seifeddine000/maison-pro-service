
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { 
  Wrench, Zap, Paintbrush, Home, Hammer, 
  Droplet, SquareDashedBottom, Thermometer, Scissors,
  Trash2, Edit, Plus
} from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Category } from '@/models/Category';
import { availableCategories } from '@/data/artisansData';

const formSchema = z.object({
  title: z.string().min(3, { message: "Le titre doit contenir au moins 3 caractères" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  icon: z.string().min(1, { message: "Veuillez sélectionner une icône" }),
  link: z.string().min(1, { message: "Veuillez entrer un lien" }),
});

const CategoriesPage: React.FC = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      title: "Plomberie",
      description: "Réparation, installation et entretien de systèmes de plomberie",
      icon: "Wrench",
      link: "/artisans?category=plomberie"
    },
    {
      id: "2",
      title: "Électricité",
      description: "Installation électrique, dépannage et mise aux normes",
      icon: "Zap",
      link: "/artisans?category=electricite"
    },
  ]);
  
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      icon: "",
      link: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (editingCategory) {
      // Update existing category
      setCategories(prevCategories => 
        prevCategories.map(cat => 
          cat.id === editingCategory.id 
            ? { ...data, id: cat.id } 
            : cat
        )
      );
      toast({
        title: "Catégorie mise à jour",
        description: `La catégorie ${data.title} a été mise à jour avec succès.`,
      });
    } else {
      // Add new category
      setCategories(prevCategories => [
        ...prevCategories,
        { ...data, id: String(Date.now()) }
      ]);
      toast({
        title: "Catégorie ajoutée",
        description: `La catégorie ${data.title} a été ajoutée avec succès.`,
      });
    }
    
    // Reset form
    form.reset();
    setEditingCategory(null);
  };

  const editCategory = (category: Category) => {
    setEditingCategory(category);
    form.reset({
      title: category.title,
      description: category.description,
      icon: category.icon,
      link: category.link,
    });
  };

  const deleteCategory = (id: string | undefined) => {
    if (!id) return;
    
    setCategories(prevCategories => 
      prevCategories.filter(category => category.id !== id)
    );
    
    toast({
      title: "Catégorie supprimée",
      description: "La catégorie a été supprimée avec succès.",
    });
  };

  const cancelEdit = () => {
    setEditingCategory(null);
    form.reset({
      title: "",
      description: "",
      icon: "",
      link: "",
    });
  };

  const iconComponents: Record<string, React.ReactNode> = {
    Wrench: <Wrench size={20} />,
    Zap: <Zap size={20} />,
    Paintbrush: <Paintbrush size={20} />,
    Home: <Home size={20} />,
    Hammer: <Hammer size={20} />,
    Scissors: <Scissors size={20} />,
    SquareDashedBottom: <SquareDashedBottom size={20} />,
    Thermometer: <Thermometer size={20} />,
    Droplet: <Droplet size={20} />,
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-6">Gestion des catégories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingCategory ? "Modifier une catégorie" : "Ajouter une catégorie"}
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Plomberie" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Réparation, installation et entretien de systèmes de plomberie"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icône</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner une icône" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Wrench">
                            <div className="flex items-center">
                              <Wrench size={16} className="mr-2" /> Clé à molette
                            </div>
                          </SelectItem>
                          <SelectItem value="Zap">
                            <div className="flex items-center">
                              <Zap size={16} className="mr-2" /> Électricité
                            </div>
                          </SelectItem>
                          <SelectItem value="Paintbrush">
                            <div className="flex items-center">
                              <Paintbrush size={16} className="mr-2" /> Pinceau
                            </div>
                          </SelectItem>
                          <SelectItem value="Home">
                            <div className="flex items-center">
                              <Home size={16} className="mr-2" /> Maison
                            </div>
                          </SelectItem>
                          <SelectItem value="Hammer">
                            <div className="flex items-center">
                              <Hammer size={16} className="mr-2" /> Marteau
                            </div>
                          </SelectItem>
                          <SelectItem value="Scissors">
                            <div className="flex items-center">
                              <Scissors size={16} className="mr-2" /> Ciseaux
                            </div>
                          </SelectItem>
                          <SelectItem value="SquareDashedBottom">
                            <div className="flex items-center">
                              <SquareDashedBottom size={16} className="mr-2" /> Carrelage
                            </div>
                          </SelectItem>
                          <SelectItem value="Thermometer">
                            <div className="flex items-center">
                              <Thermometer size={16} className="mr-2" /> Thermomètre
                            </div>
                          </SelectItem>
                          <SelectItem value="Droplet">
                            <div className="flex items-center">
                              <Droplet size={16} className="mr-2" /> Goutte
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lien</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ex: /artisans?category=plomberie" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex gap-2">
                  {editingCategory && (
                    <Button type="button" variant="outline" onClick={cancelEdit}>
                      Annuler
                    </Button>
                  )}
                  <Button type="submit" className="w-full">
                    {editingCategory ? "Mettre à jour" : "Ajouter"}
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Catégories existantes</h2>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Icône</TableHead>
                  <TableHead>Titre</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center justify-center bg-blue-50 w-10 h-10 rounded-full text-artisan-blue">
                        {iconComponents[category.icon]}
                      </div>
                    </TableCell>
                    <TableCell>{category.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{category.description}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => editCategory(category)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => deleteCategory(category.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
