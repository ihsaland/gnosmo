import ReactGA from 'react-ga4';

// Check if we're in production
const isProduction = process.env.NODE_ENV === 'production';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID is not set');
    return;
  }

  try {
    ReactGA.initialize(measurementId, {
      testMode: !isProduction, // Enable test mode in development
      gaOptions: {
        siteSpeedSampleRate: 100, // Sample 100% of users for site speed
      },
    });

    if (isProduction) {
      console.log('Google Analytics initialized in production mode');
    } else {
      console.log('Google Analytics initialized in development mode');
    }
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (!isProduction) {
    console.log('Page view tracked:', path);
  }
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (!isProduction) {
    console.log('Event tracked:', { category, action, label });
  }
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track user interactions
export const trackUserInteraction = (action: string, label?: string) => {
  trackEvent('User Interaction', action, label);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('Form Submission', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('Button Click', buttonName);
};

// Track product views
export const trackProductView = (productId: string, productName: string) => {
  trackEvent('Product', 'View', `${productName} (${productId})`);
};

// Track add to cart
export const trackAddToCart = (productId: string, productName: string, quantity: number) => {
  trackEvent('Cart', 'Add', `${productName} (${productId}) - Quantity: ${quantity}`);
};

// Track checkout
export const trackCheckout = (cartValue: number, itemCount: number) => {
  trackEvent('Checkout', 'Start', `Value: $${cartValue}, Items: ${itemCount}`);
}; 