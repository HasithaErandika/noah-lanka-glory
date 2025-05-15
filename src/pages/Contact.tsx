import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize Map
    const L = (window as any).L;
    if (L) {
      const map = L.map('map').setView([6.6667, 80.0667], 13); // Approximate coordinates for Padukka
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([6.6667, 80.0667]).addTo(map)
        .bindPopup('Noah Lanka Glory (Pvt) Ltd<br>No.169/A/2 Bope Watta Rd, Padukka')
        .openPopup();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <div className="contact-page">
      <section id="contact" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="mb-4"><strong>Address:</strong> No.169/A/2 Bope Watta Rd, Padukka, Sri Lanka</p>
              <p className="mb-4"><strong>Phone:</strong> <a href="tel:+94112188919" className="hover:text-[#d4a017]">+94 11 218 8919</a></p>
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li>Monday–Friday: 7:30 AM–6:00 PM</li>
                <li>Saturday: 8:00 AM–3:00 PM</li>
                <li>Sunday: 9:00 AM–1:00 PM</li>
              </ul>
              {/* Map */}
              <div id="map" className="mt-8"></div>
            </div>
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-3 bg-[#1a1a1a] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a017]" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 bg-[#1a1a1a] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a017]" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full p-3 bg-[#1a1a1a] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a017]" required></textarea>
                </div>
                <button type="submit" className="btn-gold">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 