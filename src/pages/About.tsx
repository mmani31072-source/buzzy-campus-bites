import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Utensils } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Blue Bee</h1>
            <p className="text-xl text-muted-foreground">
              Buzzing with quality and taste since day one
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                Blue Bee is a modern college catering service offering multicuisine meals with a fresh, 
                clean design and interactive web experience. We're passionate about bringing delicious, 
                quality food to students at affordable prices.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to provide a convenient, reliable food service that feels like home cooking 
                while offering the diversity of global cuisines. From traditional Indian dishes to Italian 
                favorites and Chinese delights, we've got something for everyone.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with care and attention to quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multicuisine</h3>
                <p className="text-muted-foreground">
                  Indian, Italian, Chinese, and more cuisines to explore
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Focused</h3>
                <p className="text-muted-foreground">
                  Designed specifically for college students' needs and budgets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
