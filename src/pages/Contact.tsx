import React, { useEffect, useRef } from 'react';
import '../styles/pages/Contact.css';

// Add Google Maps type declarations
declare global {
  interface Window {
    initMap?: () => void;
    google: typeof google;
  }
}

type GoogleMaps = typeof google.maps;
type Map = google.maps.Map;
type AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement;

const Contact: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      if (!mapRef.current || !isMounted) return;

      try {
        // Load the Maps JavaScript API dynamically
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

        const location = { lat: 6.8567, lng: 79.9212 }; // Colombo coordinates
        
        // Create the map instance
        const map = new Map(mapRef.current, {
          zoom: 15,
          center: location,
          mapId: 'dark_map',
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#ffffff"}]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
            },
            {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#000000"}, {"lightness": 20}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 20}]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 21}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#000000"}, {"lightness": 17}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 18}]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 16}]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 19}]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#000000"}, {"lightness": 17}]
            }
          ]
        });

        // Store map instance in ref
        mapInstanceRef.current = map;

        // Create marker using AdvancedMarkerElement
        const marker = new AdvancedMarkerElement({
          map,
          position: location,
          title: 'Noah Lanka Glory'
        });

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=maps,marker&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      isMounted = false;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.initMap;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>No.169/A/2 Bope Watta Rd,<br />Padukka, Sri Lanka</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+94112188919">+94 11 218 8919</a></p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Business Hours</h3>
                <ul className="business-hours">
                  <li>Monday–Friday: 7:30 AM–6:00 PM</li>
                  <li>Saturday: 8:00 AM–3:00 PM</li>
                  <li>Sunday: 9:00 AM–1:00 PM</li>
                </ul>
              </div>
            </div>

            <div className="map-container" ref={mapRef}></div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Message subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 