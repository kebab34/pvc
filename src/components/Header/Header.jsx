import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/logo2.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Dekor & Design PVC" className="logo" />
        </Link>

        {/* Desktop nav */}
        <nav className="nav">
          <Link to="/" className="nav-link">ACCUEIL</Link>
          <Link to="/produits?cat=portes" className="nav-link">PORTES PVC</Link>
          <Link to="/produits?cat=fenetres" className="nav-link">FENÊTRES PVC</Link>
          <Link to="/produits?cat=coulissants" className="nav-link">COULISSANTS PVC</Link>
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
          <Link to="/produits?cat=portes" className="mobile-link" onClick={closeMenu}>PORTES PVC</Link>
          <Link to="/produits?cat=fenetres" className="mobile-link" onClick={closeMenu}>FENÊTRES PVC</Link>
          <Link to="/produits?cat=coulissants" className="mobile-link" onClick={closeMenu}>COULISSANTS PVC</Link>
          <Link to="/contact" className="mobile-link" onClick={closeMenu}>CONTACT</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
