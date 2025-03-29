import React from 'react';

function Services() {
  const services = [
    {
      title: "Custom Furniture",
      description: "Handcrafted furniture tailored to your specific needs and preferences. We create unique pieces that perfectly match your style and requirements.",
      features: ["Custom designs", "Premium materials", "Expert craftsmanship", "Detailed consultation"]
    },
    {
      title: "Wooden Interiors",
      description: "Beautiful wooden interior solutions for homes and businesses. Transform your space with our premium wooden installations.",
      features: ["Wall paneling", "Custom cabinets", "Wooden flooring", "Interior doors"]
    },
    {
      title: "Wooden Artifacts",
      description: "Unique wooden artifacts and decorative pieces that add character to any space.",
      features: ["Decorative items", "Wall art", "Sculptures", "Custom carvings"]
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Discover our comprehensive range of professional woodworking services</p>
      </div>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-detail">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className="features-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="service-cta">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services; 