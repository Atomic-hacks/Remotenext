import React from "react";
import { Metadata } from "next";
//import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "Testimonials | RemoteAIJobs",
  description: "See what our users say about RemoteAIJobs - success stories and experiences",
};

// Additional testimonials for the testimonials page
const EXTENDED_TESTIMONIALS: Testimonial[] = [
  ...TESTIMONIALS,
  {
    id: "testimonial-4",
    name: "David Park",
    position: "AI Engineer",
    company: "NeuralSys",
    quote: "The platform's focus on AI-specific remote roles helped me find a position that perfectly matched my skills. I appreciate how seamless the application process was.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-5",
    name: "Lisa Thompson",
    position: "Machine Learning Specialist",
    company: "AlgoLearn",
    quote: "After struggling to find specialized remote work in my field, RemoteAIJobs connected me with multiple opportunities. Now I have a job that allows me flexibility while working on cutting-edge AI projects.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-6",
    name: "Robert Chen",
    position: "Virtual Assistant Team Lead",
    company: "AssistAI",
    quote: "I started as a remote virtual assistant and found all my opportunities through this platform. Today, I lead a team of remote assistants. This site changed my career trajectory!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-7",
    name: "Sofia Martinez",
    position: "Data Labeling Coordinator",
    company: "DataPrecision",
    quote: "The job listings were detailed and accurate, which made it easy to find positions that matched my experience. Within two weeks of signing up, I secured a fantastic remote role.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-8",
    name: "James Wilson",
    position: "AI Trainer",
    company: "CogniLearn",
    quote: "RemoteAIJobs gave me access to opportunities I wouldn't have found elsewhere. The premium services were well worth the investment and helped me land my dream job.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-9",
    name: "Priya Sharma",
    position: "Content Moderation Supervisor",
    company: "SafeWeb",
    quote: "I started with a basic content moderation role I found on this platform, and within a year, I was promoted to supervisor. The quality of companies on this site is outstanding.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

// Featured success stories with more details
interface SuccessStory {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  story: string;
  results: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    name: "Michael Chen",
    position: "Data Labeling Specialist",
    company: "DataPro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    story: "After losing my in-office job during the pandemic, I was struggling to find remote work that utilized my skills in data organization and classification. I discovered RemoteAIJobs through a colleague and applied to several data labeling positions.",
    results: "Within just two weeks, I received multiple offers and was able to choose a position that offered 30% higher pay than my previous job, with the flexibility to work from anywhere. The detailed job descriptions helped me find exactly what I was looking for."
  },
  {
    id: "story-2",
    name: "Sarah Johnson",
    position: "AI Trainer",
    company: "TechInnovate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    story: "With a background in linguistics and natural language processing, I wanted to work on cutting-edge AI projects while having the flexibility to travel. I signed up for RemoteAIJobs' premium membership to access exclusive opportunities.",
    results: "The platform's specialized focus on AI roles connected me with a position training conversational AI models at a leading tech company. I've been able to advance my career while working from three different countries in the past year."
  },
  {
    id: "story-3",
    name: "Emily Rodriguez",
    position: "Content Moderator",
    company: "SafeSpace",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    story: "As a parent of two young children, I needed flexible work that would accommodate my family responsibilities. Traditional jobs weren't offering the work-life balance I needed, so I turned to RemoteAIJobs to find remote content moderation opportunities.",
    results: "I found a part-time position that allowed me to set my own hours while earning a competitive wage. The job has since evolved into a full-time role with leadership responsibilities, all while maintaining the flexibility I need for my family."
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div
            className="text-center max-w-3xl mx-auto"
            
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear from professionals who found their dream remote AI jobs through our platform
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Success Stories</h2>
          
          {SUCCESS_STORIES.map((story, ) => (
            <div
              key={story.id}
              className="mb-16 last:mb-0"
              
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                  <p className="text-primary font-medium mb-4">{story.position} at {story.company}</p>
                  <div className="space-y-4">
                    <p className="text-gray-600">{story.story}</p>
                    <p className="text-gray-800 font-medium">{story.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-12"
           
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - here&apos;s what professionals using our platform have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED_TESTIMONIALS.map((testimonial, ) => (
              <div
                key={testimonial.id}
               
              >
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-gray-600 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className="text-center max-w-3xl mx-auto"
           
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of professionals who&apos;ve transformed their careers with remote AI jobs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Create Your Profile</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;