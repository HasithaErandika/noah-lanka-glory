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
    image: "/images/product1.png",
    title: "Film Faced Plywood",
    description: "Premium film faced plywood with phenolic film coating, perfect for concrete formwork and construction applications. Excellent durability, water resistance, and reusability.",
    link: "/products/film-faced",
    features: ["Phenolic film coating", "Water-resistant", "Reusable", "Durable"]
  },
  {
    image: "/images/product2.png",
    title: "Local Plywood",
    description: "High-quality local plywood for furniture and construction. Cost-effective, versatile, and easy to work with for a variety of projects.",
    link: "/products/local",
    features: ["Cost-effective", "Versatile", "Easy to work with", "Locally sourced"]
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
      <div className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col items-center justify-center gap-4 z-50">
        <a href="#why-choose-us" aria-label="Navigate to Why Choose Us" className="nav-dot" />
        <a href="#our-products" aria-label="Navigate to Our Products" className="nav-dot" />
        <a href="#testimonials" aria-label="Navigate to Testimonials" className="nav-dot" />
        <a href="#sponsors" aria-label="Navigate to Sponsors" className="nav-dot" />
        <a href="#cta" aria-label="Navigate to Ready to Start Your Project" className="nav-dot" />
      </div>
      <Hero
        title="Premium Plywood Solutions"
        subtitle="Excellence in Quality, Innovation in Design"
        backgroundImage="/images/front.jpg"
        ctaPrimary={{ text: "Explore Products", link: "/products" }}
        ctaSecondary={{ text: "Get a Quote", link: "/contact" }}
      />

      <Section
        id="why-choose-us"
        title="Why Choose Us"
        subtitle="Discover what makes us the preferred choice for premium plywood"
        className="features-section"
      >
        <div className="features-grid">
          <Card
            icon="award"
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
            icon="cogs"
            title="Custom Solutions"
            description="Tailored plywood solutions for your specific project requirements"
            className="feature-card"
          />
          <Card
            icon="shipping-fast"
            title="Global Delivery"
            description="Efficient logistics and worldwide shipping capabilities"
            className="feature-card"
          />
        </div>
      </Section>

      <Section
        id="our-products"
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
        id="testimonials"
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

      {/* Sponsors Section */}
      <Section
        id="sponsors"
        title="Our Sponsors"
        subtitle="We are proud to be supported by these organizations"
        className="sponsors-section section--gradient"
      >
        <div className="sponsors-grid">
          {[...Array(8)].map((_, idx) => (
            <img
              key={idx}
              src={`/images/sponsors/sponsor${idx + 1}.png`}
              alt={`Sponsor ${idx + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        className="cta-section"
        backgroundImage="/images/bottom_ARKPLY.png"
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