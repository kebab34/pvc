import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical }) => {
  const siteName = 'Dekor & Design PVC';
  const baseUrl = 'https://dekordesignpvc.fr';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Portes & Fenêtres PVC Cannes`;
  const desc = description || 'Dekor & Design PVC — Spécialiste portes et fenêtres PVC à Cannes. Profils Aluplast et IDEAL.';
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
