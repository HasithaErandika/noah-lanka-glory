import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface NavItem {
  label: string;
  path: string;
  submenu?: NavItem[];
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Products', 
    path: '/products',
    submenu: [
      { label: 'Film Faced Plywood', path: '/products' },
      { label: 'Local Plywood', path: '/products' }
    ]
  },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const socialLinks: SocialLink[] = [
  {
    icon: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/company/noahlankaglory/',
    label: 'LinkedIn'
  },
  {
    icon: 'fab fa-facebook',
    url: 'https://www.facebook.com/profile.php?id=61564340771307',
    label: 'Facebook'
  },
  {
    icon: 'fab fa-whatsapp',
    url: 'https://wa.me/94777401651',
    label: 'WhatsApp'
  }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmenuEnter = (label: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(label);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/NoahLankaLogo.png" alt="Noah Lanka Glory" />
          <span className="logo-text">Noah Lanka Glory</span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.submenu ? (
                  <div 
                    className="nav-item-with-submenu"
                    onMouseEnter={() => handleSubmenuEnter(item.label)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <Link 
                      to={item.path}
                      className="nav-link"
                    >
                      {item.label}
                      <span className="submenu-arrow">▼</span>
                    </Link>
                    <ul className={`submenu ${activeSubmenu === item.label ? 'submenu-open' : ''}`}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link 
                            to={subItem.path}
                            className={location.pathname === subItem.path ? 'active' : ''}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 