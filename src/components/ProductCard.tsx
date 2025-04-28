import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      ...product,
      id: product.id.toString(),
      color: 'Default',
      size: 'M'
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="relative h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-primary font-bold">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard; 