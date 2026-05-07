import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical }) => {
  const siteName = 'Dekor & Design PVC';
  const baseUrl = 'https://dekordesignpvc.fr';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Portes & Fenêtres PVC Cannes`;
  const desc = description || 'Dekor & Design PVC — Spécialiste portes et fenêtres PVC à Cannes. Profils Aluplast et IDEAL 2000/4000/7000/8000.';
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="FR-06" />
      <meta name="geo.placename" content="Cannes" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};

export default SEO;
