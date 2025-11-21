import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Shop - Best Oversized Hoodies & Lightweight Summer Tees | GNOSMO</title>
        <meta name="description" content="Browse our collection of premium oversized hoodies and lightweight summer tees. Engineered for comfort and style. Available in multiple colors and sizes. Free shipping on orders over $50." />
        <meta name="keywords" content="best oversized hoodie, lightweight summer tees, shop hoodies, buy t-shirts, premium hoodies, comfortable t-shirts, oversized hoodie, summer t-shirts, engineered clothing" />
        <meta property="og:title" content="Shop - Best Oversized Hoodies & Lightweight Summer Tees | GNOSMO" />
        <meta property="og:description" content="Discover our collection of premium hoodies and lightweight summer tees. Engineered for growth, built for comfort." />
      </Helmet>
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
          className="text-4xl font-bold text-primary mb-4 text-center"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Discover our collection of premium oversized hoodies and lightweight summer tees. 
          Each piece is engineered with precision, built with premium materials for ultimate comfort and durability. 
        </motion.p>
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
    </>
  );
};

export default Shop; 