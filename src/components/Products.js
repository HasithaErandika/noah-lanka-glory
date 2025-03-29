import React from 'react';

function Products() {
  const products = [
    {
      name: "Custom Wooden Tables",
      category: "Furniture",
      description: "Handcrafted wooden tables in various styles and sizes",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Wooden Wall Panels",
      category: "Interiors",
      description: "Elegant wooden wall panels for modern and traditional spaces",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Decorative Wooden Art",
      category: "Artifacts",
      description: "Unique wooden sculptures and decorative pieces",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Explore our collection of premium wooden products</p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="product-cta">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products; 