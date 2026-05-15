import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import SEO from '../SEO/SEO';
import { pvcCategories, pvcProducts } from '../../data/pvcData';
import { seriesCovers } from '../../data/aderkaData';
import './HomePage.css';

const PIVOT_SERIES = [
  { slug: 'exclusive', name: 'Exclusive', desc: 'Lignes architecturales épurées', count: 3 },
  { slug: 'stoneline', name: 'Stoneline', desc: 'Finition effet pierre naturelle', count: 3 },
  { slug: 'elegance',  name: 'Elegance',  desc: 'Élégance contemporaine',         count: 10 },
  { slug: 'woodline',  name: 'Woodline',  desc: 'Texture bois authentique',        count: 3 },
];

const HomePage = () => (
  <main>
    <SEO canonical="/" />
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

    {/* ── Portes Pivot Aderka ───────────────────────────────── */}
    <section className="home-pivot">
      <div className="home-pivot-header">
        <div className="home-gold-line" />
        <h2 className="home-pivot-title">PORTES PIVOT ALUMINIUM</h2>
        <p className="home-pivot-subtitle">Aderka Door Systems — 4 séries, 19 modèles exclusifs</p>
      </div>
      <div className="home-pivot-grid">
        {PIVOT_SERIES.map((s, i) => (
          <Link key={s.slug} to={`/portes-pivot/${s.slug}`} className="home-pivot-card">
            <div className="home-pivot-img-wrap">
              <img
                src={seriesCovers[s.name]}
                alt={s.name}
                className="home-pivot-img"
                loading={i < 2 ? 'eager' : 'lazy'}
                onError={e => { e.target.style.opacity = '0.2'; }}
              />
              <div className="home-pivot-overlay" />
              <div className="home-pivot-info">
                <span className="home-pivot-count">{s.count} modèles</span>
                <h3 className="home-pivot-name">{s.name.toUpperCase()}</h3>
                <p className="home-pivot-desc">{s.desc}</p>
                <span className="home-pivot-cta">Découvrir</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-pivot-footer">
        <Link to="/portes-pivot" className="home-pivot-all">Voir toutes les séries →</Link>
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
