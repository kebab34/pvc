import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const NavDropdown = ({ label, to, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item-dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={to} className="nav-link nav-link-arrow">
        {label}
        <svg className="nav-arrow" viewBox="0 0 10 6" width="8" height="5">
          <path d="M0 0l5 6 5-6z" fill="currentColor"/>
        </svg>
      </Link>
      {open && <div className="dropdown-menu">{children}</div>}
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState('');

  const closeMenu = () => { setMenuOpen(false); setMobileExpanded(''); };
  const toggleSection = (key) => setMobileExpanded(prev => prev === key ? '' : key);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-text" onClick={closeMenu}>
          DEKOR & DESIGN <span>PVC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav">
          <Link to="/" className="nav-link">ACCUEIL</Link>
          <NavDropdown label="PRODUITS" to="/produits">
            <Link to="/produits" className="dropdown-item">Tous les produits</Link>
            <div className="dropdown-divider" />
            <Link to="/produits?cat=portes" className="dropdown-item">Portes PVC</Link>
            <Link to="/produits?cat=fenetres" className="dropdown-item">Fenêtres PVC</Link>
            <Link to="/produits?cat=coulissants" className="dropdown-item">Coulissants PVC</Link>
          </NavDropdown>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" className="mobile-link" onClick={closeMenu}>ACCUEIL</Link>
          <div className="mobile-section">
            <button className="mobile-section-toggle" onClick={() => toggleSection('produits')}>
              PRODUITS
              <svg viewBox="0 0 10 6" width="8" height="5" className={mobileExpanded === 'produits' ? 'rotated' : ''}>
                <path d="M0 0l5 6 5-6z" fill="currentColor"/>
              </svg>
            </button>
            {mobileExpanded === 'produits' && (
              <div className="mobile-submenu">
                <Link to="/produits" className="mobile-sublink" onClick={closeMenu}>Tous les produits</Link>
                <Link to="/produits?cat=portes" className="mobile-sublink" onClick={closeMenu}>Portes PVC</Link>
                <Link to="/produits?cat=fenetres" className="mobile-sublink" onClick={closeMenu}>Fenêtres PVC</Link>
                <Link to="/produits?cat=coulissants" className="mobile-sublink" onClick={closeMenu}>Coulissants PVC</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="mobile-link" onClick={closeMenu}>CONTACT</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
