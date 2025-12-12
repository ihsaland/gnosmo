// Analytics configuration
const analyticsConfig = {
  // Development Measurement ID
  development: 'G-QDB6WMDP5S',
  
  // Production Measurement ID
  production: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-QDB6WMDP5S',
};

export const getMeasurementId = () => {
  return process.env.NODE_ENV === 'production' 
    ? analyticsConfig.production 
    : analyticsConfig.development;
}; 