import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "Commercial Plywood",
      category: "Plywood",
      description: "Versatile and durable commercial plywood for construction and interior applications",
      image: "https://images.unsplash.com/photo-1621360243618-pexels-photo-1621360243618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/commercial-plywood"
    },
    {
      name: "Packaging Plywood",
      category: "Packaging",
      description: "Sturdy and customizable solution for safe transportation and storage",
      image: "https://images.unsplash.com/photo-1621360243618-pexels-photo-1621360243618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/packaging-plywood"
    },
    {
      name: "Film-Faced Plywood",
      category: "Construction",
      description: "Waterproof and durable plywood for concrete formwork and outdoor use",
      image: "https://images.unsplash.com/photo-1621360243618-pexels-photo-1621360243618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/film-faced-plywood"
    },
    {
      name: "Laminated Plywood",
      category: "Furniture",
      description: "Affordable plywood with smooth finish for furniture and cabinetry",
      image: "https://images.unsplash.com/photo-1621360243618-pexels-photo-1621360243618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/laminated-plywood"
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Noah Lanka Glory Products</h1>
        <p>Versatile, Durable, and Affordable Solutions for Construction and Interior Applications</p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={product.link} className="product-cta">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 