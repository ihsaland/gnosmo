import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheckIcon, DocumentTextIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Privacy: React.FC = () => {
  const canonicalUrl = 'https://gnosmo.com/#/privacy';

  return (
    <>
      <Helmet>
        <title>Privacy Policy | GNOSMO</title>
        <meta name="description" content="Read GNOSMO's Privacy Policy. Learn how we collect, use, and protect your personal information. Your privacy is important to us." />
        <meta name="keywords" content="GNOSMO privacy policy, data protection, privacy, personal information" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Privacy Policy | GNOSMO" />
        <meta property="og:description" content="Read GNOSMO's Privacy Policy. Learn how we collect, use, and protect your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
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
            <ShieldCheckIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-600">
            At GNOSMO, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase.
          </p>
        </motion.div>

        {/* Information We Collect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <DocumentTextIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <p className="text-gray-600">
                • Name and contact information<br />
                • Shipping and billing addresses<br />
                • Payment information<br />
                • Order history<br />
                • Email communications
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Automatically Collected Information</h3>
              <p className="text-gray-600">
                • Device information<br />
                • IP address<br />
                • Browser type<br />
                • Cookies and similar technologies
              </p>
            </div>
          </div>
        </motion.div>

        {/* How We Use Your Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <UserIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              We use your personal information to:<br />
              • Process and fulfill your orders<br />
              • Communicate with you about your orders<br />
              • Send you marketing communications (with your consent)<br />
              • Improve our website and services<br />
              • Prevent fraud and enhance security
            </p>
          </div>
        </motion.div>

        {/* Data Security */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <LockClosedIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information, including:<br />
              • Secure socket layer (SSL) technology<br />
              • Encryption of sensitive data<br />
              • Regular security assessments<br />
              • Access controls and authentication
            </p>
          </div>
        </motion.div>

        {/* Your Rights */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ShieldCheckIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              You have the right to:<br />
              • Access your personal information<br />
              • Correct inaccurate information<br />
              • Request deletion of your data<br />
              • Opt-out of marketing communications<br />
              • Withdraw consent at any time
            </p>
          </div>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <UserIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us:<br />
              • Email: privacy@gnosmo.com<br />
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Privacy; 