import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Shield, Globe, Clock, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Border Pickup",
      description: "We collect your packages directly from international borders and customs facilities.",
      features: ["Customs clearance assistance", "Documentation handling", "Real-time updates"]
    },
    {
      icon: Package,
      title: "Secure Transport",
      description: "Your packages are transported with full tracking and insurance coverage.",
      features: ["GPS tracking", "Insurance included", "Temperature control"]
    },
    {
      icon: Users,
      title: "Home Delivery",
      description: "Direct delivery to your doorstep with signature confirmation and photo proof.",
      features: ["Scheduled delivery", "Signature required", "Photo confirmation"]
    },
    {
      icon: Globe,
      title: "International Coverage",
      description: "We serve all major border crossings and deliver nationwide.",
      features: ["All major borders", "Nationwide delivery", "Rural area coverage"]
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Advanced security measures protect your valuable packages throughout transit.",
      features: ["Tamper-proof sealing", "Security escorts", "Secure facilities"]
    },
    {
      icon: Clock,
      title: "Express Options",
      description: "Fast-track services for urgent deliveries with guaranteed timeframes.",
      features: ["Same-day pickup", "Next-day delivery", "Priority handling"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-transport-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transportation solutions from international borders to your doorstep. 
            We handle every step of the delivery process with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-transport-navy">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;