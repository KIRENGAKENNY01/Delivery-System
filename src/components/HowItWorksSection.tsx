import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Truck, Home, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Border Collection",
      description: "We collect your package from the border crossing or customs facility with all necessary documentation."
    },
    {
      number: "02", 
      icon: Package,
      title: "Processing & Sorting",
      description: "Your package is processed, sorted, and prepared for secure transport with full tracking enabled."
    },
    {
      number: "03",
      icon: Truck,
      title: "Secure Transport",
      description: "Professional transportation with GPS tracking, insurance coverage, and regular status updates."
    },
    {
      number: "04",
      icon: Home,
      title: "Door Delivery",
      description: "Final delivery to your doorstep with signature confirmation and photo proof of delivery."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-transport-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your packages reach you safely and efficiently. 
            From border pickup to doorstep delivery, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-transport-navy mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 z-10 bg-background rounded-full p-2 border shadow-sm">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            Start Your Delivery
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;