---
title: "A11y Canvas — un générateur de chartes graphiques accessibles"
subtitle: "Projet personnel full-stack, conçu et déployé en solo · 2026. Next.js 16 · React 19 · TypeScript · Prisma · MySQL · Auth.js v5"
date: "2026-09-07"
intro: "À partir de 45 ou 50 ans, presque tout le monde finit par plisser les yeux devant un écran. L'accessibilité numérique n'est pas qu'une affaire de handicap : c'est nous, dans vingt ans. A11y Canvas est né de cette conviction — et d'une charte à rendre pour hier."
cover: "./cover.jpg"
---
Un outil en production, gratuit et sans inscription, qui aide à concevoir des interfaces accessibles sans que cela vire au parcours du combattant : [**a11y-canvas.fr**](https://a11y-canvas.fr/).
Ce qui suit raconte pourquoi je l'ai créé, d'où vient son nom, et — pour celles et ceux que la technique intéresse — comment il fonctionne réellement.

## Commençons par une question un peu personnelle

Comment vous imaginez-vous à la retraite ? Tricot, jardinage, pétanque, longues promenades ? Ce sont de très beaux projets. Mais soyons honnêtes : allez-vous vraiment quitter Internet ? Supprimer vos applications, renoncer aux réseaux sociaux, réserver vos vacances par courrier postal ? Moi non plus.

Pourtant, quelque chose finit par changer. À partir de 45 ou 50 ans, la presbytie touche progressivement la quasi-totalité de la population. Après 70 ans, une personne sur quatre environ voit son acuité visuelle baisser sensiblement. Le jour où cela m'est arrivé, j'ai traversé les cinq étapes du deuil — du déni (« c'est l'emballage, forcément ») à la colère (« qui a décidé qu'un texte gris clair sur fond blanc était une bonne idée ? »), jusqu'à l'acceptation, sous la forme de très jolies lunettes, heureusement remboursées par ma mutuelle.

Cette évolution n'a rien changé à mes habitudes numériques. Au contraire : je suis devenue développeuse web, et je compte bien le rester dans vingt ans. C'est là tout le malentendu autour de l'accessibilité numérique. Ce n'est pas un sujet réservé à une minorité : c'est d'abord une question de vieillissement normal. Les personnes âgées ne forment pas un groupe à part — ce sont nos « nous » de demain, si nous avons la chance d'y parvenir.

En tant que développeuse malentendante, équipée d'un implant à ancrage osseux, et future geek retraitée qui exige un web confortable, je vois l'accessibilité comme un investissement dans notre avenir commun. C'est cette conviction — à la fois intime et professionnelle — qui a donné naissance à A11y Canvas.

## Le problème concret que je voulais résoudre

Il existe une situation que beaucoup d'équipes connaissent : une charte graphique à livrer, une échéance le lendemain, et pas de designer sous la main. Vérifier les contrastes, valider chaque couleur au regard des normes WCAG, choisir une typographie lisible sous pression… même avec un solide bagage en design — le mien vient des Beaux-Arts —, c'est long. Sans ce bagage, c'est un véritable casse-tête.

J'aurais pu m'en plaindre. J'ai préféré construire un outil.

## A11y Canvas, en clair

A11y Canvas est un générateur de chartes graphiques accessibles. En quelques minutes, il produit un socle visuel complet — palette de couleurs, typographie, espacements, arrondis, ombres — dont chaque élément est vérifié conforme aux normes WCAG 2.1 AA et au RGAA, le référentiel français de l'accessibilité.

Le principe tient en une idée : la prévisualisation en temps réel. Vous survolez une palette, et une maquette se recolore instantanément sous vos yeux ; chaque combinaison affichée a déjà passé la validation de contraste. Ce qui demanderait des heures de vérification manuelle se compare ici d'un simple coup d'œil.

Un point important, car c'est une confusion fréquente : cet outil n'est pas réservé à un type de page ou de site en particulier. Une charte produite ici est réutilisable partout — applications, sites, interfaces métier, présentations —, partout où les règles de l'accessibilité numérique s'appliquent. C'est un socle, pas un gabarit.

Il est gratuit, sans inscription obligatoire, et déjà en ligne : [a11y-canvas.fr](https://a11y-canvas.fr/).

## Pourquoi « A11y » et pas « Accessibility » ?

Quand j'ai cherché un nom de domaine, j'avais une contrainte simple : il devait être court. « Accessibility », treize lettres, ne l'était pas. Et puis j'ai redécouvert « a11y ».

Entre le « a » et le « y » du mot *accessibility*, il y a exactement onze lettres. D'où : a + 11 + y = a11y. Compact, mémorable — et porteur d'une histoire que je trouve savoureuse.

Tout commence dans les années 1970-80 chez Digital Equipment Corporation (DEC), l'un des pionniers de l'informatique. À l'époque, certains systèmes limitaient les identifiants à huit caractères. Un employé du nom de Scherpenhuizen — quatorze lettres au compteur — se retrouve avec un patronyme bien trop long pour ces contraintes. Un collègue propose alors un raccourci : S + 12 lettres + n = S12n. Une plaisanterie d'ingénieurs : courte, logique, et parfaitement reconstituable dès lors qu'on connaît la règle.

L'idée plaît tant qu'elle devient un jeu de bureau. On abrège tout : *internationalization* devient i18n, *localization* devient l10n, et *accessibility* devient a11y. À l'origine, aucun rapport avec l'accessibilité numérique — juste de l'humour d'ingénieurs contraints par huit malheureuses cases de connexion.

Le véritable envol viendra plus tard, avec Twitter et sa limite de 140 caractères, où écrire « accessibility » en toutes lettres devenait un luxe. Le mot-clic #a11y s'est imposé comme une évidence, et le jargon interne d'une entreprise des années 1970 est devenu le mot de passe d'une communauté mondiale. Détail savoureux pour les initiés : *authorization* s'abrège en a11n — une seule lettre d'écart avec a11y. Les développeurs plaisantent volontiers en disant qu'une faute de frappe suffit à transformer l'accessibilité en gestion des droits d'accès.

Quant à « Canvas », c'est le cœur de l'outil : ce fameux panneau où tout se joue en direct, la couleur qui change à l'instant même où l'on hésite.

## Sous le capot — pour mes collègues et les recruteurs

Voici, sans jargon superflu, ce qui fait tourner l'application.

### La pile technique

A11y Canvas est une application **Next.js 16** (App Router) en **React 19** et **TypeScript strict** — zéro `any`, typage explicite de bout en bout. Les données vivent dans une base **MySQL** pilotée par l'ORM **Prisma** ; l'authentification, par Google ou par e-mail et mot de passe, repose sur **Auth.js v5**, avec hachage bcrypt, limitation des tentatives de connexion et vérification d'adresse e-mail. Le style est écrit en CSS Modules, sans framework utilitaire, et la qualité du code est tenue par **Biome**. L'interface est trilingue — français, anglais, ukrainien — grâce à next-intl.

### Le cœur : un moteur de contraste maison

La partie dont je suis la plus fière ne se voit pas à l'œil nu. C'est un module de calcul qui implémente directement les formules officielles du W3C : la luminance relative d'une couleur, puis le ratio de contraste entre deux teintes. À partir de là, l'outil sait classer n'importe quelle paire de couleurs selon les seuils réglementaires — AA (4,5:1), AAA (7:1) — exactement comme l'exige le RGAA.

Deux mécanismes en découlent. Le premier garantit, pour n'importe quel fond, une couleur de texte toujours lisible : la fonction choisit entre le blanc et le noir celui qui maximise le contraste, avec une garantie mathématique de lisibilité. Le second, plus fin, ajuste automatiquement la luminosité d'une couleur pour atteindre un ratio cible, par recherche dichotomique — une vingtaine d'itérations pour converger vers la valeur juste, au centième de pourcent près.

### Générer une palette entière, conforme par construction

À partir d'une seule couleur de départ, l'algorithme dérive une palette complète — fonds, textes, couleur d'action, accents, couleurs sémantiques (succès, avertissement, erreur), bordures — dont **toutes les paires critiques respectent le niveau AA**. Une dernière étape relit l'ensemble et corrige ce qui doit l'être, avec une petite marge de sécurité pour absorber les arrondis de conversion entre espaces colorimétriques. Le résultat : on ne choisit plus à l'aveugle, on choisit en connaissance de cause.

C'est là qu'intervient une fonctionnalité que j'aime particulièrement : les **courbes iso-contraste en temps réel**. Sur le sélecteur de couleur, des lignes-guides indiquent, en direct, les zones où la teinte choisie franchira les seuils AA et AAA — face au texte blanc comme au texte sombre. On voit les frontières de l'accessibilité se déplacer avec le curseur, avant même de lancer la génération. Plus de mauvaise surprise en bout de course.

### Du token à l'export

Toute la charte s'exprime en *design tokens* — des variables CSS réutilisables, langage commun entre le générateur, l'aperçu et l'export. Une même configuration se prévisualise sur deux structures de maquette, « App » et « Vitrine », pour vérifier qu'une palette tient aussi bien dans une interface applicative que sur une page de présentation. Elle s'exporte ensuite en CSS ou en JSON, prête à intégrer dans n'importe quel projet.

### En production, pour de vrai

A11y Canvas n'est pas une démonstration qui tourne sur ma machine : le site vit sur un serveur VPS sous Ubuntu, derrière un reverse proxy Nginx, en HTTPS (certificat Let's Encrypt), avec la base de données conteneurisée via Docker et le processus Node supervisé par PM2. Chaque `git push` sur la branche principale déclenche un déploiement automatique via GitHub Actions : la chaîne complète — récupération du code, régénération du client Prisma, migrations de la base, build de production, redémarrage du service — s'exécute sans la moindre intervention manuelle.

## Un clin d'œil avant de conclure

L'application est pensée pour le bureau, là où l'on travaille réellement une charte graphique. Mais pour celles et ceux qui la découvrent sur mobile, j'ai laissé un lot de consolation : un petit cube façon Rubik's aux couleurs d'A11y Canvas, que l'on peut colorier et faire tourner dans tous les sens. Non, on ne peut pas le résoudre — il y a tout de même des limites à mes compétences. Et oui, le sélecteur de palettes en roue, réservé au mobile, est très satisfaisant à faire tourner. Je confirme.

## Pour finir

A11y Canvas est un outil pensé par une développeuse qui connaît les deux côtés de l'écran : celui qui conçoit, et celui qui a parfois du mal à lire. Il est gratuit, en production, et il continue d'évoluer au fil des retours.

Parce qu'un web de meilleure qualité, c'est un web pensé pour nous tous — y compris pour les personnes que nous serons dans vingt ans.

Venez l'essayer : [**a11y-canvas.fr**](https://a11y-canvas.fr/). Et si une palette vous fait de l'œil, faites-moi signe.
