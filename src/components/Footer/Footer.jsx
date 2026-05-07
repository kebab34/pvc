import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-column">
        <div className="footer-logo">DEKOR & DESIGN <span>PVC</span></div>
        <div className="gold-line" />
        <p className="footer-tagline">Spécialiste portes & fenêtres PVC — Cannes, Côte d'Azur</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Showroom</h4>
        <p className="footer-text">Cannes, Côte d'Azur</p>
        <p className="footer-text">Sur rendez-vous</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Contact</h4>
        <p className="footer-text">contact@dekordesign.fr</p>
        <p className="footer-text">+33 9 87 59 48 58</p>
        <p className="footer-text">4 Bd Etienne Astegiano, 06150 Cannes</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Suivez-nous</h4>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">Pinterest</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="footer-copy">© {new Date().getFullYear()} Dekor & Design PVC — Tous droits réservés</p>
    </div>
  </footer>
);

export default Footer;
