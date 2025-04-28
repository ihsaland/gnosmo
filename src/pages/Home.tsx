import React from 'react';
import { motion } from 'framer-motion';
import gnosmoScene from '../assets/images/gnosmo_scene3.png';

const Home: React.FC = () => {
  return (
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
  );
};

export default Home; 