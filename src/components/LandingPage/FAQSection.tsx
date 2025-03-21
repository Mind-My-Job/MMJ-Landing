"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
  {
    question: "How often are new jobs updated?",
    answer:
      "Jobs are updated in real-time as they are posted by employers. Our platform continuously syncs with job boards and company career pages to ensure you have access to the latest opportunities.",
  },
  {
    question:
      "Do I have the option to approve jobs before applications are sent?",
    answer:
      "Yes, you have full control over the application process. You can review and approve each job application before it's submitted to ensure it aligns with your preferences and career goals.",
  },
  {
    question: "Will I receive updates whenever a job is applied for?",
    answer:
      "Yes, you'll receive real-time notifications for all application activities. You can customize your notification preferences in your account settings.",
  },
  {
    question: "What is the purpose of the extension?",
    answer:
      "The extension streamlines your job search by automatically identifying relevant opportunities across multiple platforms and organizing them in one place for easy access and management.",
  },
  {
    question: "Is the job application process entirely run by AI?",
    answer:
      "No, while AI assists in matching you with relevant positions, the application process involves human oversight to ensure quality and accuracy. You maintain control over your applications.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "We currently operate in multiple countries across North America, Europe, and Asia Pacific regions. Check our coverage page for a detailed list of supported locations.",
  },
];

export function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-medium mb-2 block tag w-fit m-auto">
          FAQs
        </span>
        <h2 className="font-bold section-title my-5 bg-gradient-to-r from-blue-300 via-blue-600 to-indigo-800 text-2xl md:text-5xl">
          How can we help you?
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t border-slate-200 last:border-b"
          >
            <AccordionTrigger className="text-left text-base font-medium py-6 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
