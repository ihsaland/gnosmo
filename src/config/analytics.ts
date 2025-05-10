// Analytics configuration
const analyticsConfig = {
  // Development Measurement ID
  development: 'G-XXXXXXXXXX',
  
  // Production Measurement ID - This should be replaced with your actual production ID
  production: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
};

export const getMeasurementId = () => {
  return process.env.NODE_ENV === 'production' 
    ? analyticsConfig.production 
    : analyticsConfig.development;
}; 