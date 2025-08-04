import { Card, CardContent } from "@/components/ui/card";
import warehouseImage from "@/assets/warehouse-logistics.jpg";

const StatsSection = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Packages Delivered",
      description: "Successfully transported from border to door"
    },
    {
      number: "200+",
      label: "Cities Covered",
      description: "Nationwide delivery network"
    },
    {
      number: "99.8%",
      label: "Delivery Success",
      description: "Reliable and on-time deliveries"
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "Always available to help"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-transport-navy to-primary relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={warehouseImage} 
          alt="Logistics warehouse"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our commitment to excellence has made us the preferred choice for border-to-door delivery services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 group hover:bg-background/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;