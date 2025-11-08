import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface OrderItem extends FoodItem {
  quantity: number;
}

const Menu = () => {
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 120,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop",
      description: "Spicy and flavorful rice with tender chicken"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 150,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop",
      description: "Classic Italian pizza with cheese and basil"
    },
    {
      id: 3,
      name: "Hakka Noodles",
      price: 100,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop",
      description: "Stir-fried Chinese noodles with veggies"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 80,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      description: "Rich chocolate dessert"
    },
    {
      id: 5,
      name: "Paneer Tikka",
      price: 110,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
      description: "Grilled cottage cheese with Indian spices"
    },
    {
      id: 6,
      name: "Pasta Alfredo",
      price: 130,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop",
      description: "Creamy Italian pasta with Alfredo sauce"
    }
  ];

  const [order, setOrder] = useState<OrderItem[]>([]);

  const addToOrder = (item: FoodItem) => {
    setOrder(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success(`Added ${item.name} to order`);
  };

  const updateQuantity = (id: number, change: number) => {
    setOrder(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updated;
    });
  };

  const totalAmount = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    if (order.length === 0) {
      toast.error("Please add items to your order");
      return;
    }
    toast.success(`Order placed successfully! Total: ₹${totalAmount}`);
    setOrder([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Our Multicuisine Menu</h1>
          <p className="text-center text-muted-foreground mb-12">Explore our delicious offerings from around the world</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {foodItems.map(item => {
              const orderItem = order.find(o => o.id === item.id);
              return (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">₹{item.price}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {orderItem ? (
                      <div className="flex items-center gap-2 w-full">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="flex-1 text-center font-semibold">{orderItem.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button className="w-full" onClick={() => addToOrder(item)}>
                        Add to Order
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Order Summary */}
          {order.length > 0 && (
            <Card className="sticky bottom-4 shadow-2xl animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {order.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <span>{item.name} x {item.quantity}</span>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2 flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{totalAmount}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" onClick={placeOrder}>
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
