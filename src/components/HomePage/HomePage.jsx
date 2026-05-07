import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import { pvcCategories, pvcProducts } from '../../data/pvcData';
import './HomePage.css';

const HomePage = () => (
  <main>
    <Carousel />

    {/* ── Intro ─────────────────────────────────────────────── */}
    <section className="home-intro">
      <div className="home-gold-line" />
      <h2 className="home-intro-title">Spécialiste PVC depuis 2010</h2>
      <p className="home-intro-text">
        Dekor & Design PVC vous propose les meilleures gammes de portes et fenêtres PVC européennes.
        Nos profils Aluplast et IDEAL offrent isolation thermique, acoustique et durabilité exceptionnelles.
      </p>
    </section>

    {/* ── Catégories ────────────────────────────────────────── */}
    <section className="home-cats">
      <div className="home-cats-inner">
        {pvcCategories.map(cat => {
          const product = pvcProducts.find(p => p.category === cat.slug);
          return (
            <Link key={cat.slug} to={`/produits?cat=${cat.slug}`} className="home-cat-card">
              {product && (
                <div className="home-cat-img-wrap">
                  <img src={product.image} alt={cat.name} className="home-cat-img" loading="lazy" />
                  <div className="home-cat-overlay" />
                </div>
              )}
              <div className="home-cat-info">
                <h3 className="home-cat-name">{cat.name}</h3>
                <span className="home-cat-count">
                  {pvcProducts.filter(p => p.category === cat.slug).length} produits
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    {/* ── CTA ───────────────────────────────────────────────── */}
    <section className="home-cta">
      <div className="home-gold-line" />
      <h2 className="home-cta-title">Un projet sur mesure ?</h2>
      <p className="home-cta-text">Notre équipe vous accompagne de la conception à la pose.</p>
      <Link to="/contact" className="home-cta-btn">DEMANDER UN DEVIS</Link>
    </section>
  </main>
);

export default HomePage;
