import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaShoppingCart, FaHeart, FaArrowRight } from 'react-icons/fa';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'furniture',
    'doors',
    'windows',
    'decor',
    'outdoor'
  ];

  const products = [
    {
      id: 1,
      name: "Teak Wood Dining Table",
      category: "furniture",
      price: "1,200.00",
      image: "/images/products/dining-table.jpg",
      description: "Handcrafted teak wood dining table with elegant finish",
      features: ["6-seater", "Premium teak wood", "Natural finish", "Custom size available"]
    },
    {
      id: 2,
      name: "Carved Wooden Door",
      category: "doors",
      price: "800.00",
      image: "/images/products/carved-door.jpg",
      description: "Beautifully carved wooden door with intricate details",
      features: ["Solid wood", "Hand-carved design", "Weather-resistant", "Custom design available"]
    },
    {
      id: 3,
      name: "Modern Window Frame",
      category: "windows",
      price: "400.00",
      image: "/images/products/window-frame.jpg",
      description: "Contemporary wooden window frame with superior functionality",
      features: ["Double-glazed", "Weather-sealed", "Modern design", "Multiple sizes"]
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <motion.div 
          className="products-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Products</h1>
          <p>Discover our collection of premium wooden products</p>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="products-filter">
        <div className="filter-container">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-container">
          <motion.div 
            className="products-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-actions">
                    <button className="action-btn" aria-label="Add to wishlist">
                      <FaHeart />
                    </button>
                    <button className="action-btn" aria-label="Add to cart">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <span className="price">$ {product.price}</span>
                    <button className="view-details">
                      View Details <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Can't Find What You're Looking For?</h2>
          <p>We offer custom woodworking services to meet your specific needs</p>
          <button className="cta-button">
            Request Custom Order <FaArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Products; 