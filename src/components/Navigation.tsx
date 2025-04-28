import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import GnosmoMark from '../assets/images/Gnosmo_Mark.png';
import { useCart } from '../context/CartContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <button
                className="md:hidden p-2 mr-4 text-black hover:text-accent transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
              >
                <img 
                  src={GnosmoMark} 
                  alt="GNOSMO" 
                  className="h-6 w-auto brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
                <span className="text-xl font-bold text-black group-hover:text-accent transition-colors duration-300 tracking-wider">
                  GNOSMO
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/shop"
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/shop'
                    ? 'text-accent font-semibold'
                    : 'text-black hover:text-accent'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/contact'
                    ? 'text-accent font-semibold'
                    : 'text-black hover:text-accent'
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/cart"
                className="relative text-black hover:text-accent transition-colors duration-300"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navigation; 