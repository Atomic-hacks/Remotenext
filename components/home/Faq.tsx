"use client";

import { ModernFAQ } from "../ui/faq-style";


export default function FAQPage() {
  const faqItems = [
    {
      question: "What makes your product different from competitors?",
      answer: "Our product stands out through three key differentiators:\n\n1. Advanced AI technology that delivers 99.8% accuracy compared to the industry standard of 95%\n\n2. Intuitive user interface designed with extensive user research and testing\n\n3. Enterprise-grade security with SOC 2 Type II and GDPR compliance built-in from day one",
      category: "Product"
    },
    {
      question: "How secure is my data on your platform?",
      answer: "Security is our top priority. We implement end-to-end encryption, regular security audits, and comply with all major security standards including SOC 2 Type II, GDPR, HIPAA, and ISO 27001. All data is stored in redundant, geographically distributed data centers with 24/7 monitoring and automatic threat detection systems.",
      category: "Security"
    },
    {
      question: "Can I integrate your solution with my existing tools?",
      answer: "Absolutely. Our platform offers robust API access and native integrations with over 200 popular business tools including Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, Jira, Asana, and many more. Our dedicated integration team can also develop custom connectors for enterprise clients with specific needs.",
      category: "Integration"
    },
    {
      question: "What pricing plans do you offer?",
      answer: "We offer flexible pricing to accommodate businesses of all sizes:\n\n• Starter: $29/month for individuals and small teams\n• Professional: $99/month for growing businesses\n• Enterprise: Custom pricing for large organizations with advanced needs\n\nAll plans include core features with scaling capabilities, and we offer a 30-day free trial with no credit card required.",
      category: "Pricing"
    },
    {
      question: "How quickly can we implement your solution?",
      answer: "Most customers complete implementation within 2-4 weeks, depending on the complexity of your requirements. Our Professional and Enterprise plans include dedicated onboarding specialists who will guide you through the entire process. We also provide comprehensive documentation, video tutorials, and regular training webinars to accelerate adoption across your organization.",
      category: "Implementation"
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, all plans include customer support. The level of support varies by plan:\n\n• Starter: Email support with 24-hour response time and access to our knowledge base\n• Professional: Email and chat support with 4-hour response time, plus phone support during business hours\n• Enterprise: 24/7 priority support via email, chat, and phone with a dedicated customer success manager",
      category: "Support"
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Monthly plans can be canceled before the next billing cycle. Annual plans can be canceled for future renewal but are not eligible for partial refunds unless specified in your enterprise agreement.",
      category: "Pricing"
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Upon cancellation, you'll have 30 days to export your data in standard formats. After this period, your data will be scheduled for deletion from our active systems. Backups containing your data will be purged according to our regular backup rotation policy, typically within 90 days of deletion from active systems. Enterprise customers may negotiate custom data retention policies.",
      category: "Security"
    },
    {
      question: "Do you offer custom development for specific requirements?",
      answer: "Yes, we offer custom development services for Enterprise customers with specific needs. Our professional services team will work with you to understand your requirements, create a detailed implementation plan, and develop custom solutions that integrate seamlessly with our core platform. Custom projects typically start at $10,000 depending on scope and complexity.",
      category: "Implementation"
    },
    {
      question: "How do you handle updates and new features?",
      answer: "We follow a continuous improvement model with regular updates:\n\n• Minor updates and bug fixes: Weekly release cycle with no service disruption\n• Feature enhancements: Monthly releases with advance notification\n• Major platform updates: Quarterly releases with detailed changelogs, webinar demonstrations, and optional beta testing program\n\nAll updates are included in your subscription at no additional cost.",
      category: "Product"
    }
  ];

  const categories = ["Product", "Security", "Integration", "Pricing", "Implementation", "Support"];

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <ModernFAQ
        items={faqItems}
        columns={2}
        categories={categories}
      />
    </div>
  );
}