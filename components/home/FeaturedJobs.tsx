import React from "react";
import Link from "next/link";
import { FEATURED_JOBS } from "@/lib/constants";
//import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedJobs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of remote AI jobs from top companies
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         
        >
          {FEATURED_JOBS.map((job, ) => (
            <div
              key={job.id}
              
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">{job.title}</CardTitle>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    {job.featured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">{job.location}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  {job.salary && (
                    <p className="text-gray-800 font-medium">Salary: {job.salary}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={job.applicationLink}>Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/jobs">View All Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;