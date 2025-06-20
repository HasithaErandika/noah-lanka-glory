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
      thickness: "12/15/18mm",
      core: "Poplar",
      film: "Black",
      glue: "Phenolic, Melamine",
      price: "Contact for Quote",
      packaging: "Standard Exporting Pallet packing",
      deliveryTime: "15-20 days"
    },
    image: "/images/product1.png",
    thumbnail: "/images/product1.png"
  },
  {
    id: 2,
    name: "Local Plywood",
    date: "2024-03-14",
    views: 3562,
    about: "High-quality local plywood for furniture and construction. Cost-effective, versatile, and easy to work with for a variety of projects.",
    details: {
      size: "1020*2440mm, 1250*2500mm or Customizable",
      thickness: "12/15/18mm",
      core: "Poplar",
      film: "Brown",
      glue: "Phenolic, Melamine",
      price: "Contact for Quote",
      packaging: "Standard Packing",
      deliveryTime: "10-15 days"
    },
    image: "/images/product2.png",
    thumbnail: "/images/product2.png"
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
        backgroundImage="/images/productHero.jpg"
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