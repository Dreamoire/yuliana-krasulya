---
title: "Epic Battle: projet canvas en React & TypeScript"
subtitle: "Apprendre à faire confiance au retour de la lumière "
date: "2025-12-31"
intro: "Ce projet est né d’un jeu… et m’a permis d’en créer un autre. Dans le cadre d’un jeu de Secret Santa à la Wild Code School, nous avions une mission: créer une page web pour féliciter un·e camarade tiré·e au sort. "
cover: "./cover.jpg"
---
Le hasard m’a confié Thibaut.
Sachant que Thibaut aime autant l’histoire que les jeux vidéo, j’ai eu envie de lui offrir autre chose qu’un simple message : une petite expérience ludique, une page où l’on peut canaliser sa colère, cliquer vite… et éliminer des monstres à l’infini.

D’où vient cette idée de jeu avec des monstres? Au départ, rien à voir avec un chevalier. Je voulais m’entraîner en créant une sorte de clone d’Excalidraw: une feuille blanche, sur laquelle on peut dessiner, écrire, gribouiller. Et puis je suis tombée sur une découverte qui m’a littéralement rendue heureuse :
 `<canvas>`, l’élément HTML de canevas graphique.

Quelle joie! Un peu comme découvrir une poche secrète dans sa veste préférée.
Ou ouvrir un paquet de pistaches… et tomber sur des pistaches déjà décortiquées.
J’ai commencé à explorer ce qu’on pouvait faire avec `<canvas>`, et je suis tombée sur ShapesShooter sur CodePen. Des formes géométriques qui bougent, qu’on clique, qui disparaissent.

Dans ma tête, ça a été immédiat. Les formes sont devenues des monstres. Au centre: un chevalier en armure, une épée à la main. La scène était déjà là.  Je n’ai même pas ouvert Figma: le layout était terminé… dans mon imagination.

J’ai ensuite généré — à l’aide de l’IA et d’un nombre non documenté de cafés — toute une horde de monstres. Certains portent des noms inspirés de messages d’erreur bien connus. D’autres contiennent des références que seuls les membres de notre promo comprendront. C’est volontaire. C’est «pour les initiés». 
Le résultat: un petit champ de bataille, à mi-chemin entre pixel art, dark fantasy et humour de dev fatigué.

### Partie technique
- React + TypeScript
- Canvas API
- Vite
- Biome
- CSS responsive
- Déploiement: Vercel

### Défis rencontrés et solutions

**1 Gérer un jeu en temps réel sans rerender React**

L’un des premiers défis a été de comprendre que React n’est pas conçu pour animer un jeu frame par frame.

👉 Problème

 Mettre l’état du jeu (positions, monstres, score) dans le state React provoquait trop de rerenders et des chutes de performance.

👉 Solution

- Utilisation massive de *useRef* pour stocker:

    l’état du héros

    les monstres actifs

    le score courant


- Une *boucle d’animation* (requestAnimationFrame) entièrement gérée hors du cycle React

- React reste responsable de l’UI (start, score, overlays), pas du moteur du jeu


➡️ Résultat : animation fluide, logique claire, React utilisé pour ce qu’il fait le mieux.

**2 Canvas + résolution écran (retina, responsive)**

Un canvas flou sur écran retina est un classique… que j’ai rencontré immédiatement.

👉 Problème

 Un canvas redimensionné uniquement via CSS devient flou sur les écrans à forte densité de pixels.

👉 Solution

Calcul dynamique du *devicePixelRatio*

Redimensionnement interne du canvas *(width / height) + ctx.setTransform*s

Synchronisation stricte entre taille CSS et taille réelle du canvas


➡️ Résultat : rendu net, quelle que soit la résolution.

**3 Typage strict des assets et des entités**

Avec TypeScript + Biome, impossible de «bricoler».

👉 Problème

 Ajouter un nouveau monstre ou asset générait rapidement des erreurs de typage incohérentes.

👉 Solution

Création de l'union types stricts (MonsterKey, AssetKey)

Centralisation des assets dans des structures typées

Typage explicite des rôles, directions, états de jeu

➡️ Résultat:
Moins d’erreurs silencieuses

Un ajout de monstre devient une opération claire et contrôlée.

Merci d’avance pour le coup d’œil.

Les monstres vous attendent en carrousel — et sur le site, si vous avez l’audace, de bons réflexes et une épée bien affûtée.

Et bonne chasse!

🔗 **Site du projet** :  
[https://ts-epic-battle.vercel.app](https://ts-epic-battle.vercel.app)

💻 **Code source (GitHub)** :  
[https://github.com/Dreamoire/ts-epic-battle](https://github.com/Dreamoire/ts-epic-battle)
