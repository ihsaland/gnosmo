import ReactGA from 'react-ga4';

// Check if we're in production
const isProduction = process.env.NODE_ENV === 'production';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics Measurement ID is not set or invalid');
    return;
  }

  try {
    // Check if gtag is already loaded (from direct script tag)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('Google Analytics already initialized via script tag');
      // Don't re-initialize, just ensure tracking is working
      if (isProduction) {
        const initialPath = window.location.hash || window.location.pathname || '/';
        (window as any).gtag('event', 'page_view', {
          page_path: initialPath,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
      return;
    }

    // Initialize react-ga4 if gtag is not already available
    ReactGA.initialize(measurementId, {
      testMode: !isProduction, // Enable test mode in development only
      gaOptions: {
        siteSpeedSampleRate: 100, // Sample 100% of users for site speed
      },
    });

    // Send initial pageview
    if (isProduction) {
      console.log('Google Analytics initialized in production mode via react-ga4');
      // Track initial page load
      const initialPath = window.location.hash || '#/';
      ReactGA.send({ 
        hitType: "pageview", 
        page: initialPath 
      });
      ReactGA.gtag("event", "page_view", {
        page_path: initialPath,
        page_title: document.title,
        page_location: window.location.href,
      });
    } else {
      console.log('Google Analytics initialized in development mode (test mode)');
    }
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  // For HashRouter, include the hash in the path
  const fullPath = path.startsWith('/') ? `#${path}` : path;
  const fullUrl = window.location.origin + fullPath;
  
  if (!isProduction) {
    console.log('Page view tracked:', fullPath);
  }
  
  // Use gtag directly if available (from script tag), otherwise use react-ga4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Update config with new page path
    (window as any).gtag('config', 'G-QDB6WMDP5S', {
      page_path: fullPath,
      page_title: document.title,
      page_location: fullUrl,
    });
    // Send page_view event
    (window as any).gtag('event', 'page_view', {
      page_path: fullPath,
      page_title: document.title,
      page_location: fullUrl,
    });
  } else {
    // Fallback to react-ga4
    ReactGA.send({ 
      hitType: "pageview", 
      page: fullPath 
    });
    ReactGA.gtag("event", "page_view", {
      page_path: fullPath,
      page_title: document.title,
      page_location: fullUrl,
    });
  }
};

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (!isProduction) {
    console.log('Event tracked:', { category, action, label, value });
  }
  ReactGA.event({
    action,
    category,
    label,
    value,
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
export const trackAddToCart = (productId: string, productName: string, quantity: number, price: number) => {
  // Use gtag for GA4 ecommerce events with items
  ReactGA.gtag("event", "add_to_cart", {
    currency: "USD",
    value: price * quantity,
    items: [{
      item_id: productId,
      item_name: productName,
      quantity: quantity,
      price: price,
    }],
  });
  if (!isProduction) {
    console.log('Add to cart tracked:', { productId, productName, quantity, price });
  }
};

// Track checkout
export const trackCheckout = (cartValue: number, itemCount: number, items?: Array<{ id: string; name: string; quantity: number; price: number }>) => {
  // Use gtag for GA4 ecommerce events with items
  ReactGA.gtag("event", "begin_checkout", {
    currency: "USD",
    value: cartValue,
    items: items || [],
  });
  if (!isProduction) {
    console.log('Checkout tracked:', { cartValue, itemCount, items });
  }
}; 