import React from "react";
import Link from "next/link";
import { Job } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
//import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div
     
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
        <CardContent className="flex-grow space-y-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Briefcase className="h-4 w-4 mr-1" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
          </div>
          <p className="text-gray-600">{job.description}</p>
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
  );
};

export default JobCard