import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Package, Settings, MessageSquare } from "lucide-react";

const AdminPortal = () => {
  const dashboardCards = [
    {
      title: "View Orders",
      description: "Monitor and manage incoming orders",
      icon: ClipboardList,
      color: "text-blue-600"
    },
    {
      title: "Manage Menu",
      description: "Update daily menu items and prices",
      icon: Package,
      color: "text-green-600"
    },
    {
      title: "Inventory",
      description: "Track stock and supplies",
      icon: Settings,
      color: "text-orange-600"
    },
    {
      title: "Support",
      description: "Customer queries and feedback",
      icon: MessageSquare,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your catering operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 duration-300"
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center ${card.color}`}>
                    <card.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest orders and updates</CardDescription>
            </CardHeader>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { time: "10:30 AM", activity: "New order received - Biryani x2" },
                  { time: "10:15 AM", activity: "Order completed - Pizza delivery" },
                  { time: "09:45 AM", activity: "Menu updated - New dessert added" },
                  { time: "09:30 AM", activity: "Stock replenished - Vegetables" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 w-20 text-sm text-muted-foreground">{item.time}</div>
                    <div className="flex-1">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPortal;
