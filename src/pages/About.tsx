import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - GNOSMO | Engineered for Growth</title>
        <meta name="description" content="Learn about GNOSMO - where software engineering principles meet premium clothing. Built with precision, designed for growth." />
        <meta name="keywords" content="about GNOSMO, software engineering clothing, premium hoodies, engineered fashion, growth mindset clothing" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">About GNOSMO</h1>
          <p className="text-xl text-gray-600">Engineered for Growth. Built for Comfort.</p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GNOSMO was born from a simple idea: what if we applied the same principles we use to build great software 
              to create great clothing? As software engineers, we understand the importance of iteration, quality, and user experience. 
              We believe these principles shouldn't be limited to code.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every piece we create is engineered with intention—from the selection of premium materials to the precision 
              of each stitch. We build our clothing the same way we build software: with attention to detail, focus on quality, 
              and a commitment to continuous improvement.
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Our Philosophy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Grow Your Roots</h3>
                <p className="text-gray-700 leading-relaxed">
                  Just like a strong codebase needs solid foundations, personal growth requires strong roots. 
                  We design clothing that supports you as you build your foundation and grow into who you're meant to be.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Wear Your Future</h3>
                <p className="text-gray-700 leading-relaxed">
                  In software, we're always building for the future. We apply that same forward-thinking approach to our clothing. 
                  Each piece is designed not just for today, but for the person you're becoming.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Engineered for Growth</h3>
                <p className="text-gray-700 leading-relaxed">
                  We approach clothing design with the same rigor we apply to software engineering: precision, quality, 
                  and a focus on the user experience. Every detail matters, from fabric selection to fit engineering.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">What Makes Us Different</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Precision Engineering:</strong> We apply software engineering principles to clothing design—every detail is intentional, every choice is deliberate.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Quality First:</strong> Just like we wouldn't ship buggy code, we won't ship subpar clothing. Quality is non-negotiable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Iterative Design:</strong> We continuously refine our products based on feedback, always improving, always growing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>User-Focused:</strong> Comfort and functionality aren't afterthoughts—they're core requirements, just like in great software.</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Join the Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're building the next big app or building the next version of yourself, 
              we're here to support your growth. Every piece of GNOSMO clothing is designed to be part of your journey.
            </p>
            <p className="text-lg font-semibold text-primary">
              Grow Your Roots. Wear Your Future.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default About;

