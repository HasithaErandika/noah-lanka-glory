import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <section id="products" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Plywood Products</h2>
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Plywood Specifications</h3>
            <div className="detail-item">
              <span><strong>Size:</strong></span>
              <span>1220*2440mm, 1250*2500mm or Customizable</span>
            </div>
            <div className="detail-item">
              <span><strong>Thickness:</strong></span>
              <span>6/9/12/15mm/18/21</span>
            </div>
            <div className="detail-item">
              <span><strong>Core:</strong></span>
              <span>Poplar</span>
            </div>
            <div className="detail-item">
              <span><strong>Film:</strong></span>
              <span>Brown, Black, Red</span>
            </div>
            <div className="detail-item">
              <span><strong>Glue:</strong></span>
              <span>Phenolic, Melamine</span>
            </div>
            <div className="detail-item">
              <span><strong>Price:</strong></span>
              <span>USD 18-20/Pcs</span>
            </div>
            <div className="detail-item">
              <span><strong>Packaging Details:</strong></span>
              <span>Standard Exporting Pallet Packing</span>
            </div>
            <div className="detail-item">
              <span><strong>Delivery Time:</strong></span>
              <span>15-20 Days</span>
            </div>
          </div>
          <Link to="/contact" className="btn-gold mt-8 inline-block">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Products; 