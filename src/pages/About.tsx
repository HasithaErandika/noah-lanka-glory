import React from 'react';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import '../styles/pages/About.css';

interface Leader {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const leaders: Leader[] = [
  {
    name: "Rohan Perera",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    bio: "With over 20 years of experience in the wood industry, Rohan leads our company with vision and expertise."
  },
  {
    name: "Priyanka Fernando",
    position: "Operations Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500",
    bio: "Priyanka ensures our operations run smoothly while maintaining the highest quality standards."
  },
  {
    name: "Dilshan Silva",
    position: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    bio: "Dilshan brings technical innovation and expertise to our manufacturing processes."
  }
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Section
        className="about-hero"
        backgroundImage="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1920"
      >
        <div className="about-hero-content">
          <h1>About Noah Lanka Glory</h1>
          <p>Excellence in Plywood Manufacturing Since 1995</p>
        </div>
      </Section>

      <Section
        title="Our Story"
        subtitle="A Legacy of Excellence in Plywood Manufacturing"
        className="story-section"
      >
        <div className="story-content">
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800" 
              alt="Our Manufacturing Facility" 
            />
          </div>
          <div className="story-text">
            <p>
              Founded in 1995, Noah Lanka Glory began with a simple mission: to provide the highest quality plywood products to our customers. What started as a small family-owned workshop has grown into one of Sri Lanka's leading plywood manufacturers.
            </p>
            <p>
              Over the years, we've expanded our operations, invested in cutting-edge technology, and built a team of skilled professionals. Today, we're proud to serve customers worldwide with our premium plywood solutions.
            </p>
            <p>
              Our journey has been marked by continuous innovation, sustainable practices, and an unwavering commitment to quality. We've weathered challenges, celebrated successes, and built lasting relationships with our customers and partners.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Our Mission"
        subtitle="Driving Excellence in Every Board"
        className="mission-section"
      >
        <div className="mission-content">
          <div className="mission-text">
            <p>
              Our mission is to be the global leader in premium plywood manufacturing, delivering innovative solutions that meet the evolving needs of our customers while maintaining the highest standards of quality and sustainability.
            </p>
            <ul className="mission-points">
              <li>Deliver superior quality plywood products</li>
              <li>Maintain sustainable manufacturing practices</li>
              <li>Foster innovation in product development</li>
              <li>Build lasting customer relationships</li>
              <li>Contribute positively to our community</li>
            </ul>
          </div>
          <div className="mission-image">
            <img 
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800" 
              alt="Our Mission" 
            />
          </div>
        </div>
      </Section>

      <Section
        title="Our Vision"
        subtitle="Shaping the Future of Plywood Industry"
        className="vision-section"
      >
        <div className="vision-content">
          <div className="vision-image">
            <img 
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800" 
              alt="Our Vision" 
            />
          </div>
          <div className="vision-text">
            <p>
              We envision a future where Noah Lanka Glory is recognized globally as the benchmark for excellence in plywood manufacturing, known for our innovative products, sustainable practices, and customer-centric approach.
            </p>
            <p>
              Our vision extends beyond just manufacturing plywood – we aim to transform the industry through:
            </p>
            <ul className="vision-points">
              <li>Pioneering sustainable manufacturing practices</li>
              <li>Developing innovative plywood solutions</li>
              <li>Expanding our global presence</li>
              <li>Setting new industry standards</li>
              <li>Creating value for all stakeholders</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Our Leadership"
        subtitle="Meet the Team Behind Our Success"
        className="leadership-section"
      >
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              image={leader.image}
              title={leader.name}
              subtitle={leader.position}
              description={leader.bio}
              className="leader-card"
            />
          ))}
        </div>
      </Section>

      <Section
        className="values-section"
        backgroundImage="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1920"
      >
        <div className="values-content">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-star"></i>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do</p>
            </div>
            <div className="value-item">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>We are committed to sustainable practices</p>
            </div>
            <div className="value-item">
              <i className="fas fa-handshake"></i>
              <h3>Integrity</h3>
              <p>We conduct business with honesty and transparency</p>
            </div>
            <div className="value-item">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We continuously innovate and improve</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About; 