import React from "react";
import { Metadata } from "next";
//import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | RemoteAIJobs",
  description:
    "Learn about RemoteAIJobs - the premier platform for finding remote AI jobs",
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in tech recruitment and AI. Previously worked at leading tech companies before founding RemoteAIJobs to connect talented professionals with remote opportunities.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "member-2",
    name: "Jamie Wilson",
    role: "Head of Talent Acquisition",
    bio: "With a background in HR and talent sourcing, Jamie leads our efforts to find the best AI jobs and connect companies with top talent in the space.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "member-3",
    name: "Taylor Reed",
    role: "Tech Lead",
    bio: "Taylor brings extensive experience in AI and machine learning, helping to vet opportunities and ensure our platform connects the right talent with the right positions.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "milestone-1",
    year: "2022",
    title: "Our Beginning",
    description:
      "RemoteAIJobs was founded with a mission to connect AI professionals with quality remote opportunities.",
  },
  {
    id: "milestone-2",
    year: "2023",
    title: "1,000+ Placements",
    description:
      "We celebrated helping over 1,000 professionals find remote AI jobs across various industries.",
  },
  {
    id: "milestone-3",
    year: "2024",
    title: "Global Expansion",
    description:
      "We expanded our reach to serve job seekers and companies from over 50 countries worldwide.",
  },
  {
    id: "milestone-4",
    year: "2025",
    title: "Premium Services",
    description:
      "Launched our suite of premium services to help professionals advance their remote AI careers.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About RemoteAIJobs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to connect AI talent with the best remote
              opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At RemoteAIJobs, we believe that talent shouldn't be limited by
                geography. Our platform connects AI professionals with remote
                opportunities that allow them to work from anywhere while
                advancing their careers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're dedicated to bridging the gap between companies seeking
                specialized AI talent and professionals looking for flexible,
                remote work arrangements.
              </p>
              <Button size="lg" asChild>
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since our founding, we've been on a mission to transform how AI
              professionals find remote work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((milestone, ) => (
              <div key={milestone.id}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <span className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind RemoteAIJobs dedicated to your
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, ) => (
              <div key={member.id}>
                <Card className="h-full flex flex-col">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your Next Remote AI Job?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of professionals who've found their dream remote
              positions through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
