import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import gnosmoScene from '../assets/images/gnosmo_scene3.png';
import { getOrganizationSchema, getWebSiteSchema } from '../utils/structuredData';

const Home: React.FC = () => {
  const canonicalUrl = 'https://gnosmo.com/';
  const ogImage = 'https://gnosmo.com/static/media/gnosmo_scene3.443cf16b876c2a1216d3.png';
  
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <>
      <Helmet>
        <title>GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees</title>
        <meta name="description" content="Discover premium oversized hoodies and lightweight summer tees at GNOSMO. Engineered for comfort, built for growth. Premium quality clothing designed with intention. Free shipping on orders over $50." />
        <meta name="keywords" content="best oversized hoodie, lightweight summer tees, premium hoodies, comfortable t-shirts, oversized hoodie, summer t-shirts, casual wear, streetwear, engineered clothing" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees" />
        <meta property="og:description" content="Shop premium oversized hoodies and lightweight summer tees. Engineered for comfort, built for growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="GNOSMO - Premium Clothing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees" />
        <meta name="twitter:description" content="Shop premium oversized hoodies and lightweight summer tees. Engineered for comfort, built for growth." />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${gnosmoScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Hidden SEO content for search engines */}
      <div className="sr-only">
        <h1>GNOSMO - Best Oversized Hoodies & Lightweight Summer Tees</h1>
        <p>Welcome to GNOSMO, your destination for premium oversized hoodies and lightweight summer tees. Our clothing is engineered with precision, built with quality materials for ultimate comfort and style. Whether you're looking for the perfect oversized hoodie or lightweight summer tees for warm weather, we craft each piece with intention and attention to detail.</p>
      </div>
    </>
  );
};

export default Home; 