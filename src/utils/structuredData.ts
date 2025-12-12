// Structured Data (JSON-LD) utilities for SEO

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GNOSMO",
    "url": "https://gnosmo.com",
    "logo": "https://gnosmo.com/static/media/Gnosmo_Mark.deb90e21b7e8178af3c3.png",
    "description": "Premium oversized hoodies and lightweight summer tees engineered for comfort and style.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@gnosmo.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      // Add social media links when available
    ]
  };
};

export const getProductSchema = (product: {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "GNOSMO"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": `https://gnosmo.com/#/product/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price.toString(),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GNOSMO"
      }
    }
  };
};

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const getWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GNOSMO",
    "url": "https://gnosmo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gnosmo.com/#/shop?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const getItemListSchema = (products: Array<{
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": product.price.toString()
        }
      }
    }))
  };
};

