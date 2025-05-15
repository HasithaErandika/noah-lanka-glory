import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { routes } from './config/routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/common/LoadingSpinner'
import './styles/global.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {routes.map(({ path, element: Element, title }) => (
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
      </Router>
    </ThemeProvider>
  )
}

export default App 