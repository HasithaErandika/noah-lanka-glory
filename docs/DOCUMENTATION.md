# Noah Lanka Glory - Technical Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Component Structure](#component-structure)
3. [State Management](#state-management)
4. [Routing](#routing)
5. [Styling System](#styling-system)
6. [Advanced Features](#advanced-features)
7. [Performance Optimizations](#performance-optimizations)
8. [Accessibility](#accessibility)
9. [Responsive Design](#responsive-design)
10. [Deployment](#deployment)

## Architecture Overview

The application follows a modern React architecture with TypeScript, featuring modular components, advanced animations, and responsive design.

### Directory Structure
```
src/
├── components/
│   └── common/
│       ├── Button/          # Reusable button with variants
│       ├── Card/            # Flexible card component
│       ├── Footer/          # Site footer with contact info
│       ├── Header/          # Navigation with mobile menu
│       ├── Hero/            # Hero section with slideshow
│       ├── LoadingSpinner/  # Loading state indicator
│       └── Section/         # Layout section wrapper
├── config/
│   ├── constants.js         # App constants and data
│   └── routes.ts           # Route configuration
├── context/
│   └── ThemeContext.tsx    # Theme management context
├── hooks/
│   └── useScroll.js        # Custom scroll tracking hook
├── pages/
│   ├── About.tsx           # About page with team gallery
│   ├── Contact.tsx         # Contact page with form
│   ├── Home.tsx            # Home page with slideshow
│   ├── NotFound.tsx        # 404 error page
│   ├── Products.tsx        # Products showcase
│   └── Services.tsx        # Services page
├── styles/
│   ├── animations.css      # CSS animations and keyframes
│   ├── fonts.css           # Google Fonts imports
│   ├── global.css          # Global styles and resets
│   ├── pages/              # Page-specific stylesheets
│   ├── root.css            # CSS root variables
│   ├── theme.css           # Theme definitions
│   └── variables.css       # CSS custom properties
└── utils/                  # Utility functions
```

### Key Technologies
- **React 18** with TypeScript for type safety
- **React Router v6** for client-side routing
- **Framer Motion** for advanced animations
- **CSS3** with CSS Variables for theming
- **Vite** for fast development and building
- **Custom hooks** for reusable logic
- **Responsive design** with mobile-first approach

## Component Structure

### Common Components

#### Button Component (`src/components/common/Button/`)
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```
- Supports multiple variants and sizes
- Hover and active states
- Disabled state styling
- Customizable via CSS variables

#### Card Component (`src/components/common/Card/`)
```typescript
interface CardProps {
  children: React.ReactNode;
  title?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}
```
- Flexible card layout
- Icon support (emoji and Font Awesome)
- Hover effects and animations
- Click handlers for interactivity

#### Hero Component (`src/components/common/Hero/`)
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImages?: string[];
  showSlideshow?: boolean;
  slideshowInterval?: number;
}
```
- **Slideshow functionality** with automatic cycling
- **Navigation dots** for manual control
- **Smooth transitions** between images
- **Responsive design** with mobile optimization
- **Pause on hover** functionality

#### Header Component (`src/components/common/Header/`)
```typescript
interface HeaderProps {
  isScrolled?: boolean;
  onMenuToggle?: () => void;
}
```
- **Fixed positioning** with scroll detection
- **Mobile menu** with hamburger toggle
- **Smooth transitions** and animations
- **Logo and navigation** integration

### Page Components

#### Home Page (`src/pages/Home.tsx`)
- Hero slideshow with 5 background images
- Services overview section
- Company highlights and statistics
- Call-to-action sections

#### About Page (`src/pages/About.tsx`)
- Company story and mission
- Core values with icon cards
- Leadership team section
- **Interactive team gallery** with advanced features:
  - 3D flip transitions
  - Autoplay with pause on hover
  - Keyboard navigation
  - Touch/swipe gestures
  - Lightbox modal
  - Progress bar
  - Bullet navigation
- Company milestones timeline
- Call-to-action section

#### Products Page (`src/pages/Products.tsx`)
- Product showcase with detailed specifications
- Modal popups for additional information
- Professional product imagery
- Responsive grid layout

#### Contact Page (`src/pages/Contact.tsx`)
- Contact information cards
- Contact form with validation
- Business hours display
- Location and map integration
- Call-to-action section

## State Management

### Theme Context (`src/context/ThemeContext.tsx`)
```typescript
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    text: string;
    // ... other color properties
  };
}
```
- **Theme switching** functionality
- **CSS variable** integration
- **Persistent state** with localStorage
- **Type-safe** theme definitions

### Custom Hooks

#### useScroll Hook (`src/hooks/useScroll.js`)
```javascript
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll position tracking
  // Direction detection
  // Threshold monitoring
};
```
- **Scroll position** tracking
- **Scroll direction** detection
- **Threshold-based** state changes
- **Performance optimized** with throttling

## Routing

### Route Configuration (`src/config/routes.ts`)
```typescript
export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home - Noah Lanka Glory'
  },
  {
    path: '/about',
    element: About,
    title: 'About Us - Noah Lanka Glory'
  },
  {
    path: '/products',
    element: Products,
    title: 'Products - Noah Lanka Glory'
  },
  {
    path: '/services',
    element: Services,
    title: 'Services - Noah Lanka Glory'
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact Us - Noah Lanka Glory'
  }
];
```

### Lazy Loading
```typescript
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
```

## Styling System

### CSS Variables (`src/styles/variables.css`)
```css
:root {
  /* Colors */
  --primary-color: #d4a017;
  --primary-light: #e6b84c;
  --primary-dark: #b8860b;
  --background-dark: #0a0a0a;
  --text-white: #ffffff;
  --text-gray: #a0a0a0;
  
  /* Typography */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 8rem;
  
  /* Breakpoints */
  --mobile: 767px;
  --tablet: 1023px;
  --desktop: 1439px;
}
```

### Responsive Design
```css
/* Mobile First Approach */
.container {
  padding: var(--spacing-sm);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-md);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-lg);
  }
}
```

## Advanced Features

### Hero Slideshow Implementation
```typescript
const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImages = [], 
  showSlideshow = false,
  slideshowInterval = 10000 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (!showSlideshow || backgroundImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % backgroundImages.length
      );
    }, slideshowInterval);
    
    return () => clearInterval(interval);
  }, [showSlideshow, backgroundImages, slideshowInterval]);
  
  // Navigation dots and image transitions
};
```

### Team Gallery Features
```typescript
const TeamGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [showLightbox, setShowLightbox] = useState(false);
  
  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  // Touch/swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    // Touch gesture implementation
  };
  
  // 3D flip animations with Framer Motion
  const cardVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
    hover: { scale: 1.05, rotateY: 5 }
  };
};
```

### Animation System
```css
/* CSS Animations (src/styles/animations.css) */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes scaleIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Framer Motion Integration */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};
```

## Performance Optimizations

### Code Splitting
- **Route-based** lazy loading
- **Component-level** code splitting
- **Dynamic imports** for large components

### Image Optimization
- **Responsive images** with multiple sizes
- **Lazy loading** for images below the fold
- **WebP format** support for modern browsers
- **Optimized compression** for faster loading

### Animation Performance
- **CSS transforms** instead of layout properties
- **Hardware acceleration** with `transform3d`
- **Reduced motion** support for accessibility
- **Throttled scroll** events

### Bundle Optimization
- **Tree shaking** for unused code removal
- **Minification** and compression
- **Chunk splitting** for better caching
- **Preload critical** resources

## Accessibility

### ARIA Implementation
```typescript
// Navigation
<nav role="navigation" aria-label="Main navigation">
  <button aria-expanded={isMenuOpen} aria-controls="mobile-menu">
    <span className="sr-only">Toggle menu</span>
  </button>
</nav>

// Team Gallery
<div role="region" aria-label="Team members gallery">
  <button 
    aria-label={`View ${member.name}'s details`}
    onClick={() => setShowLightbox(true)}
  >
    {/* Gallery content */}
  </button>
</div>

// Slideshow
<div role="region" aria-label="Hero slideshow">
  <div aria-live="polite" aria-atomic="true">
    {/* Current slide content */}
  </div>
</div>
```

### Keyboard Navigation
- **Tab order** optimization
- **Focus indicators** with high contrast
- **Keyboard shortcuts** for gallery navigation
- **Skip links** for main content

### Screen Reader Support
- **Semantic HTML** structure
- **Alt text** for all images
- **ARIA landmarks** and labels
- **Descriptive link text**

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Design

### Mobile-First Approach
```css
/* Base styles (mobile) */
.hero {
  height: 60vh;
  padding: var(--spacing-sm);
}

.hero__title {
  font-size: 2rem;
  line-height: 1.2;
}

/* Tablet styles */
@media (min-width: 768px) {
  .hero {
    height: 70vh;
    padding: var(--spacing-md);
  }
  
  .hero__title {
    font-size: 3rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .hero {
    height: 80vh;
    padding: var(--spacing-lg);
  }
  
  .hero__title {
    font-size: 4rem;
  }
}
```

### Breakpoint Strategy
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Touch Interactions
- **Touch-friendly** button sizes (44px minimum)
- **Swipe gestures** for gallery navigation
- **Touch feedback** with active states
- **Viewport meta** tag optimization

## Deployment

### Build Process
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

### Environment Configuration
```env
# .env.production
VITE_APP_TITLE=Noah Lanka Glory
VITE_APP_DESCRIPTION=Premium Plywood Solutions
VITE_APP_URL=https://noahlankaglory.com
```

### Deployment Checklist
1. **Code quality** checks (linting, type checking)
2. **Build optimization** and testing
3. **Asset optimization** (images, fonts, CSS)
4. **Performance testing** (Lighthouse, Core Web Vitals)
5. **Cross-browser testing**
6. **Mobile responsiveness** verification
7. **Accessibility audit**
8. **SEO optimization** (meta tags, sitemap)

### Performance Monitoring
- **Core Web Vitals** tracking
- **Bundle size** monitoring
- **Loading performance** metrics
- **User interaction** analytics

## Best Practices

### Code Organization
- **Component composition** over inheritance
- **Single responsibility** principle
- **Consistent naming** conventions
- **Type safety** with TypeScript

### State Management
- **Local state** for component-specific data
- **Context** for global theme and settings
- **Props** for component communication
- **Custom hooks** for reusable logic

### Styling Guidelines
- **CSS variables** for consistency
- **Mobile-first** responsive design
- **BEM methodology** for CSS classes
- **Performance-focused** animations

### Testing Strategy
- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for user flows
- **E2E tests** for critical paths

---

*This documentation is maintained by the Noah Lanka Glory development team.* 