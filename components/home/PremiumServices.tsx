import React from "react";
import { PREMIUM_SERVICES } from "@/lib/constants";
//import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PremiumServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We also offer an array of premium services to help you advance your career
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
         
        >
          {PREMIUM_SERVICES.map((service, ) => (
            <div
              key={service.id}
              
            >
              <Card className="h-full flex flex-col">
                {service.image && (
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.price && (
                    <p className="text-gray-900 font-bold text-lg mb-4">{service.price}</p>
                  )}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;