# CLAUDE.md

Ce fichier fournit du contexte à Claude Code pour travailler sur ce projet.

## Vue d'ensemble du projet

Portfolio personnel de développeur, en **HTML/CSS/JavaScript pur (vanilla)**, sans framework ni build tool. L'objectif est un site simple, rapide, léger et facile à maintenir.

## Stack technique

- HTML5 sémantique
- CSS3 (pas de framework comme Bootstrap/Tailwind sauf demande explicite)
- JavaScript vanilla (ES6+), pas de librairie sauf nécessité justifiée
- Pas de bundler (Webpack/Vite) ni de dépendances npm, sauf si explicitement demandé
- Le site doit fonctionner en ouvrant simplement `index.html`, ou via un serveur statique simple

## Structure du site

Le portfolio comporte 4 sections/pages principales :

1. **Accueil** — présentation courte, accroche, photo/logo, liens vers réseaux (GitHub, LinkedIn, etc.)
2. **Projets** — grille/liste de projets avec image, titre, description courte, technos utilisées, lien vers démo/code
3. **À propos** — parcours, compétences techniques, stack maîtrisée, éventuellement CV téléchargeable
4. **Contact** — formulaire de contact (ou mailto) et/ou liens directs (email, réseaux sociaux)

Ces sections peuvent être implémentées soit en single-page (ancres `#accueil`, `#projets`, etc.) soit en pages HTML séparées (`index.html`, `projets.html`, `apropos.html`, `contact.html`) — à clarifier avec l'utilisateur si le choix n'est pas encore fait.

## Structure de fichiers recommandée

```
/
├── index.html
├── projets.html (si multi-pages)
├── apropos.html (si multi-pages)
├── contact.html (si multi-pages)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── logo/          ← le logo sera fourni par l'utilisateur
│   │   └── projets/
│   └── fonts/ (si polices custom)
└── CLAUDE.md
```

## Charte graphique et logo

⚠️ **Important : le logo et la charte graphique (couleurs, typographies, style visuel) seront fournis par l'utilisateur.**

- Ne pas générer de logo ni inventer une palette de couleurs définitive sans consulter l'utilisateur.
- Une fois les assets fournis (logo, couleurs, polices), les intégrer et les référencer via des **variables CSS** (`:root { --color-primary: ...; --font-heading: ...; }`) pour garder la cohérence et faciliter les futurs ajustements.
- En attendant les assets définitifs, utiliser des placeholders clairement identifiables (ex: `/* TODO: remplacer par la couleur de la charte */`).

## Conventions de code

- Indentation : 2 espaces
- Noms de classes CSS en `kebab-case`
- HTML sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.)
- CSS organisé avec variables globales en haut du fichier (couleurs, espacements, typographies)
- JavaScript en `camelCase`, fonctions courtes et commentées si logique non triviale
- Pas de code mort, pas de console.log oublié dans le code final

## Accessibilité & performance

- Attributs `alt` sur toutes les images
- Contraste suffisant entre texte et fond
- Site responsive (mobile-first recommandé)
- Images optimisées/compressées
- Éviter les polices/scripts externes lourds non nécessaires

## Ce que Claude Code doit éviter

- Ne pas ajouter de framework CSS/JS sans demande explicite
- Ne pas créer de logo ou de palette de couleurs définitive (fournis par l'utilisateur)
- Ne pas ajouter de dépendances npm/build tools sauf demande explicite
- Ne pas modifier la structure des sections (Accueil/Projets/À propos/Contact) sans validation

## Notes pour Claude Code

- Toujours demander confirmation avant de restructurer l'arborescence des fichiers.
- Si une image/asset attendu (logo, photo, icône) n'est pas encore présent dans `assets/images/`, utiliser un placeholder temporaire et le signaler clairement.
- Prioriser la simplicité et la lisibilité du code plutôt que des solutions techniques complexes.
