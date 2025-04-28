import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import SocialShare from '../components/SocialShare';

// Import all product images
import hoodie7 from '../assets/images/hoodie7.png';
import hoodie9 from '../assets/images/hoodie9.png';
import t_shirt2 from '../assets/images/t_shirt2.png';
import t_shirt4 from '../assets/images/t_shirt4.png';

// Product data
const PRODUCTS = [
  {
    id: '1',
    name: 'Premium Hoodie with Logo',
    price: 79.99,
    image: hoodie7,
    description: 'A timeless hoodie crafted from premium cotton blend. Features a comfortable fit, kangaroo pocket, and adjustable drawstring hood. Perfect for casual outings or lounging at home.',
    details: [
      'Premium cotton blend fabric',
      'Kangaroo pocket',
      'Adjustable drawstring hood',
      'Ribbed cuffs and hem',
      'Available in multiple sizes'
    ],
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Essential T-Shirt',
    price: 39.99,
    image: t_shirt4,
    description: 'A versatile t-shirt made from 100% organic cotton. Features a classic fit, reinforced seams, and a comfortable crew neck. The perfect foundation for any outfit.',
    details: [
      '100% organic cotton',
      'Classic fit',
      'Reinforced seams',
      'Crew neck design',
      'Available in multiple sizes'
    ],
    colors: ['White', 'Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Premium Hoodie',
    price: 79.99,
    image: hoodie9,
    description: 'A premium hoodie with enhanced comfort and durability. Perfect for those who value quality and style.',
    details: [
      'Premium materials',
      'Enhanced comfort',
      'Durability',
      'Available in multiple sizes'
    ],
    colors: ['Black', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Essential T-Shirt with Logo',
    price: 39.99,
    image: t_shirt2,
    description: 'A timeless t-shirt design that never goes out of style. Made from soft, breathable fabric.',
    details: [
      'Soft',
      'Breathable',
      'Timeless design',
      'Available in multiple sizes'
    ],
    colors: ['White', 'Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-primary">Product not found</h1>
        <button
          onClick={() => navigate('/shop')}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select both color and size');
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize
    });
    toast.success('Added to cart!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-square"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Color</h2>
            <div className="flex space-x-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-md border-2 ${
                    selectedColor === color
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-gray-300 hover:border-accent'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Size</h2>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border-2 ${
                    selectedSize === size
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-gray-300 hover:border-accent'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <SocialShare
              productName={product.name}
              productUrl={`/product/${product.id}`}
              productImage={product.image}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetail; 