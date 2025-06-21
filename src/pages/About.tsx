import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import '../styles/pages/About.css';

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Leader {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const companyValues: CompanyValue[] = [
  {
    icon: "star",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service"
  },
  {
    icon: "leaf",
    title: "Sustainability",
    description: "Committed to sustainable practices and responsible forestry management"
  },
  {
    icon: "handshake",
    title: "Integrity",
    description: "Conducting business with honesty, transparency, and ethical practices"
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description: "Continuously innovating and improving our products and processes"
  }
];

const milestones: Milestone[] = [
  {
    year: "1995",
    title: "Company Founded",
    description: "Started as a small family-owned workshop with a vision for quality"
  },
  {
    year: "2005",
    title: "First Expansion",
    description: "Expanded operations and invested in modern manufacturing technology"
  },
  {
    year: "2015",
    title: "Global Reach",
    description: "Began serving international markets with premium plywood solutions"
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Established as one of Sri Lanka's leading plywood manufacturers"
  }
];

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
    <main className="about-page">
      <Helmet>
        <title>About Us | Noah Lanka Glory Pvt Ltd | Premium Plywood Solutions Sri Lanka</title>
        <meta name="description" content="Learn about Noah Lanka Glory (ARK Ply) - a leading plywood manufacturer in Sri Lanka since 1995. Discover our story, mission, values, and leadership team." />
        <meta name="keywords" content="About Noah Lanka Glory, ARK Ply, Plywood Manufacturer Sri Lanka, Company History, Leadership Team, Core Values" />
        <meta property="og:title" content="About Us | Noah Lanka Glory Pvt Ltd" />
        <meta property="og:description" content="Learn about Noah Lanka Glory (ARK Ply) - a leading plywood manufacturer in Sri Lanka since 1995." />
        <meta property="og:type" content="website" />
      </Helmet>

      <nav aria-label="Section navigation" className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col items-center justify-center gap-4 z-50">
        <a href="#about-hero" aria-label="Navigate to About Hero" className="nav-dot" />
        <a href="#our-story" aria-label="Navigate to Our Story" className="nav-dot" />
        <a href="#mission-vision" aria-label="Navigate to Mission & Vision" className="nav-dot" />
        <a href="#core-values" aria-label="Navigate to Core Values" className="nav-dot" />
        <a href="#leadership" aria-label="Navigate to Leadership" className="nav-dot" />
        <a href="#milestones" aria-label="Navigate to Milestones" className="nav-dot" />
        <a href="#cta" aria-label="Navigate to Call to Action" className="nav-dot" />
      </nav>

      <section aria-label="About Hero" id="about-hero" className="about-hero-section">
        <Hero
          title="About Us"
          subtitle="Excellence in Plywood Manufacturing Since 1995"
          backgroundImage="/images/aboutUs.png"
        />
      </section>

      <Section
        id="our-story"
        title="Our Story"
        subtitle="A Legacy of Excellence in Plywood Manufacturing"
        className="story-section"
        aria-label="Our Story"
      >
        <div className="story-container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800" 
                alt="Our Manufacturing Facility" 
                className="story-img"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        id="mission-vision"
        title="Mission & Vision"
        subtitle="Driving Excellence in Every Board"
        className="mission-vision-section"
        aria-label="Mission & Vision"
      >
        <div className="mission-vision-container">
          <div className="mission-vision-grid">
            <Card
              icon="target"
              title="Our Mission"
              description="To be the global leader in premium plywood manufacturing, delivering innovative solutions that meet the evolving needs of our customers while maintaining the highest standards of quality and sustainability."
              className="mission-card"
            />
            <Card
              icon="eye"
              title="Our Vision"
              description="To be recognized globally as the benchmark for excellence in plywood manufacturing, known for our innovative products, sustainable practices, and customer-centric approach."
              className="vision-card"
            />
          </div>
        </div>
      </Section>

      <Section
        id="core-values"
        title="Our Core Values"
        subtitle="The Principles That Guide Everything We Do"
        className="values-section"
        aria-label="Core Values"
      >
        <div className="values-grid">
          {companyValues.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              className="value-card"
            />
          ))}
        </div>
      </Section>

      <Section
        id="leadership"
        title="Our Leadership"
        subtitle="Meet the Team Behind Our Success"
        className="leadership-section"
        aria-label="Leadership Team"
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
              imageAlt={`Portrait of ${leader.name}, ${leader.position}`}
            />
          ))}
        </div>
      </Section>

      <Section
        id="milestones"
        title="Our Journey"
        subtitle="Key Milestones in Our Growth"
        className="milestones-section"
        aria-label="Company Milestones"
      >
        <div className="milestones-container">
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="milestone-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="cta"
        className="cta-section"
        backgroundImage="/images/bottom_ARKPLY.png"
        aria-label="Ready to Work With Us"
      >
        <div className="cta-content">
          <h2>Ready to Work With Us?</h2>
          <p>Discover how our expertise can benefit your next project</p>
          <div className="cta-buttons">
            <Button
              text="Explore Products"
              link="/products"
              variant="primary"
              size="large"
            />
            <Button
              text="Contact Us"
              link="/contact"
              variant="secondary"
              size="large"
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About; 