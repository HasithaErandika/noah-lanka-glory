import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

interface Route {
  path: string;
  element: React.LazyExoticComponent<React.FC>;
  title: string;
}

export const routes: Route[] = [
  {
    path: '/',
    element: Home,
    title: 'Home'
  },
  {
    path: '/about',
    element: About,
    title: 'About'
  },
  {
    path: '/products',
    element: Products,
    title: 'Products'
  },
  {
    path: '/services',
    element: Services,
    title: 'Services'
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact'
  },
  {
    path: '*',
    element: NotFound,
    title: 'Not Found'
  }
]; 