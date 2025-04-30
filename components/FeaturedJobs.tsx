import { Briefcase, MapPin } from "lucide-react";

type FeaturedJob = {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    category: string;
    salary: string;
    description: string;
    posted: string;
  };

const featuredJobs: FeaturedJob[] = [
    {
      id: 'j1',
      title: 'Senior React Developer',
      company: 'InnovateTech',
      location: 'Remote - Global',
      type: 'Full-time',
      category: 'Software Development',
      salary: '$90,000 - $120,000',
      description: 'Join our team building next-generation web applications with React, TypeScript and Node.js.',
      posted: '2 days ago',
    },
    {
      id: 'j2',
      title: 'UX/UI Designer',
      company: 'DesignFusion',
      location: 'Remote - US/Europe',
      type: 'Contract',
      category: 'Design & Creative',
      salary: '$70 - $90/hour',
      description: 'Create beautiful, intuitive interfaces for our enterprise software platform.',
      posted: '1 week ago',
    },
    {
      id: 'j3',
      title: 'Content Marketing Specialist',
      company: 'GrowthLabs',
      location: 'Remote - APAC',
      type: 'Part-time',
      category: 'Digital Marketing',
      salary: '$4,000 - $6,000/month',
      description: 'Develop and execute content strategies that drive engagement and conversions.',
      posted: '3 days ago',
    },
  ];
  

export const FeaturedJobsSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Remote Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our latest remote job openings with top companies around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-700">{job.company}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{job.category}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium text-gray-900">{job.salary}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  <button className="text-blue-600 font-medium hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600 font-medium transition">
              View All Opportunities
            </button>
          </div>
        </div>
      </section>
    );
  };
  