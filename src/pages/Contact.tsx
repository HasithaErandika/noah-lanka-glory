import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Hero from '../components/common/Hero/Hero';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import '../styles/pages/Contact.css';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "map-marker-alt",
    title: "Address",
    content: "No.169/A/2 Bope Watta Rd, Ihala Bope, Padukka, Sri Lanka"
  },
  {
    icon: "phone",
    title: "Phone",
    content: "+94 11 218 8919",
    link: "tel:+94112188919",
    linkText: "Call Now"
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    content: "+94 77 740 1651",
    link: "https://wa.me/94777401651",
    linkText: "Chat Now"
  },
  {
    icon: "envelope",
    title: "Email",
    content: "info@noahlankaglory.com",
    link: "mailto:info@noahlankaglory.com",
    linkText: "Send Email"
  }
];

const businessHours = [
  { day: "Monday–Friday", hours: "7:30 AM–6:00 PM" },
  { day: "Saturday", hours: "8:00 AM–3:00 PM" },
  { day: "Sunday", hours: "9:00 AM–1:00 PM" }
];

const Contact: React.FC = () => {
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const emailBody = `
Dear Noah Lanka Glory Team,

You have received a new message from the website contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sender Information:
• Name: ${name}
• Email: ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message Subject:
${subject}

Message Content:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from the Noah Lanka Glory website contact form.
Date: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    const mailtoLink = `mailto:info@noahlankaglory.com?subject=${encodeURIComponent(`[Contact Form] ${subject}`)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    form.reset();
    
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Us | Noah Lanka Glory Pvt Ltd | Premium Plywood Solutions Sri Lanka</title>
        <meta name="description" content="Get in touch with Noah Lanka Glory (ARK Ply) for premium plywood solutions. Contact us for quotes, inquiries, and expert consultation in Sri Lanka." />
        <meta name="keywords" content="Contact, Noah Lanka Glory, ARK Ply, Plywood Contact, Sri Lanka, Quote Request, Customer Support" />
        <meta property="og:title" content="Contact Us | Noah Lanka Glory Pvt Ltd" />
        <meta property="og:description" content="Get in touch with Noah Lanka Glory (ARK Ply) for premium plywood solutions. Contact us for quotes, inquiries, and expert consultation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <nav aria-label="Section navigation" className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col items-center justify-center gap-4 z-50">
        <a href="#contact-hero" aria-label="Navigate to Contact Hero" className="nav-dot" />
        <a href="#contact-info" aria-label="Navigate to Contact Information" className="nav-dot" />
        <a href="#contact-form" aria-label="Navigate to Contact Form" className="nav-dot" />
        <a href="#business-hours" aria-label="Navigate to Business Hours" className="nav-dot" />
        <a href="#cta" aria-label="Navigate to Call to Action" className="nav-dot" />
      </nav>

      <section aria-label="Contact Hero" id="contact-hero" className="contact-hero-section">
        <Hero
          title="Contact Us"
          subtitle="Ready to start your project? Let's discuss your plywood needs"
          backgroundImage="/images/contactUs.png"
        />
      </section>

      <Section
        id="contact-info"
        title="Contact Information"
        subtitle="Multiple ways to reach our team"
        className="contact-info-section"
        aria-label="Contact Information"
      >
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              icon={info.icon}
              title={info.title}
              description={info.content}
              className="contact-info-card"
              cta={info.link ? { text: info.linkText || "Contact", link: info.link } : undefined}
            />
          ))}
        </div>
      </Section>

      <Section
        id="contact-form"
        title="Send Us a Message"
        subtitle="Tell us about your project requirements"
        className="contact-form-section"
        aria-label="Contact Form"
      >
        <div className="contact-form-container">
          <motion.form 
            className="contact-form"
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What is this regarding?"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your project requirements, specifications, or any questions you have..."
                className="form-textarea"
              ></textarea>
            </div>

            <Button
              text="Send Message"
              type="submit"
              variant="primary"
              size="large"
              className="submit-button"
            />
          </motion.form>
        </div>
      </Section>

      <Section
        id="business-hours"
        title="Business Hours"
        subtitle="When you can reach us"
        className="business-hours-section"
        aria-label="Business Hours"
      >
        <div className="business-hours-container">
          <div className="business-hours-grid">
            {businessHours.map((schedule, index) => (
              <Card
                key={index}
                title={schedule.day}
                description={schedule.hours}
                className="business-hours-card"
              />
            ))}
          </div>
          <div className="business-hours-note">
            <p>For urgent inquiries outside business hours, please use our WhatsApp or email. We'll respond as soon as possible.</p>
          </div>
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
          <div className="cta-buttons">
            <Button
              text="Get a Quote"
              link="/contact#contact-form"
              variant="primary"
              size="large"
            />
            <Button
              text="Call Now"
              link="tel:+94112188919"
              variant="secondary"
              size="large"
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact; 