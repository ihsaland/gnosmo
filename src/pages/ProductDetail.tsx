import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import SocialShare from '../components/SocialShare';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Import all product images
import hoodie7_black from '../assets/images/hoodie7_black.png';
import hoodie7_navy from '../assets/images/hoodie7_navy.png';
import hoodie7_gray from '../assets/images/hoodie7_gray.png';
import hoodie9_black from '../assets/images/hoodie9_black.png';
import hoodie9_navy from '../assets/images/hoodie9_navy.png';
import hoodie9_gray from '../assets/images/hoodie9_gray.png';
import t_shirt2_white from '../assets/images/t_shirt2_white.png';
import t_shirt2_black from '../assets/images/t_shirt2_black.png';
import t_shirt2_gray from '../assets/images/t_shirt2_gray.png';
import t_shirt4_white from '../assets/images/t_shirt4_white.png';
import t_shirt4_black from '../assets/images/t_shirt4_black.png';
import t_shirt4_gray from '../assets/images/t_shirt4_gray.png';

// Product data
const PRODUCTS = [
  {
    id: '1',
    name: 'Premium Hoodie with Logo',
    price: 79.99,
    description: 'A timeless hoodie crafted from premium cotton blend. Features a comfortable fit, kangaroo pocket, and adjustable drawstring hood. Perfect for casual outings or lounging at home.',
    details: [
      'Premium cotton blend fabric',
      'Kangaroo pocket',
      'Adjustable drawstring hood',
      'Ribbed cuffs and hem',
      'Available in multiple sizes'
    ],
    colors: [
      { name: 'Black', image: hoodie7_black },
      { name: 'Navy', image: hoodie7_navy },
      { name: 'Gray', image: hoodie7_gray }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Essential T-Shirt',
    price: 39.99,
    description: 'A versatile t-shirt made from 100% organic cotton. Features a classic fit, reinforced seams, and a comfortable crew neck. The perfect foundation for any outfit.',
    details: [
      '100% organic cotton',
      'Classic fit',
      'Reinforced seams',
      'Crew neck design',
      'Available in multiple sizes'
    ],
    colors: [
      { name: 'White', image: t_shirt4_white },
      { name: 'Black', image: t_shirt4_black },
      { name: 'Gray', image: t_shirt4_gray }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Premium Hoodie',
    price: 79.99,
    description: 'A premium hoodie with enhanced comfort and durability. Perfect for those who value quality and style.',
    details: [
      'Premium materials',
      'Enhanced comfort',
      'Durability',
      'Available in multiple sizes'
    ],
    colors: [
      { name: 'Black', image: hoodie9_black },
      { name: 'Gray', image: hoodie9_gray },
      { name: 'Navy', image: hoodie9_navy }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Essential T-Shirt with Logo',
    price: 39.99,
    description: 'A timeless t-shirt design that never goes out of style. Made from soft, breathable fabric.',
    details: [
      'Soft',
      'Breathable',
      'Timeless design',
      'Available in multiple sizes'
    ],
    colors: [
      { name: 'White', image: t_shirt2_white },
      { name: 'Black', image: t_shirt2_black },
      { name: 'Gray', image: t_shirt2_gray }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [showSizeChart, setShowSizeChart] = useState(false);

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
    const selectedColorObj = product.colors.find(c => c.name === selectedColor);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedColorObj?.image || product.colors[0].image,
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
            src={selectedColor ? product.colors.find(c => c.name === selectedColor)?.image : product.colors[0].image}
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
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`px-4 py-2 rounded-md border-2 ${
                    selectedColor === color.name
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-gray-300 hover:border-accent'
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Size</h2>
            <div className="flex space-x-4 mb-2">
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
            <button
              onClick={() => setShowSizeChart(true)}
              className="text-sm text-accent hover:text-accent/80 underline"
            >
              View Size Chart
            </button>
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
              productImage={product.colors[0].image}
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

      {/* Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative"
          >
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Size Chart</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Size</th>
                    <th className="border p-2">Chest (inches)</th>
                    <th className="border p-2">Length (inches)</th>
                    <th className="border p-2">Sleeve (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">S</td>
                    <td className="border p-2">34-36</td>
                    <td className="border p-2">26</td>
                    <td className="border p-2">32</td>
                  </tr>
                  <tr>
                    <td className="border p-2">M</td>
                    <td className="border p-2">38-40</td>
                    <td className="border p-2">27</td>
                    <td className="border p-2">33</td>
                  </tr>
                  <tr>
                    <td className="border p-2">L</td>
                    <td className="border p-2">42-44</td>
                    <td className="border p-2">28</td>
                    <td className="border p-2">34</td>
                  </tr>
                  <tr>
                    <td className="border p-2">XL</td>
                    <td className="border p-2">46-48</td>
                    <td className="border p-2">29</td>
                    <td className="border p-2">35</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-2">* Measurements are approximate and may vary slightly.</p>
              <p>** For best fit, measure your chest at the fullest point and choose the size that matches your measurement.</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDetail; 