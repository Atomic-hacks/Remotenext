import { ArrowRight,Briefcase,Users,Star, MessageSquare } from "lucide-react";
import { JSX } from "react";

type JobCategory = {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
  };

  const jobCategories: JobCategory[] = [
    {
      id: 'dev',
      title: 'Software Development',
      icon: <Briefcase className="h-10 w-10 text-blue-500" />,
      description: 'Full-stack, front-end, back-end, mobile app development and more.'
    },
    {
      id: 'design',
      title: 'Design & Creative',
      icon: <Users className="h-10 w-10 text-green-500" />,
      description: 'UI/UX, graphic design, brand identity, and visual assets creation.'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <Star className="h-10 w-10 text-yellow-500" />,
      description: 'SEO, content marketing, social media, and PPC campaigns.'
    },
    {
      id: 'support',
      title: 'Customer Support',
      icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
      description: '24/7 customer service, technical support, and client management.'
    },
  ];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Remote Staffing Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We connect businesses with pre-vetted remote professionals across
            multiple disciplines to help you scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition group"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-700 mb-4">{category.description}</p>
              <a
                href={`#category-${category.id}`}
                className="text-blue-600 font-medium inline-flex items-center group-hover:underline"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
