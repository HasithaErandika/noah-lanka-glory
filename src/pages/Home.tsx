import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/common/Hero/Hero.tsx';
import Section from '../components/common/Section/Section.tsx';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import '../styles/pages/Home.css';
import { Helmet } from 'react-helmet';

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
    <main className="home-page">
      <Helmet>
        <title>Noah Lanka Glory Pvt Ltd | Premium Plywood Solutions Sri Lanka</title>
        <meta name="description" content="Noah Lanka Glory (ARK Ply) delivers premium film faced and local plywood in Sri Lanka. Discover our products, social work, and company updates." />
        <meta name="keywords" content="Plywood, Film Faced Plywood, Local Plywood, Sri Lanka, ARK Ply, Premium Plywood, Construction Materials, CSR, Company Updates" />
        <meta property="og:title" content="Noah Lanka Glory Pvt Ltd | Premium Plywood Solutions Sri Lanka" />
        <meta property="og:description" content="Noah Lanka Glory (ARK Ply) delivers premium film faced and local plywood in Sri Lanka. Discover our products, social work, and company updates." />
        <meta property="og:image" content="/images/front.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <nav aria-label="Section navigation" className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col items-center justify-center gap-4 z-50">
        <a href="#why-choose-us" aria-label="Navigate to Why Choose Us" className="nav-dot" />
        <a href="#our-products" aria-label="Navigate to Our Products" className="nav-dot" />
        <a href="#ceo-message" aria-label="Navigate to CEO Message" className="nav-dot" />
        <a href="#blog-highlights" aria-label="Navigate to Blog Highlights" className="nav-dot" />
        <a href="#testimonials" aria-label="Navigate to Testimonials" className="nav-dot" />
        <a href="#sponsors" aria-label="Navigate to Sponsors" className="nav-dot" />
        <a href="#cta" aria-label="Navigate to Ready to Start Your Project" className="nav-dot" />
      </nav>
      <section aria-label="Hero" id="hero">
        <Hero
          title="Premium Plywood Solutions"
          subtitle="Excellence in Quality, Innovation in Design"
          backgroundImage="/images/front.jpg"
          ctaPrimary={{ text: "Explore Products", link: "/products" }}
          ctaSecondary={{ text: "Get a Quote", link: "/contact" }}
        />
      </section>
      <Section
        id="why-choose-us"
        title="Why Choose Us"
        subtitle="Discover what makes us the preferred choice for premium plywood"
        className="features-section"
        aria-label="Why Choose Us"
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
        aria-label="Our Products"
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
              imageAlt={`${product.title} - ${product.description}`}
            />
          ))}
        </div>
      </Section>
      <Section
        id="ceo-message"
        title="CEO Message"
        className="ceo-section"
        aria-label="CEO Message"
      >
        <div className="ceo-message-container">
          <div className="ceo-portrait">
            <img src="/images/CEO.png" alt="Portrait of CEO, Noah Lanka Glory Pvt Ltd" />
          </div>
          <blockquote className="ceo-quote">
            <p>
                  At Noah Lanka Glory Pvt Ltd (ARK Ply), we’re proud to craft high-quality file face plywood built on precision, sustainability, and trust.
                  Our success lies in the strength of our people and our commitment to innovation, efficiency, and consistent quality.
                  Let’s keep moving forward—together—toward a future shaped by excellence.
            </p>
            <footer>– CEO, Noah Lanka Glory Pvt Ltd</footer>
          </blockquote>
        </div>
      </Section>
      <Section
        id="blog-highlights"
        title="From Our Journal"
        className="blog-section"
        aria-label="Blog Highlights"
      >
        <div className="blog-highlights-grid">
          <div className="blog-card">
            <div className="blog-icon" aria-label="Social Work">🎗️</div>
            <h3 className="blog-title">Social Work</h3>
            <p className="blog-desc">Our latest CSR initiative brought sustainable building materials to local schools, empowering education and community growth.</p>
            <a href="#" className="blog-link" aria-label="Read more about Social Work">Read More</a>
          </div>
          <div className="blog-card">
            <div className="blog-icon" aria-label="New Website Launch">🌐</div>
            <h3 className="blog-title">New Website Launch</h3>
            <p className="blog-desc">Explore our new digital home! Enjoy a modern design, easier navigation, and a seamless experience across all devices.</p>
            <a href="#" className="blog-link" aria-label="Read more about New Website Launch">Read More</a>
          </div>
          <div className="blog-card">
            <div className="blog-icon" aria-label="Esteemed Productline">🏆</div>
            <h3 className="blog-title">Esteemed Productline</h3>
            <p className="blog-desc">Discover our hero product: Film Faced Plywood, trusted by industry leaders for its durability and performance.</p>
            <a href="#" className="blog-link" aria-label="Read more about Esteemed Productline">Read More</a>
          </div>
        </div>
      </Section>
      <Section
        id="testimonials"
        title="Client Testimonials"
        subtitle="What our valued customers say about us"
        className="testimonials-section"
        aria-label="Client Testimonials"
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
              imageAlt={`Portrait of ${testimonial.author}, ${testimonial.role}`}
            />
          ))}
        </div>
      </Section>
      <Section
        id="sponsors"
        title="Our Sponsors"
        subtitle="We are proud to be supported by these organizations"
        className="sponsors-section section--gradient"
        aria-label="Our Sponsors"
      >
        <div className="sponsors-grid">
          {[...Array(8)].map((_, idx) => (
            <img
              key={idx}
              src={`/images/sponsors/sponsor${idx + 1}.png`}
              alt={`Logo of Sponsor ${idx + 1}`}
              className="sponsor-logo"
              loading="lazy"
            />
          ))}
        </div>
      </Section>
      <Section
        id="cta"
        className="cta-section"
        backgroundImage="/images/bottom_ARKPLY.png"
        aria-label="Ready to Start Your Project"
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
    </main>
  );
};

export default Home; 