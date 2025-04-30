import { Star } from "lucide-react";

type Testimonial = {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  };

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFusion',
      content: 'Working with this team has transformed our development process. The remote talent they connected us with integrated seamlessly into our workflow, delivering high-quality code on time and on budget.',
      rating: 5,
      avatar: '/api/placeholder/50/50',
    },
    {
      id: 't2',
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'GrowthLabs',
      content: 'We were skeptical about remote marketing talent, but this team changed our perspective completely. The specialists they found for us brought fresh ideas and executed flawlessly.',
      rating: 5,
      avatar: '/api/placeholder/50/50',
    },
    {
      id: 't3',
      name: 'Emma Rodriguez',
      position: 'Product Manager',
      company: 'InnovateNow',
      content: 'The UX designers we hired through this platform elevated our product to a new level. Our user satisfaction scores have increased by 37% since implementation.',
      rating: 4,
      avatar: '/api/placeholder/50/50',
    },
  ];
  

export const TestimonialsSection = () => {
    return (
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how our remote talent solutions have helped businesses around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };