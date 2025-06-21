import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface CompanyHistory {
  year: string;
  staff: number;
  sheets: number;
  description: string;
}

interface Leader {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface GalleryImage {
  src: string;
  name: string;
  title: string;
  bio: string;
  alt: string;
}

const companyValues: CompanyValue[] = [
  {
    icon: "🏆",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service"
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Committed to sustainable practices and responsible forestry management"
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Conducting business with honesty, transparency, and ethical practices"
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Continuously innovating and improving our products and processes"
  }
];

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "Company Founded",
    description: "Noah Lanka Glory (Pvt) Ltd established as a humble venture in the plywood industry"
  },
  {
    year: "2018",
    title: "ARKPLY Brand Launch",
    description: "Introduced our flagship brand ARKPLY, setting new standards in plywood quality"
  },
  {
    year: "2020",
    title: "Market Expansion",
    description: "Expanded operations and became a trusted name in the Sri Lankan plywood market"
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Established as a market leader and trendsetter in plywood manufacturing with diverse product portfolio"
  }
];

const companyHistory: CompanyHistory[] = [
  {
    year: "2016",
    staff: 20,
    sheets: 150,
    description: "Establish"
  },
  {
    year: "2018",
    staff: 70,
    sheets: 250,
    description: "Growth Phase"
  },
  {
    year: "2019",
    staff: 14,
    sheets: 50,
    description: "Restructuring"
  },
  {
    year: "2021",
    staff: 65,
    sheets: 200,
    description: "Recovery & Expansion"
  },
  {
    year: "2022",
    staff: 70,
    sheets: 300,
    description: "Market Leadership"
  },
  {
    year: "2023",
    staff: 70,
    sheets: 350,
    description: "Consolidation"
  },
  {
    year: "2024",
    staff: 70,
    sheets: 350,
    description: "Stability & Growth"
  },
  {
    year: "2025",
    staff: 80,
    sheets: 500,
    description: "Future Vision"
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

const galleryImages: GalleryImage[] = [
  {
    src: "/images/product1.png",
    name: "Premium Plywood",
    title: "High-Quality Product",
    bio: "Our flagship premium plywood product, crafted with precision and durability in mind.",
    alt: "Premium plywood product showcase"
  },
  {
    src: "/images/product2.png",
    name: "Industrial Grade",
    title: "Commercial Solution",
    bio: "Industrial-grade plywood designed for heavy-duty applications and commercial use.",
    alt: "Industrial grade plywood product"
  },
  {
    src: "/images/aboutUs.png",
    name: "Our Facility",
    title: "State-of-the-Art Manufacturing",
    bio: "Modern manufacturing facility equipped with cutting-edge technology and skilled workforce.",
    alt: "ARKPLY manufacturing facility"
  },
  {
    src: "/images/contactUs.png",
    name: "Customer Support",
    title: "24/7 Service",
    bio: "Dedicated customer support team ready to assist with all your plywood needs.",
    alt: "Customer support and contact information"
  },
  {
    src: "/images/CEO.png",
    name: "Leadership",
    title: "Executive Team",
    bio: "Experienced leadership team driving innovation and growth in the plywood industry.",
    alt: "ARKPLY executive leadership team"
  },
  {
    src: "/images/front.jpg",
    name: "Company Overview",
    title: "ARKPLY Excellence",
    bio: "Comprehensive overview of our company's commitment to quality and customer satisfaction.",
    alt: "ARKPLY company overview and excellence"
  }
];

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplayPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 5000); // 5 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplayPaused, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const goNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goNext();
    } else if (isRightSwipe) {
      goPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
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
        <a href="#team" aria-label="Navigate to Team" className="nav-dot" />
        <a href="#milestones" aria-label="Navigate to Milestones" className="nav-dot" />
        <a href="#company-history" aria-label="Navigate to Company History" className="nav-dot" />
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
                Founded in 2016, Noah Lanka Glory (Pvt) Ltd began as a humble venture and has since grown into a trusted name in the plywood industry. With over 8 years of experience, our journey has been defined by innovation, integrity, and an unwavering commitment to quality.
              </p>
              <p>
                From the start, we've embraced cutting-edge solutions to meet evolving market needs. This forward-thinking approach has positioned us as a market leader and trendsetter in plywood manufacturing.
              </p>
              <p>
                Our flagship brand, ARKPLY, has become synonymous with durability, style, and excellence. With a diverse product portfolio tailored to customer requirements, ARKPLY continues to set new benchmarks across all categories of plywood.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="/images/aboutImg1.png" 
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
        id="team"
        title="Meet Our Team"
        subtitle="The heart of ARKPLY"
        className="team-section"
        aria-label="Team Members"
      >
        <div className="team-intro">
          <p>Beyond leadership, it's our dedicated team that drives innovation, quality, and excellence every day. Here's a glimpse of the people who make it all possible.</p>
        </div>
        <div className="gallery-container">
          <div 
            className="gallery-wrapper"
            ref={galleryRef}
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {galleryImages.map((image, index) => {
              const isMain = index === currentImageIndex;
              const isPrev = index === (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
              const isNext = index === (currentImageIndex + 1) % galleryImages.length;
              
              return (
                <motion.div
                  key={index}
                  className={`gallery-item ${isMain ? 'main-image' : isPrev ? 'prev-image' : isNext ? 'next-image' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isMain || isPrev || isNext ? 1 : 0,
                    scale: isMain ? 1 : 0.7,
                    rotateY: isMain ? 0 : isPrev ? -20 : 20
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => isMain ? openLightbox() : scrollToImage(index)}
                  style={{ 
                    pointerEvents: isMain || isPrev || isNext ? 'auto' : 'none',
                    filter: isMain ? 'brightness(1)' : 'brightness(0.6)'
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay"></div>
                  {isMain && (
                    <div className="gallery-info">
                      <h3>{image.name}</h3>
                      <p>{image.title}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="gallery-progress">
            <div 
              className="gallery-progress-bar"
              style={{ width: `${((currentImageIndex + 1) / galleryImages.length) * 100}%` }}
            />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="gallery-nav gallery-nav-prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className="gallery-nav gallery-nav-next"
            onClick={goNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="gallery-bullets">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-bullet ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => scrollToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="lightbox-image">
                  <img 
                    src={galleryImages[currentImageIndex].src} 
                    alt={galleryImages[currentImageIndex].alt}
                  />
                </div>
                
                <div className="lightbox-info">
                  <h2>{galleryImages[currentImageIndex].name}</h2>
                  <h3>{galleryImages[currentImageIndex].title}</h3>
                  <p>{galleryImages[currentImageIndex].bio}</p>
                </div>
                
                <div className="lightbox-nav">
                  <button onClick={goPrev} aria-label="Previous image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <span>{currentImageIndex + 1} / {galleryImages.length}</span>
                  <button onClick={goNext} aria-label="Next image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
        id="company-history"
        title="Company History"
        subtitle="Our Growth in Numbers"
        className="company-history-section"
        aria-label="Company History"
      >
        <div className="company-history-container">
          <div className="company-history-timeline">
            {companyHistory.map((history, index) => (
              <motion.div 
                key={index}
                className="history-timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="history-card">
                  <div className="history-year">{history.year}</div>
                  <div className="history-stats">
                    <div className="stat-item">
                      <div className="stat-number">{history.staff}</div>
                      <div className="stat-label">Staff</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{history.sheets}</div>
                      <div className="stat-label">Sheets PD</div>
                    </div>
                  </div>
                  <div className="history-description">{history.description}</div>
                </div>
                {index < companyHistory.length - 1 && (
                  <motion.div 
                    className="timeline-arrow"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                      <path d="M0 10 L50 10 M50 10 L40 5 M50 10 L40 15" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
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