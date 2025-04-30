type TeamMember = {
    id: string;
    name: string;
    position: string;
    bio: string;
    avatar: string;
  };

  const teamMembers: TeamMember[] = [
    {
      id: 'm1',
      name: 'David Park',
      position: 'Founder & CEO',
      bio: 'With 15+ years in remote work management, David founded the company to bridge the gap between global talent and opportunities.',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 'm2',
      name: 'Alicia Martinez',
      position: 'Talent Acquisition Lead',
      bio: 'Alicia has matched over 500 professionals with their ideal remote positions, with a 96% long-term retention rate.',
      avatar: '/api/placeholder/100/100',
    },
    {
      id: 'm3',
      name: 'Robert Kumar',
      position: 'Client Success Manager',
      bio: 'Robert ensures every client partnership thrives through personalized support and strategic guidance.',
      avatar: '/api/placeholder/100/100',
    },
  ];
  

export const AboutSection = () => {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About RemoteConnect</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're on a mission to connect businesses with exceptional remote talent, 
              enabling growth without geographical limitations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2019, RemoteConnect emerged from a vision to break down geographical barriers 
                in professional talent acquisition. We noticed a disconnect between companies seeking 
                specialized skills and professionals looking for flexible work arrangements.
              </p>
              <p className="text-gray-700 mb-4">
                Since then, we've helped over 500 companies find the perfect remote talent match, 
                enabling businesses to scale efficiently while providing opportunities for professionals worldwide.
              </p>
              <p className="text-gray-700">
                Our rigorous vetting process ensures only the top 3% of applicants join our talent pool, 
                guaranteeing quality and expertise for every client partnership.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-10 transform -rotate-2"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Our team" 
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition text-center"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="h-24 w-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };