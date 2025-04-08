
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollObserver from './ScrollObserver';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  // Ensure items is not undefined before mapping
  const faqItems = items || [];
  
  return (
    <ScrollObserver className="w-full max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-b border-interaj-100 py-2"
          >
            <AccordionTrigger className="text-left font-medium text-interaj-800 hover:text-interaj-600 transition-colors">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollObserver>
  );
};

export default FAQ;
