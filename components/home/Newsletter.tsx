import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <Card className="bg-gray-50 border-none">
          <CardContent className="p-8">
            <div 
              className="text-center max-w-2xl mx-auto"
              
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated on Latest AI & Remote Jobs
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter and receive weekly updates on the best remote jobs available
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow" 
                  required 
                />
                <Button type="submit">Subscribe</Button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;