import React, { useEffect } from 'react';
import { FaWhatsapp, FaFacebookF, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  useEffect(() => {
    // Initialize Map
    const map = L.map('map').setView([6.824427, 80.143878], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([6.824427, 80.143878]).addTo(map)
      .bindPopup('Noah Lanka Glory (Pvt) Ltd<br>No.169/A/2 Bope Watta Rd, Padukka')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="section bg-[#2a2a2a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#d4a017] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Get in Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-[#d4a017] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-gray-300">No.169/A/2 Bope Watta Rd, Padukka, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <FaPhone className="text-[#d4a017] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href="tel:+94112188919" className="text-gray-300 hover:text-[#d4a017] transition-colors">
                    +94 11 218 8919
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <FaClock className="text-[#d4a017] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Business Hours</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday–Friday:</span>
                      <span>7:30 AM–6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM–3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>9:00 AM–1:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div id="map" className="h-[300px] w-full rounded-lg shadow-lg"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 bg-[#2a2a2a] border border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent text-white transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 bg-[#2a2a2a] border border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent text-white transition-all"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-4 bg-[#2a2a2a] border border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent text-white transition-all resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#d4a017] text-[#1a1a1a] px-8 py-4 rounded-lg font-medium transition-all hover:bg-[#b8860b] hover:transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-[#404040]">
              <h4 className="text-white font-medium mb-4 text-center">Connect With Us</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://wa.me/+94112188919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-3 rounded-lg text-white hover:text-[#d4a017] hover:bg-[#333333] transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
                <a
                  href="https://facebook.com/noahlankaglory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-3 rounded-lg text-white hover:text-[#d4a017] hover:bg-[#333333] transition-all"
                >
                  <FaFacebookF className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;