import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { trackFormSubmission, trackUserInteraction } from '../utils/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);

  useEffect(() => {
    // Initialize EmailJS and verify configuration
    try {
      emailjs.init('XuFlx-AyeuysOXPbe');
      setIsEmailJSReady(true);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
      toast.error('Email service configuration error. Please contact support@gnosmo.com directly.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isEmailJSReady) {
      toast.error('Email service is not ready. Please try again later or contact support@gnosmo.com directly.');
      trackUserInteraction('Contact Form Error', 'Email service not ready');
      return;
    }

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      trackUserInteraction('Contact Form Error', 'Empty fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      trackUserInteraction('Contact Form Error', 'Invalid email');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Attempting to send email...');
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: 'support@gnosmo.com'
      };

      console.log('Template params:', templateParams);
      console.log('Using template ID: template_5isogpg');
      
      const result = await emailjs.send(
        'service_ekx1572',
        'template_5isogpg',
        templateParams,
        {
          publicKey: 'XuFlx-AyeuysOXPbe'
        }
      );

      console.log('EmailJS response:', result);
      
      if (result.status === 200) {
        toast.success('Message sent successfully!');
        trackFormSubmission('Contact Form');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error: any) {
      console.error('Detailed error:', error);
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`;
      } else {
        errorMessage += 'Please try again or contact support@gnosmo.com directly.';
      }
      
      toast.error(errorMessage);
      trackUserInteraction('Contact Form Error', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-gray-600">Have a question? We'd love to hear from you.</p>
      </div>

      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>

      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
        <p className="text-gray-600">support@gnosmo.com</p>
      </div>
    </motion.div>
  );
};

export default Contact; 