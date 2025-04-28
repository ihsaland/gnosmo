import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import hoodie7 from '../assets/images/hoodie7.png';
import hoodie9 from '../assets/images/hoodie9.png';
import t_shirt2 from '../assets/images/t_shirt2.png';
import t_shirt4 from '../assets/images/t_shirt4.png';

const PRODUCTS = [
  {
    id: '1',
    name: 'Premium Hoodie with Logo',
    price: 79.99,
    image: hoodie7,
    category: 'Hoodies'
  },
  {
    id: '2',
    name: 'Essential T-Shirt',
    price: 39.99,
    image: t_shirt4,
    category: 'T-Shirts'
  },
  {
    id: '3',
    name: 'Premium Hoodie',
    price: 79.99,
    image: hoodie9,
    category: 'Hoodies'
  },
  {
    id: '4',
    name: 'Essential T-Shirt with Logo',
    price: 39.99,
    image: t_shirt2,
    category: 'T-Shirts'
  }
];

const Shop: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Our Products
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <ProductCard
              product={product}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Shop; 