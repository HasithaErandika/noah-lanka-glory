# Noah Lanka Glory - Premium Plywood Solutions

A modern, responsive website for Noah Lanka Glory, a leading manufacturer of premium plywood solutions in Sri Lanka. Built with React and featuring advanced UI/UX with smooth animations, interactive galleries, and professional design.

## 🚀 Features

### Core Features
- **Modern, responsive design** with dark theme and gold accents
- **Hero slideshow** with 5 background images cycling every 10 seconds
- **Interactive team gallery** with 3D flip transitions, autoplay, and lightbox
- **Advanced animations** using Framer Motion and CSS transitions
- **Professional product showcase** with detailed specifications and modals
- **Contact form** with validation and business hours display
- **Company timeline** with horizontal scrolling and custom scrollbars
- **SEO-friendly structure** with proper meta tags and semantic HTML

### Interactive Elements
- **Hero slideshow indicators** with navigation dots
- **Team gallery features:**
  - Autoplay with pause on hover
  - Keyboard navigation (arrow keys)
  - Swipe gesture support
  - Lightbox modal on click
  - Dynamic background blur effects
  - 3D flip transitions
  - Hover tooltips
  - Progress bar
  - Bullet navigation
- **Smooth scrolling** and parallax effects
- **Responsive navigation** with mobile menu
- **Theme context** for future light/dark mode support

### Pages
- **Home**: Hero slideshow, services overview, company highlights
- **About**: Company story, mission & vision, core values, leadership, milestones timeline, team gallery
- **Products**: Detailed product showcase (Film Faced Plywood, Local Plywood)
- **Services**: Service offerings and solutions
- **Contact**: Contact information, form, business hours, location

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **React Router v6** for navigation
- **Framer Motion** for advanced animations
- **CSS3** with CSS Variables and custom properties
- **Vite** for fast development and building
- **Font Awesome Icons** and emoji icons
- **Google Fonts** (Poppins, Inter)
- **Responsive design** with mobile-first approach

## 📦 Project Structure

```
src/
├── components/
│   └── common/
│       ├── Button/          # Reusable button component
│       ├── Card/            # Flexible card component
│       ├── Footer/          # Site footer
│       ├── Header/          # Navigation header
│       ├── Hero/            # Hero section with slideshow
│       ├── LoadingSpinner/  # Loading state indicator
│       └── Section/         # Layout section component
├── config/
│   ├── constants.js         # App constants
│   └── routes.ts           # Route configuration
├── context/
│   └── ThemeContext.tsx    # Theme management
├── hooks/
│   └── useScroll.js        # Custom scroll hook
├── pages/
│   ├── About.tsx           # About page with team gallery
│   ├── Contact.tsx         # Contact page with form
│   ├── Home.tsx            # Home page with slideshow
│   ├── NotFound.tsx        # 404 page
│   ├── Products.tsx        # Products showcase
│   └── Services.tsx        # Services page
├── styles/
│   ├── animations.css      # Animation keyframes
│   ├── fonts.css           # Font imports
│   ├── global.css          # Global styles
│   ├── pages/              # Page-specific styles
│   ├── root.css            # Root variables
│   ├── theme.css           # Theme definitions
│   └── variables.css       # CSS variables
└── utils/                  # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/noah-lanka-glory.git
   ```

2. **Install dependencies:**
   ```bash
   cd noah-lanka-glory
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#d4a017` - Main brand color
- **Primary Light**: `#e6b84c` - Hover states
- **Primary Dark**: `#b8860b` - Active states
- **Background Dark**: `#0a0a0a` - Main background
- **Text White**: `#ffffff` - Primary text
- **Text Gray**: `#a0a0a0` - Secondary text

### Typography
- **Primary Font**: Poppins (Headings)
- **Secondary Font**: Inter (Body text)
- **Font Weights**: 300, 400, 500, 600, 700

### Animations
- **Hero slideshow**: 10-second intervals with smooth transitions
- **Team gallery**: 3D flip effects, autoplay, and interactive controls
- **Page transitions**: Smooth fade-in effects
- **Hover effects**: Scale and color transitions
- **Scroll animations**: Parallax and reveal effects

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

## 🔧 Available Scripts

- `npm run dev` - Starts development server with hot reload
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint for code quality
- `npm run type-check` - Runs TypeScript type checking

## 🎯 Key Features Implementation

### Hero Slideshow
- Automatic image cycling every 10 seconds
- Navigation dots with click functionality
- Smooth fade transitions between images
- Responsive background images
- Pause on hover functionality

### Team Gallery
- Horizontal scrolling carousel
- 3D flip card transitions
- Autoplay with pause on hover
- Keyboard navigation (arrow keys)
- Touch/swipe gesture support
- Lightbox modal for detailed view
- Progress bar and bullet navigation
- Accessibility features (ARIA labels, focus management)

### Product Showcase
- Detailed product specifications
- Modal popups for additional information
- Responsive grid layout
- Professional product imagery
- Call-to-action buttons

### Contact System
- Contact form with validation
- Business hours display
- Multiple contact methods
- Location information
- Social media integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any queries, please contact:
- **Email**: info@noahlankaglory.com
- **Phone**: +94 11 218 8919
- **Address**: No.169/A/2 Bope Watta Rd, Padukka, Sri Lanka

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Unsplash** for high-quality images
- **React community** for tools and libraries
- **Framer Motion** for smooth animations
- **Vite** for fast development experience

---

Made with ❤️ by Noah Lanka Glory Team
