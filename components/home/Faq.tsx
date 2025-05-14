"use client";

import { ModernFAQ } from "../ui/faq-style";


export default function FAQPage() {
  const faqItems = [
    {
      question: "How does your AI-powered hiring platform improve the recruitment process?",
      answer: "Our platform revolutionizes remote hiring through three key innovations:\n\n1. Advanced AI matching technology that delivers 95% better candidate-job fit compared to traditional methods\n\n2. Automated screening that reduces time-to-hire by 71% while eliminating unconscious bias\n\n3. Remote-first assessment tools designed to evaluate both technical skills and cultural fit in a distributed work environment",
      category: "Platform"
    },
    {
      question: "How secure is candidate data on your platform?",
      answer: "We take candidate privacy and data security seriously. Our platform features end-to-end encryption, anonymized candidate profiles for unbiased initial screening, and compliance with global standards including SOC 2 Type II, GDPR, and local employment laws. Candidate data is only shared with employers when explicitly authorized by the candidate.",
      category: "Security"
    },
    {
      question: "Can I integrate your platform with my existing HR and ATS tools?",
      answer: "Absolutely. Our platform seamlessly integrates with popular ATS and HR systems including Workday, BambooHR, Greenhouse, Lever, SAP SuccessFactors, and over 50 other workforce tools. We also provide API access for custom integrations and can develop tailored connectors for enterprise clients with specific requirements.",
      category: "Integration"
    },
    {
      question: "What pricing plans do you offer for employers?",
      answer: "We offer flexible pricing to accommodate companies of all sizes:\n\n• Startup: $199/month for up to 5 active job postings\n• Growth: $499/month for up to 15 active job postings\n• Enterprise: Custom pricing for unlimited job postings and advanced features\n\nAll plans include core AI matching and screening capabilities, with premium features available at higher tiers. We offer a 14-day free trial for new clients.",
      category: "Pricing"
    },
    {
      question: "How quickly can we implement your remote hiring solution?",
      answer: "Most companies are up and running within 1-2 weeks. Initial platform setup takes just 24-48 hours, followed by AI calibration based on your company culture and role requirements. Our Growth and Enterprise plans include dedicated implementation specialists who will configure custom assessment workflows and help you optimize job descriptions for better AI matching results.",
      category: "Implementation"
    },
    {
      question: "What kind of support do you provide during the hiring process?",
      answer: "We offer multi-tiered support based on your plan:\n\n• Startup: Email support with 24-hour response time and access to our recruiter knowledge base\n• Growth: Email and chat support with 4-hour response time, plus scheduled strategy calls\n• Enterprise: 24/7 priority support with a dedicated customer success manager and regular optimization consultations\n\nAll clients receive access to our hiring webinars and best practices community.",
      category: "Support"
    },
    {
      question: "Is there a long-term contract or can I use the platform as needed?",
      answer: "We offer both monthly and annual subscription options with no long-term commitment required. Monthly plans can be canceled anytime before the next billing cycle. Annual plans provide a 20% discount and can be canceled for future renewal. For seasonal hiring needs, we also offer flexible credit packages that don't expire for 12 months.",
      category: "Pricing"
    },
    {
      question: "What happens to candidate data after a hiring cycle ends?",
      answer: "Candidate data management follows strict privacy protocols. Active candidates remain in your talent pool for future matching unless they request removal. You can maintain a private talent pool for 12 months after positions are filled. All candidate data is automatically anonymized after 18 months if no hiring activity occurs, and candidates can request complete data deletion at any time.",
      category: "Security"
    },
    {
      question: "Do you offer custom assessment workflows for specialized roles?",
      answer: "Yes, we specialize in creating role-specific remote assessment workflows. Our platform includes over 200 pre-configured technical assessments and behavioral evaluations. Enterprise clients receive custom assessment design services from our I/O psychology team who can develop specialized evaluations for unique roles, including simulated work environments, asynchronous video interviews, and role-specific challenges.",
      category: "Implementation"
    },
    {
      question: "How does your platform stay current with remote hiring trends and AI advancement?",
      answer: "We continuously improve our platform through:\n\n• Bi-weekly algorithm updates to enhance matching accuracy\n• Monthly feature releases based on client feedback and hiring metrics\n• Quarterly major updates including new assessment types and candidate engagement tools\n\nOur AI models are regularly retrained on the latest successful hiring outcomes while maintaining strict data privacy standards. All updates are automatically deployed with zero downtime.",
      category: "Platform"
    }
  ];

  const categories = ["Platform", "Security", "Integration", "Pricing", "Implementation", "Support"];

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