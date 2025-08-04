import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-background to-accent-light overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-transport-navy leading-tight">
                From Border
                <span className="bg-gradient-primary bg-clip-text text-transparent"> to Your Door</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Fast, reliable, and secure transportation services connecting international borders to your home. 
                We handle customs, logistics, and last-mile delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Track Your Package
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium">50k+ Deliveries</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">100% Secure</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium">24/7 Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Modern delivery truck at border crossing"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transport-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-transport-navy">2-5 Days</div>
                <div className="text-sm text-muted-foreground">Average Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;