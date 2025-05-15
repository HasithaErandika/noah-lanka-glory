import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface BlogPost {
  image: string;
  title: string;
  description: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Noah Lanka Glory's plywood was critical to our project's success, offering unmatched quality and reliability.",
    author: "Kumudu Kumari",
    role: "Project Manager"
  },
  {
    quote: "Their products and service exceeded our expectations, delivering on time and within specifications.",
    author: "Hasitha Erandika",
    role: "Architect"
  },
  {
    quote: "Exceptional support and premium plywood made our construction process seamless.",
    author: "Himasha Wickramasinghe",
    role: "Contractor"
  }
];

const blogPosts: BlogPost[] = [
  {
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "New Website Launch",
    description: "Our redesigned website offers a seamless experience to explore our premium plywood solutions.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1594819046723-1e4f8d5669e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Plywood Innovations",
    description: "Discover our latest advancements in durable and sustainable plywood products.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Recent Projects",
    description: "Our latest projects highlight our commitment to quality and innovation.",
    link: "#"
  }
];

const Home: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! You'll receive our latest updates soon.");
    e.currentTarget.reset();
  };

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Noah Lanka Glory</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Delivering world-class plywood solutions with unmatched quality, innovation, and sustainability.
          </p>
          <Link to="/products" className="btn-gold">Explore Our Products</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Our Company</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Since 2016, Noah Lanka Glory (Pvt) Ltd, headquartered in Padukka, Sri Lanka, has been a premier manufacturer of high-quality plywood.
            Our expertise spans marine, commercial, and custom plywood, serving global markets with a commitment to excellence and environmental responsibility.
          </p>
          <p className="text-lg font-medium">
            Precision Manufacturing — Innovative Solutions — Sustainable Practices
          </p>
        </div>
      </section>

      {/* Key Products Section */}
      <section id="products" className="section bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Core Products</h2>
          <p className="text-lg mb-10">Crafted with precision to meet diverse industry needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Marine Plywood</h3>
              <p>Engineered for durability and water resistance, ideal for marine and outdoor applications.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Commercial Plywood</h3>
              <p>Versatile and cost-effective, perfect for furniture and interior design projects.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Custom Plywood</h3>
              <p>Bespoke solutions tailored to your specific project requirements.</p>
            </div>
          </div>
          <Link to="/products" className="btn-gold mt-10 inline-block">View Product Specifications</Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Process</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 italic">
            "We combine advanced manufacturing with a relentless focus on quality to deliver plywood that empowers your projects and preserves our planet."
          </p>
          <p className="text-lg font-medium">Nimal Perera, Chief Executive Officer</p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="card">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                <p>{post.description}</p>
                <Link to={post.link} className="text-white hover:text-[#d4a017] mt-4 inline-block">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <p className="italic mb-4">{testimonial.quote}</p>
                <p className="font-medium">{testimonial.author}, {testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="section bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Informed</h2>
          <p className="text-lg mb-8">Subscribe to receive updates on our latest products and industry insights.</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full p-3 bg-[#2a2a2a] border border-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#d4a017]"
                required
              />
              <button type="submit" className="btn-gold rounded-r-md">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 