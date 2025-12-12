import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { TruckIcon, ArrowPathIcon, GlobeAltIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const ShippingReturns: React.FC = () => {
  const canonicalUrl = 'https://gnosmo.com/#/shipping-returns';

  return (
    <>
      <Helmet>
        <title>Shipping & Returns Policy | GNOSMO</title>
        <meta name="description" content="Learn about GNOSMO shipping and returns policy. Standard shipping 3-5 business days, 30-day return policy, international shipping available. Free returns for US customers." />
        <meta name="keywords" content="GNOSMO shipping, return policy, shipping information, international shipping, refund policy" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Shipping & Returns Policy | GNOSMO" />
        <meta property="og:description" content="Learn about GNOSMO shipping and returns policy. Standard shipping 3-5 business days, 30-day return policy." />
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
        <h1 className="text-4xl font-bold text-primary mb-4">Shipping & Returns</h1>
        <p className="text-gray-600">Everything you need to know about shipping and returns</p>
      </div>

      <div className="space-y-12">
        {/* Shipping Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <TruckIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Shipping Information</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Standard Shipping</h3>
              <p className="text-gray-600">
                • Standard shipping typically takes 3-5 business days<br />
                • Orders are processed within 1-2 business days<br />
                • Tracking information provided via email<br />
                • Shipping rates calculated at checkout
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-600">
                • Orders are processed Monday through Friday<br />
                • Orders placed after 2 PM EST will be processed the next business day<br />
                • Processing time does not include shipping time<br />
                • Holiday processing times may vary
              </p>
            </div>
          </div>
        </motion.div>

        {/* Return Policy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <ArrowPathIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Return Policy</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Returns & Exchanges</h3>
              <p className="text-gray-600">
                • 30-day return policy for unworn, unwashed items<br />
                • Original tags must be attached<br />
                • Sale items are final sale and cannot be returned
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How to Return</h3>
              <p className="text-gray-600">
                1. Contact our customer service to initiate a return<br />
                2. Pack your items securely in the original packaging<br />
                3. Include the return form with your package<br />
                4. Ship to our return address<br />
                5. Refund processed within 3-5 business days of receiving the return
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Refund Information</h3>
              <p className="text-gray-600">
                • Refunds are issued to the original payment method<br />
                • Shipping costs are non-refundable<br />
                • International returns may be subject to customs fees<br />
                • Refund processing time may vary by payment method
              </p>
            </div>
          </div>
        </motion.div>

        {/* International Shipping */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <GlobeAltIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">International Shipping</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">International Orders</h3>
              <p className="text-gray-600">
                • Available to most countries worldwide<br />
                • Shipping rates calculated at checkout<br />
                • Delivery times vary by destination<br />
                • Customs and import duties may apply<br />
                • International returns may be subject to additional fees
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Customs & Duties</h3>
              <p className="text-gray-600">
                • Customers are responsible for all customs fees and import duties<br />
                • These charges are not included in the order total<br />
                • Fees vary by country and are determined by local customs<br />
                • Contact your local customs office for more information
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex items-center mb-6">
            <QuestionMarkCircleIcon className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">Need Help?</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about shipping or returns, please contact our customer service team:<br />
              • Email: support@gnosmo.com<br />
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Need more information? <a href="/contact" className="text-primary hover:text-accent">Contact us</a> for assistance.
        </p>
      </div>
    </motion.div>
    </>
  );
};

export default ShippingReturns; 