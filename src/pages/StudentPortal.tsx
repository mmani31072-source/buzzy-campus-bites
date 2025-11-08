import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { User, Clock } from "lucide-react";

const StudentPortal = () => {
  const [name, setName] = useState("");
  const [mealTime, setMealTime] = useState("");

  const todaysMenu = {
    breakfast: ["Idli Sambar", "Poha", "Toast & Butter", "Tea/Coffee"],
    lunch: ["Dal Rice", "Roti", "Paneer Curry", "Salad", "Curd"],
    dinner: ["Fried Rice", "Manchurian", "Soup", "Ice Cream"]
  };

  const handleViewMenu = () => {
    if (!name || !mealTime) {
      toast.error("Please enter your name and select meal time");
      return;
    }
    toast.success(`Welcome ${name}! Showing ${mealTime} menu`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <User className="h-10 w-10 text-primary" />
              Student Portal
            </h1>
            <p className="text-muted-foreground">View today's menu and place your orders</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Enter your details to view the menu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Student Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="mealTime">Meal Time</Label>
                <Select value={mealTime} onValueChange={setMealTime}>
                  <SelectTrigger id="mealTime">
                    <SelectValue placeholder="Select meal time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={handleViewMenu}>
                View Today's Menu
              </Button>
            </CardContent>
          </Card>

          {mealTime && name && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Today's {mealTime.charAt(0).toUpperCase() + mealTime.slice(1)} Menu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {todaysMenu[mealTime as keyof typeof todaysMenu].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentPortal;
