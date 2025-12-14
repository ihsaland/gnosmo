import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import { initGA, trackPageView } from './utils/analytics';
import { getMeasurementId } from './config/analytics';

// Initialize Google Analytics with the appropriate Measurement ID
initGA(getMeasurementId());

// Component to track page views
const PageTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    // Include hash for HashRouter compatibility
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <CartProvider>
          <ScrollToTop />
          <PageTracker />
          <div className="min-h-screen bg-secondary flex flex-col">
            <Navigation />
            <main className="flex-grow pt-10">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </CartProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
