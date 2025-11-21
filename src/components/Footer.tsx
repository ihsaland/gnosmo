import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">GNOSMO</h3>
            <p className="text-gray-400 text-sm">
            Grow Your Roots. Wear Your Future.  GNOSMO Clothing: Where style meets unstoppable growth. 
            Engineered with precision, built for comfort. Shop premium oversized hoodies and lightweight summer tees.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Shop</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=hoodies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=t-shirts" className="text-gray-400 hover:text-white transition-colors text-sm">
                  T-Shirts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GNOSMO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 