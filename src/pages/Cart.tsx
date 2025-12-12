import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { motion } from 'framer-motion';
import { CartItem } from '../context/CartContext';
import { trackCheckout } from '../utils/analytics';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, item.color, item.size, newQuantity);
    }
  };

  const calculateSubtotal = (): number => {
    return cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Track checkout event
    trackCheckout(
      totalPrice,
      totalItems,
      cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }))
    );
  };

  const handlePaymentSuccess = () => {
    clearCart();
    toast.success('Payment successful! Thank you for your purchase.');
  };

  if (totalItems === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link
            to="/shop"
            className="inline-block bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item: CartItem) => (
            <motion.div
              key={`${item.id}-${item.color}-${item.size}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <img
                src={item.image}
                alt={`${item.name} - ${item.color} - Size ${item.size} - GNOSMO`}
                className="w-full sm:w-24 h-24 object-cover rounded-md"
                loading="lazy"
              />
              <div className="flex-grow w-full sm:w-auto">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="px-4 py-2 text-gray-600 hover:text-primary"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-primary"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.color, item.size)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}

          <div className="bg-white rounded-lg shadow-sm p-6 sticky bottom-0 z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-lg font-semibold">${calculateSubtotal().toFixed(2)}</span>
            </div>
            {!isProcessing ? (
              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div className="w-full">
                <PayPalScriptProvider options={{ 
                  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "test",
                  currency: "USD",
                  "enable-funding": "paylater",
                  "disable-funding": "credit,card",
                  "data-sdk-integration-source": "integrationbuilder_sc"
                }}>
                  <PayPalButtons
                    style={{ 
                      layout: "vertical",
                      color: "blue",
                      shape: "rect",
                      label: "checkout"
                    }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "USD",
                              value: totalPrice.toFixed(2),
                              breakdown: {
                                item_total: {
                                  currency_code: "USD",
                                  value: totalPrice.toFixed(2)
                                }
                              }
                            },
                            items: cart.map(item => ({
                              name: item.name,
                              unit_amount: {
                                currency_code: "USD",
                                value: item.price.toFixed(2)
                              },
                              quantity: item.quantity.toString()
                            }))
                          }
                        ]
                      });
                    }}
                    onApprove={async (data, actions) => {
                      await actions.order?.capture();
                      handlePaymentSuccess();
                    }}
                    onError={(err) => {
                      toast.error("Payment failed. Please try again.");
                      setIsProcessing(false);
                    }}
                    onCancel={() => {
                      setIsProcessing(false);
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart; 