'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";

// Reusable Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Contact Info Items
const contactInfo = [
  {
    id: "email",
    icon: <FiMail className="text-xl" />,
    title: "Email",
    value: "hello@remotenext.com",
  },
  {
    id: "phone",
    icon: <FiPhone className="text-xl" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    id: "address",
    icon: <FiMapPin className="text-xl" />,
    title: "Address",
    value: "123 AI Boulevard, San Francisco, CA 94105",
  },
];

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Fixed component name to start with uppercase letter
const Page = () => {
  // Form state
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Replace with your Formspree endpoint when integrating
      const formEndpoint = "https://formspree.io/f/your-form-id";
      
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      // Changed variable name to _err and using underscore prefix to indicate it's unused
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };



  return (
    <main className="bg-gradient-to-b min-h-screen">
      {/* Hero Section with subtle orange accent */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut"
          }
        }}
      >
        {/* Subtle background elements with orange-yellow accent */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
          {/* Added subtle orange accent */}
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h1 
              variants={titleVariants}
              className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
            >
              Get in <span className="text-amber-500">Touch</span>
            </motion.h1>
            <motion.p 
              variants={titleVariants}
              className="text-xl text-neutral-600 mb-8"
            >
              Have questions about RemoteNext? We&apos;re here to help you find your next remote AI opportunity.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-16 my-8 rounded-2xl bg-gradient-to-b from-neutral-300 to-neutral-400">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Side */}
            <motion.div 
              className="lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-neutral-800 mb-8">
                Contact <span className="text-amber-500">Information</span>
              </motion.h2>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-full bg-neutral-200 text-amber-500 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-700">{item.title}</h3>
                      <p className="text-neutral-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="mt-12">
                <Card className="bg-neutral-200 border-none hover:shadow-md hover:shadow-amber-100/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Office <span className="text-amber-500">Hours</span>
                    </h3>
                    <p className="text-neutral-600 mb-1">Monday - Friday: 9am - 5pm PST</p>
                    <p className="text-neutral-600">Saturday - Sunday: Closed</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                      Send us a <span className="text-amber-500">message</span>
                    </h2>
                    
                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    
                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200"
                            {...register("name", { required: "Name is required" })}
                            
                          />
                          {errors.name && (
                            <p className="text-sm text-red-600">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200"
                            {...register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                            })}
                           
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200"
                          {...register("phone")}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                          className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200"
                          {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isSubmitting}
                          className="group w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white transition-colors duration-300"
                        >
                          <span className="flex items-center gap-2">
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && (
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ 
                                  repeat: Infinity, 
                                  duration: 1.5,
                                  ease: "easeInOut"
                                }}
                              >
                                <FiArrowUpRight />
                              </motion.span>
                            )}
                          </span>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 my-8 rounded-2xl bg-gradient-to-b from-neutral-300 to-neutral-400">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-3xl font-bold text-neutral-800 mb-4"
            >
              Frequently Asked <span className="text-amber-500">Questions</span>
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-neutral-600"
            >
              Find quick answers to common questions about our services
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* FAQ Items with subtle hover effects */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg hover:shadow-amber-100/40 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-amber-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3 group-hover:text-amber-500">
                    How quickly will I hear back after contacting you?
                  </h3>
                  <p className="text-neutral-600">
                    We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg hover:shadow-amber-100/40 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-amber-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    Do you offer phone consultations?
                  </h3>
                  <p className="text-neutral-600">
                    Yes! After submitting your initial inquiry, we can schedule a phone or video consultation to discuss your needs in more detail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg hover:shadow-amber-100/40 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-amber-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    Can I visit your office in person?
                  </h3>
                  <p className="text-neutral-600">
                    We operate primarily remotely, but can arrange in-person meetings at our San Francisco office by appointment only.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg hover:shadow-amber-100/40 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-amber-400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    How can I join your talent network?
                  </h3>
                  <p className="text-neutral-600">
                    You can sign up on our website and create a profile. Our team will review your credentials and connect you with relevant opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Added CTA with accent color */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-lg transition-colors duration-300"
            >
              <span className="flex items-center gap-2 text-lg">
                Browse All FAQs
                <FiArrowUpRight />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )}

export default Page