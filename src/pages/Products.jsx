import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaHeart, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'plywood',
    'construction',
    'packaging',
    'furniture'
  ];

  const products = [
    {
      id: 1,
      name: "Commercial Plywood",
      category: "plywood",
      price: "45.00",
      image: "/images/products/commercial-plywood.jpg",
      description: "Versatile and durable commercial plywood for construction and interior applications",
      features: ["Premium quality", "Smooth finish", "High strength", "Multi-purpose"],
      link: "/products/commercial-plywood"
    },
    {
      id: 2,
      name: "Packaging Plywood",
      category: "packaging",
      price: "35.00",
      image: "/images/products/packaging-plywood.jpg",
      description: "Sturdy and customizable solution for safe transportation and storage",
      features: ["Heavy-duty", "Eco-friendly", "Custom sizes", "Reliable protection"],
      link: "/products/packaging-plywood"
    },
    {
      id: 3,
      name: "Film-Faced Plywood",
      category: "construction",
      price: "55.00",
      image: "/images/products/film-faced-plywood.jpg",
      description: "Waterproof and durable plywood for concrete formwork and outdoor use",
      features: ["Waterproof coating", "High durability", "Chemical resistant", "Shiny finish"],
      link: "/products/film-faced-plywood"
    },
    {
      id: 4,
      name: "Laminated Plywood",
      category: "furniture",
      price: "30.00",
      image: "/images/products/laminated-plywood.jpg",
      description: "Affordable plywood with smooth finish for furniture and cabinetry",
      features: ["Budget-friendly", "Stable", "Smooth surface", "Indoor use"],
      link: "/products/laminated-plywood"
    }
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
          <h1>Noah Lanka Glory Products</h1>
          <p>Versatile, Durable, and Affordable Solutions for Construction and Interior Applications</p>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="products-filter">
        <div className="filter-container">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search Noah Lanka Glory products..."
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
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
                    <Link to={product.link} className="view-details">
                      View Details <FaArrowRight />
                    </Link>
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
          <h2>Need a Custom Solution?</h2>
          <p>Contact Noah Lanka Glory for personalized plywood solutions</p>
          <Link to="/request-quote" className="cta-button">
            Request Quote <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Products;