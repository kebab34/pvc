const CDN = 'https://cdn.jsdelivr.net/gh/kebab34/dekordesign@a29e640/public/images/menuiserie';

export const pvcCategories = [
  { slug: 'portes',      name: 'Portes PVC' },
  { slug: 'fenetres',    name: 'Fenêtres PVC' },
  { slug: 'coulissants', name: 'Coulissants PVC' },
];

export const pvcProducts = [
  // ── Portes PVC ───────────────────────────────────────────────
  {
    id: 'porte-aluplast-70',
    name: 'Porte PVC Aluplast 70mm',
    category: 'portes',
    image: `${CDN}/porte-70mm.jpg`,
    description: 'Profil PVC Aluplast 70mm — 5 chambres, isolation thermique Uf ≤ 1,3 W/m²K. Performance thermique et acoustique idéale pour une utilisation résidentielle.',
    specs: { Profil: 'Aluplast 70mm', Chambres: '5', 'Uf (W/m²K)': '≤ 1,3', Vitrage: 'Double ou Triple' },
  },
  {
    id: 'porte-aluplast-85',
    name: 'Porte PVC Aluplast 85mm',
    category: 'portes',
    image: `${CDN}/porte-85mm.jpg`,
    description: 'Profil PVC Aluplast 85mm — 6 chambres, isolation thermique Uf ≤ 0,95 W/m²K. Notre gamme premium pour une isolation maximale.',
    specs: { Profil: 'Aluplast 85mm', Chambres: '6', 'Uf (W/m²K)': '≤ 0,95', Vitrage: 'Triple' },
  },
  // ── Fenêtres PVC ─────────────────────────────────────────────
  {
    id: 'fenetre-ideal-2000',
    name: 'Fenêtre IDEAL 2000',
    category: 'fenetres',
    image: `${CDN}/fenetre-2000.png`,
    description: 'Gamme entrée de gamme — 5 chambres, performant et économique. La solution idéale pour les projets avec un bon rapport qualité/prix.',
    specs: { Profil: 'IDEAL 2000', Chambres: '5', Vitrage: 'Double' },
  },
  {
    id: 'fenetre-ideal-4000',
    name: 'Fenêtre IDEAL 4000',
    category: 'fenetres',
    image: `${CDN}/fenetre-4000.png`,
    description: 'Gamme standard — 5 chambres optimisées, excellent rapport qualité/prix. Le profil le plus populaire de notre gamme.',
    specs: { Profil: 'IDEAL 4000', Chambres: '5', Vitrage: 'Double ou Triple' },
  },
  {
    id: 'fenetre-ideal-4000-mono',
    name: 'Fenêtre IDEAL 4000 Mono',
    category: 'fenetres',
    image: `${CDN}/fenetre-4000-mono.jpg`,
    description: 'Profil monocolore blanc — design épuré et contemporain pour une intégration architecturale parfaite.',
    specs: { Profil: 'IDEAL 4000 Mono', Couleur: 'Blanc', Vitrage: 'Double ou Triple' },
  },
  {
    id: 'fenetre-ideal-4000-reno',
    name: 'Fenêtre IDEAL 4000 Reno',
    category: 'fenetres',
    image: `${CDN}/fenetre-4000-reno.jpg`,
    description: 'Profil rénovation — pose sur dormant existant sans travaux lourds. La solution idéale pour moderniser sans démolir.',
    specs: { Profil: 'IDEAL 4000 Reno', Application: 'Rénovation', Vitrage: 'Double ou Triple' },
  },
  {
    id: 'fenetre-ideal-7000',
    name: 'Fenêtre IDEAL 7000',
    category: 'fenetres',
    image: `${CDN}/fenetre-7000.jpeg`,
    description: 'Gamme premium — 7 chambres, triple vitrage, Uf ≤ 1,1 W/m²K. Performances thermiques supérieures pour les constructions à haute efficacité énergétique.',
    specs: { Profil: 'IDEAL 7000', Chambres: '7', 'Uf (W/m²K)': '≤ 1,1', Vitrage: 'Triple' },
  },
  {
    id: 'fenetre-ideal-8000',
    name: 'Fenêtre IDEAL 8000',
    category: 'fenetres',
    image: `${CDN}/fenetre-8000-nl.jpeg`,
    description: 'Gamme haut de gamme — 8 chambres, Uf ≤ 0,91 W/m²K. Notre profil le plus isolant, conçu pour les maisons passives et les bâtiments basse consommation.',
    specs: { Profil: 'IDEAL 8000', Chambres: '8', 'Uf (W/m²K)': '≤ 0,91', Vitrage: 'Triple' },
  },
  // ── Coulissants PVC ──────────────────────────────────────────
  {
    id: 'coulissant-multi-slide',
    name: 'Multi Slide',
    category: 'coulissants',
    image: `${CDN}/coulissant-multi-slide.png`,
    description: "Baie coulissante multi-vantaux — grandes ouvertures panoramiques jusqu'à 4 vantaux. Idéal pour relier l'intérieur et l'extérieur sans compromis.",
    specs: { Système: 'Multi Slide', 'Max. vantaux': '4', 'Uw (W/m²K)': '≤ 1,2' },
  },
  {
    id: 'coulissant-smart-slide',
    name: 'Smart Slide',
    category: 'coulissants',
    cover: true,
    image: `${CDN}/coulissant-smart-slide.jpeg`,
    description: 'Coulissant semi-automatisé — ouverture et fermeture assistées par simple contact. Le confort à portée de main.',
    specs: { Système: 'Smart Slide', Commande: 'Semi-automatique' },
  },
  {
    id: 'coulissant-levant',
    name: 'Levant-Coulissante',
    category: 'coulissants',
    image: `${CDN}/coulissant-levant.png`,
    description: "Vantail levant-coulissant — étanchéité optimale grâce au joint compressé en position fermée. La baie coulissante la plus étanche du marché.",
    specs: { Système: 'Levant-Coulissant', Étanchéité: 'Haute' },
  },
  {
    id: 'coulissant-ideal-4000',
    name: 'IDEAL 4000 Coulissant',
    category: 'coulissants',
    cover: true,
    image: `${CDN}/coulissant-ideal4000.jpg`,
    description: 'Version coulissante du profil IDEAL 4000 — solution économique pour baies coulissantes sans sacrifier la qualité.',
    specs: { Profil: 'IDEAL 4000', Système: 'Coulissant' },
  },
];
