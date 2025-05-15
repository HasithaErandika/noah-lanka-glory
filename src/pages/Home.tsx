import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/common/Hero/Hero.tsx';
import Section from '../components/common/Section/Section.tsx';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import '../styles/pages/Home.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface Product {
  image: string;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const testimonials: Testimonial[] = [
  {
    quote: "Noah Lanka Glory's premium plywood has been instrumental in our high-end furniture manufacturing. Their commitment to quality is unmatched.",
    author: "Kumudu Kumari",
    role: "Production Manager, Elite Furniture",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500"
  },
  {
    quote: "Their marine-grade plywood has exceeded our expectations in durability and finish. A reliable partner for our boat building projects.",
    author: "Hasitha Erandika",
    role: "Technical Director, Marine Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
  },
  {
    quote: "The consistency in quality and timely delivery makes Noah Lanka Glory our preferred plywood supplier for all our construction projects.",
    author: "Himasha Wickramasinghe",
    role: "Project Manager, BuildRight Construction",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
  }
];

const products: Product[] = [
  {
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800",
    title: "Marine Plywood",
    description: "Premium water-resistant plywood for marine and outdoor applications",
    link: "/products/marine",
    features: ["Water-resistant", "Durable", "High-quality finish"]
  },
  {
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800",
    title: "Commercial Plywood",
    description: "High-quality plywood for furniture and construction projects",
    link: "/products/commercial",
    features: ["Versatile", "Cost-effective", "Easy to work with"]
  },
  {
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800",
    title: "Decorative Plywood",
    description: "Premium veneered plywood for interior design and furniture",
    link: "/products/decorative",
    features: ["Aesthetic", "Customizable", "Premium finish"]
  }
];

const Home: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! You'll receive our latest updates soon.");
    e.currentTarget.reset();
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Hero
        title="Premium Plywood Solutions"
        subtitle="Excellence in Quality, Innovation in Design"
        backgroundImage="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1920"
        ctaPrimary={{ text: "Explore Products", link: "/products" }}
        ctaSecondary={{ text: "Get a Quote", link: "/contact" }}
      />

      <Section
        title="Why Choose Us"
        subtitle="Discover what makes us the preferred choice for premium plywood"
        className="features-section"
      >
        <div className="features-grid">
          <Card
            icon="medal"
            title="Premium Quality"
            description="Manufactured to international standards with superior materials and rigorous quality control"
            className="feature-card"
          />
          <Card
            icon="leaf"
            title="Sustainable Sourcing"
            description="Responsible forestry practices and certified sustainable wood sourcing"
            className="feature-card"
          />
          <Card
            icon="tools"
            title="Custom Solutions"
            description="Tailored plywood solutions for your specific project requirements"
            className="feature-card"
          />
          <Card
            icon="truck"
            title="Global Delivery"
            description="Efficient logistics and worldwide shipping capabilities"
            className="feature-card"
          />
        </div>
      </Section>

      <Section
        title="Our Products"
        subtitle="Explore our range of premium plywood solutions"
        className="products-section"
      >
        <div className="products-grid">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              features={product.features}
              className="product-card"
              cta={{ text: "Learn More", link: product.link }}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Client Testimonials"
        subtitle="What our valued customers say about us"
        className="testimonials-section"
      >
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              image={testimonial.image}
              title={testimonial.author}
              subtitle={testimonial.role}
              description={testimonial.quote}
              className="testimonial-card"
            />
          ))}
        </div>
      </Section>

      <Section
        className="cta-section"
        backgroundImage="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1920"
      >
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <Button
            text="Get in Touch"
            link="/contact"
            variant="primary"
            size="large"
          />
        </div>
      </Section>
    </div>
  );
};

export default Home; 