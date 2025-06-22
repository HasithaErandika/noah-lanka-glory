import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { routes } from './config/routes'
import Navbar from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner'
import { useScrollToTop } from './hooks/useScrollToTop'
import './styles/global.css'

const AppContent: React.FC = () => {
  useScrollToTop();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route
                key={path}
                path={path}
                element={<Element />}
              />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App 