import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { getFAQSchema, getBreadcrumbSchema } from '../utils/structuredData';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment gateway."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the United States. We also offer expedited shipping options (1-2 business days) for an additional fee. International shipping times vary by destination."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn, unwashed items with original tags attached. Returns are free for US customers. International returns are subject to shipping fees. Please contact our customer service for return instructions."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. International shipping rates and delivery times vary by country. You can view shipping costs at checkout before completing your purchase."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or through the carrier's website."
  },
  {
    question: "What if my item is out of stock?",
    answer: "If an item is out of stock, you can sign up for restock notifications on the product page. We'll email you when the item becomes available again."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout and include a personalized message with your gift."
  },
  {
    question: "How do I care for my clothing?",
    answer: "Care instructions are provided on the product label of each item. We recommend following these instructions to maintain the quality and longevity of your clothing. Most items can be machine washed on a gentle cycle and tumble dried on low heat."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const canonicalUrl = 'https://gnosmo.com/#/faq';
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://gnosmo.com/' },
    { name: 'FAQ', url: canonicalUrl },
  ]);

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | GNOSMO</title>
        <meta name="description" content="Find answers to common questions about GNOSMO products, shipping, returns, payment methods, and more. Get help with your order and learn about our premium hoodies and t-shirts." />
        <meta name="keywords" content="GNOSMO FAQ, shipping questions, return policy, payment methods, product questions, customer support" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | GNOSMO" />
        <meta property="og:description" content="Find answers to common questions about GNOSMO products, shipping, returns, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | GNOSMO" />
        <meta name="twitter:description" content="Find answers to common questions about GNOSMO products." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">Find answers to common questions about our products and services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-4"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Still have questions? <a href="/contact" className="text-primary hover:text-accent">Contact us</a> and we'll be happy to help!
        </p>
      </div>
    </motion.div>
    </>
  );
};

export default FAQ; 