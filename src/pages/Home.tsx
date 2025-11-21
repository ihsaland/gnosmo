import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import gnosmoScene from '../assets/images/gnosmo_scene3.png';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees</title>
        <meta name="description" content="Discover premium oversized hoodies and lightweight summer tees at GNOSMO. Engineered for comfort, built for growth. Premium quality clothing designed with intention." />
        <meta name="keywords" content="best oversized hoodie, lightweight summer tees, premium hoodies, comfortable t-shirts, oversized hoodie, summer t-shirts, casual wear, streetwear, engineered clothing" />
        <meta property="og:title" content="GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees" />
        <meta property="og:description" content="Shop premium oversized hoodies and lightweight summer tees. Engineered for comfort, built for growth." />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${gnosmoScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Hidden SEO content for search engines */}
      <div className="sr-only">
        <h1>GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees</h1>
        <p>Welcome to GNOSMO, your destination for premium oversized hoodies and lightweight summer tees. Our clothing is engineered with precision, built with quality materials for ultimate comfort and style. Whether you're looking for the perfect oversized hoodie or lightweight summer tees for warm weather, we craft each piece with intention and attention to detail.</p>
      </div>
    </>
  );
};

export default Home; 