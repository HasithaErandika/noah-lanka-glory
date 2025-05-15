import React, { useState, useMemo } from 'react';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import '../styles/pages/Products.css';

interface Product {
  id: number;
  name: string;
  date: string;
  views: number;
  about: string;
  details: {
    size: string;
    thickness: string;
    core: string;
    film: string;
    glue: string;
    price: string;
    packaging: string;
    deliveryTime: string;
  };
  image: string;
  thumbnail: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Film Faced Plywood",
    date: "2024-03-15",
    views: 4185,
    about: "Premium film faced plywood with phenolic film coating, perfect for concrete formwork and construction applications. Our film faced plywood offers excellent durability, water resistance, and reusability.",
    details: {
      size: "1220*2440mm, 1250*2500mm or Customizable",
      thickness: "6/9/12/15mm/18/21mm",
      core: "Poplar Core, Eucalyptus Core",
      film: "Brown, Black, Red Phenolic Film",
      glue: "Phenolic, Melamine",
      price: "USD 11-16/Pcs",
      packaging: "Standard Exporting Pallet packing",
      deliveryTime: "15-20 days"
    },
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  },
  {
    id: 2,
    name: "Marine Plywood",
    date: "2024-03-14",
    views: 3562,
    about: "High-quality marine plywood designed for use in humid and wet conditions. Made with waterproof glue and premium hardwood veneers, perfect for boat building and marine applications.",
    details: {
      size: "1220*2440mm, 1250*2500mm",
      thickness: "6/9/12/15mm",
      core: "Hardwood Core",
      film: "Natural Finish",
      glue: "Marine Grade Phenolic",
      price: "USD 18-25/Pcs",
      packaging: "Waterproof Packing",
      deliveryTime: "20-25 days"
    },
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  },
  {
    id: 3,
    name: "Commercial Plywood",
    date: "2024-03-13",
    views: 2891,
    about: "Versatile commercial plywood suitable for furniture, interior decoration, and general construction. Available in various grades and finishes to meet different requirements.",
    details: {
      size: "1220*2440mm",
      thickness: "3/4/6/9/12/15mm",
      core: "Mixed Hardwood",
      film: "Natural, Teak, Rosewood",
      glue: "MR Grade, BWP Grade",
      price: "USD 8-15/Pcs",
      packaging: "Standard Packing",
      deliveryTime: "10-15 days"
    },
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  },
  {
    id: 4,
    name: "BWP Plywood",
    date: "2024-03-12",
    views: 3245,
    about: "Boiling Water Proof (BWP) plywood with superior water resistance. Ideal for outdoor applications, furniture, and areas exposed to moisture.",
    details: {
      size: "1220*2440mm",
      thickness: "6/9/12/15mm",
      core: "Hardwood Core",
      film: "Natural, Teak",
      glue: "BWP Grade",
      price: "USD 15-22/Pcs",
      packaging: "Moisture Resistant Packing",
      deliveryTime: "15-20 days"
    },
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  },
  {
    id: 5,
    name: "Flexible Plywood",
    date: "2024-03-11",
    views: 1987,
    about: "Specialized flexible plywood for curved surfaces and unique designs. Perfect for furniture, interior decoration, and architectural applications requiring curved surfaces.",
    details: {
      size: "1220*2440mm",
      thickness: "3/4/6mm",
      core: "Special Flexible Core",
      film: "Natural, Various Finishes",
      glue: "Flexible Grade",
      price: "USD 20-30/Pcs",
      packaging: "Special Curved Packing",
      deliveryTime: "20-25 days"
    },
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  }
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.about.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-page">
      <Section
        className="products-hero"
        backgroundImage="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1920"
      >
        <div className="products-hero-content">
          <h1>Our Products</h1>
          <p>Premium Quality Plywood Solutions</p>
        </div>
      </Section>

      <Section className="products-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.thumbnail}
              title={product.name}
              subtitle={`Views: ${product.views}`}
              description={product.about}
              onClick={() => handleProductClick(product)}
              className="product-card"
            />
          ))}
        </div>
      </Section>

      {selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="modal-header">
              <h2>{selectedProduct.name}</h2>
              <div className="modal-meta">
                <span>Date: {selectedProduct.date}</span>
                <span>Views: {selectedProduct.views}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <h3>About</h3>
                <p>{selectedProduct.about}</p>
                <h3>Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Size:</span>
                    <span className="spec-value">{selectedProduct.details.size}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Thickness:</span>
                    <span className="spec-value">{selectedProduct.details.thickness}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Core:</span>
                    <span className="spec-value">{selectedProduct.details.core}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Film:</span>
                    <span className="spec-value">{selectedProduct.details.film}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Glue:</span>
                    <span className="spec-value">{selectedProduct.details.glue}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Price:</span>
                    <span className="spec-value">{selectedProduct.details.price}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Packaging:</span>
                    <span className="spec-value">{selectedProduct.details.packaging}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Delivery Time:</span>
                    <span className="spec-value">{selectedProduct.details.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products; 