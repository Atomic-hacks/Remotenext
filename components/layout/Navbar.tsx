import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const Navbar: React.FC = () => {
  return (
    <header
      className="w-full py-4 px-6 bg-white border-b border-gray-100"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-gray-900">RemoteAIJobs</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/jobs" className="text-gray-600 hover:text-gray-900 transition-colors">
            Jobs
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
