import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleCartClick = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-xl font-bold text-primary">Menu</span>
                <button onClick={onClose} className="p-2">
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <nav className="flex-1 p-4">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      onClick={onClose}
                      className={`block py-2 ${
                        location.pathname === '/'
                          ? 'text-accent'
                          : 'text-gray-600 hover:text-accent'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      onClick={onClose}
                      className={`block py-2 ${
                        location.pathname === '/shop'
                          ? 'text-accent'
                          : 'text-gray-600 hover:text-accent'
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={onClose}
                      className={`block py-2 ${
                        location.pathname === '/about'
                          ? 'text-accent'
                          : 'text-gray-600 hover:text-accent'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="p-4 border-t">
                <button 
                  onClick={handleCartClick}
                  className="flex items-center space-x-2 text-gray-600 hover:text-accent w-full"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span>Cart ({cart.length})</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 