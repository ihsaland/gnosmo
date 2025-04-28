import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ScaleIcon, ExclamationTriangleIcon, UserIcon } from '@heroicons/react/24/outline';

const Terms: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Terms and Conditions</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-12">
        {/* Introduction */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <DocumentTextIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-600">
            Welcome to GNOSMO. By accessing and using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before making a purchase.
          </p>
        </motion.div>

        {/* Orders and Payments */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ScaleIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Orders and Payments</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • All orders are subject to availability<br />
              • Prices are subject to change without notice<br />
              • Payment must be received before order processing<br />
              • We accept major credit cards and PayPal<br />
              • Orders may be cancelled within 24 hours of placement
            </p>
          </div>
        </motion.div>

        {/* Product Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ExclamationTriangleIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Product Information</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • Product images are for illustrative purposes only<br />
              • Colors may vary slightly from what is displayed<br />
              • Sizes are approximate and may vary by manufacturer<br />
              • We are not responsible for typographical errors<br />
              • Product availability is not guaranteed
            </p>
          </div>
        </motion.div>

        {/* Returns and Refunds */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ScaleIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Returns and Refunds</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • Returns must be made within 30 days of purchase<br />
              • Items must be unworn and in original condition<br />
              • Original tags must be attached<br />
              • Refunds will be issued to the original payment method<br />
              • Shipping costs are non-refundable
            </p>
          </div>
        </motion.div>

        {/* Intellectual Property */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <DocumentTextIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Intellectual Property</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • All content on this website is our property<br />
              • Unauthorized use is prohibited<br />
              • Trademarks and logos are protected<br />
              • Content may not be copied or reproduced<br />
              • Violations may result in legal action
            </p>
          </div>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ExclamationTriangleIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • We are not liable for indirect damages<br />
              • Maximum liability is limited to purchase price<br />
              • We are not responsible for third-party actions<br />
              • Force majeure events are excluded<br />
              • Some jurisdictions may not allow these limitations
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <UserIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              For questions about these Terms and Conditions, please contact us:<br />
              • Email: legal@gnosmo.com<br />
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Terms; 