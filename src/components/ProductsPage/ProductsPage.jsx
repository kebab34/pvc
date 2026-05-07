import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pvcCategories, pvcProducts } from '../../data/pvcData';
import './ProductsPage.css';

const ProductsPage = () => {
  const location = useLocation();
  const [activeCat, setActiveCat] = useState('');
  const [search, setSearch]       = useState('');

  useEffect(() => {
    const cat = new URLSearchParams(location.search).get('cat') || '';
    setActiveCat(cat);
  }, [location.search]);

  const filtered = useMemo(() => pvcProducts.filter(p => {
    if (activeCat && p.category !== activeCat) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    return true;
  }), [activeCat, search]);

  const hasFilters = activeCat || search;

  const clearAll = () => { setActiveCat(''); setSearch(''); };

  return (
    <section className="men-page">
      <div className="men-header">
        <div className="men-gold-line" />
        <h1 className="men-title">NOS PRODUITS PVC</h1>
        <p className="men-subtitle">Portes, fenêtres et coulissants sur mesure</p>
      </div>

      {/* Catégories */}
      <div className="men-cats-wrap">
        <div className="men-cats">
          <button className={`men-cat-btn ${!activeCat ? 'active' : ''}`} onClick={() => setActiveCat('')}>
            Tous
          </button>
          {pvcCategories.map(cat => (
            <button
              key={cat.slug}
              className={`men-cat-btn ${activeCat === cat.slug ? 'active' : ''}`}
              onClick={() => setActiveCat(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="men-toolbar">
        <div className="men-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="men-search-input"
          />
          {search && <button className="men-search-clear" onClick={() => setSearch('')}>✕</button>}
        </div>
        <div className="men-toolbar-right">
          <span className="men-count">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</span>
          {hasFilters && <button className="men-clear-btn" onClick={clearAll}>Tout effacer</button>}
        </div>
      </div>

      {/* Tags */}
      {hasFilters && (
        <div className="men-tags">
          {activeCat && (
            <span className="men-tag">
              {pvcCategories.find(c => c.slug === activeCat)?.name}
              <button onClick={() => setActiveCat('')}>×</button>
            </span>
          )}
          {search && (
            <span className="men-tag">
              &ldquo;{search}&rdquo;
              <button onClick={() => setSearch('')}>×</button>
            </span>
          )}
        </div>
      )}

      {/* Grille */}
      <div className="men-grid">
        {filtered.map(product => (
          <Link key={product.id} to={`/produits/${product.id}`} className="men-card">
            <div className={`men-img-wrapper ${product.cover ? 'men-img-wrapper--cover' : ''}`}>
              <img
                src={product.image}
                alt={product.name}
                className="men-img"
                loading="lazy"
                onError={e => { e.target.style.opacity = '0.1'; }}
              />
            </div>
            <div className="men-card-info">
              <span className="men-card-cat">
                {pvcCategories.find(c => c.slug === product.category)?.name}
              </span>
              <h3 className="men-card-name">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="men-empty">
          <p>Aucun produit trouvé.</p>
          <button onClick={clearAll}>Réinitialiser les filtres</button>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
