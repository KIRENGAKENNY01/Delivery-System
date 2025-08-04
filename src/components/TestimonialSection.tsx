import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import homeDeliveryImage from "@/assets/home-delivery.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Phoenix, AZ",
      rating: 5,
      text: "BorderExpress made receiving my international packages so easy. They handled everything from customs to delivery, and I got my package in just 3 days!",
      role: "Small Business Owner"
    },
    {
      name: "Miguel Rodriguez",
      location: "El Paso, TX",
      rating: 5,
      text: "Amazing service! The tracking was accurate, and the delivery driver was professional. Will definitely use them again for all my border deliveries.",
      role: "Import Specialist"
    },
    {
      name: "Jennifer Chen",
      location: "San Diego, CA",
      rating: 5,
      text: "I was worried about customs delays, but BorderExpress handled everything smoothly. Great communication throughout the entire process.",
      role: "Online Retailer"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={homeDeliveryImage} 
                alt="Happy family receiving package delivery"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -top-8 -left-8 bg-accent p-4 rounded-full shadow-lg">
              <Quote className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>

          {/* Testimonials Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-transport-navy mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    
                    {/* Text */}
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-transport-navy">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;