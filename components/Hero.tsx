import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-gray-50"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Connect with top remote talent for your business
          </h1>
          <p className="text-lg text-gray-700">
            We help companies find exceptional remote professionals across
            development, design, marketing, and support roles to accelerate
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition flex items-center justify-center">
              Get Started
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600 font-medium transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-10 transform rotate-3"></div>
          <img
            src="/api/placeholder/600/400"
            alt="Remote team collaboration"
            className="relative rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
