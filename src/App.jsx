import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import './App.css';

const ProductsPage     = lazy(() => import('./components/ProductsPage/ProductsPage'));
const ProductDetailPage = lazy(() => import('./components/ProductDetailPage/ProductDetailPage'));
const ContactPage      = lazy(() => import('./components/ContactPage/ContactPage'));

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== 'POP') window.scrollTo(0, 0);
  }, [location, navType]);
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <ScrollToTop />
          <Header />
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/produits" element={<ProductsPage />} />
              <Route path="/produits/:productId" element={<ProductDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
