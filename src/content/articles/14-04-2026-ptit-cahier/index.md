---
title: "P'tit Cahier — une application full-stack construite de A à Z, du composant au déploiement"
subtitle: "Projet de fin de formation DWWM · Wild Code School · Décembre 2025 – Février 2026. React 19 · TypeScript · Node.js / Express · MySQL · Monorepo"
date: "2026-04-15"
intro: | 
  Il y a des projets qu'on fait pour cocher une case. Et il y a ceux qui vous transforment en développeur. P'tit Cahier, c'est le deuxième.
  C'est l'application que j'ai conçue et développée avec trois collègues dans le cadre du Titre Professionnel Développeur Web et Web Mobile, à la Wild Code School. 
cover: "./cover.jpg"
---
Une plateforme de communication entre les écoles primaires et les parents d'élèves — un « cahier de liaison numérique » — déployée en production et accessible à l'adresse [**ptit-cahier.fr**](https://ptit-cahier.fr).
  Ce qui va suivre est l'histoire de ce projet : ses choix techniques, ses galères, son déploiement héroïque, et ce que j'y ai appris — sur le code, sur le travail en équipe, et un peu sur moi-même.

## Le problème qu'on résout
En France, la communication entre l'école et les familles repose encore largement sur un cahier papier que l'enfant transporte dans son cartable. Le problème est évident : l'enfant oublie, le document se perd, l'information n'arrive jamais.

Imaginez : un jour de grève de la cantine, une maman arrive à l'école et découvre que son enfant n'aura pas de déjeuner. D'autres parents avaient été prévenus — pas elle. Ou encore : une sortie scolaire en Allemagne nécessite une autorisation signée. L'enfant reçoit le document, ne le transmet pas. Trop tard, il ne partira pas.

Le problème n'est jamais la mauvaise volonté. C'est l'absence d'un canal fiable, centralisé et indépendant de l'enfant. C'est exactement ce que P'tit Cahier propose.

## Ce que j'ai construit
Au sein de l'équipe de quatre, chacun était responsable de ses fonctionnalités de bout en bout — du composant React jusqu'à la requête SQL. Voici ce que j'ai personnellement développé.

### L'architecture des layouts — la décision qui a structuré tout le reste
L'application sert deux types d'utilisateurs très différents : les parents et l'école. Ils n'accèdent pas aux mêmes pages, ne voient pas les mêmes données, ne disposent pas des mêmes actions. Quand j'ai commencé à travailler sur la barre de navigation, j'ai réalisé qu'il n'existait aucun mécanisme pour séparer ces deux univers.

J'ai proposé à l'équipe la création de deux layouts distincts — `ParentLayout` et `SchoolLayout` — chacun encapsulant ses propres pages, sa propre navbar, ses styles et sa propre logique de protection des routes. L'équipe a validé. J'ai implémenté. Et ensuite, j'ai adapté les styles CSS de toutes les pages existantes à cette nouvelle architecture.

Concrètement, si un parent tente d'accéder à une page de l'école, le système le redirige automatiquement — la protection se fait au niveau du routeur React, avant même que la page ne soit rendue. La navbar s'adapte dynamiquement au rôle : barre latérale verticale sur desktop (avec un mécanisme de pin/unpin au survol), barre horizontale en bas d'écran sur mobile. Deux jeux de couleurs : bleu-gris pour l'école, touches pastel pour les parents.

Ce n'est pas la fonctionnalité la plus spectaculaire du projet. Mais c'est celle qui a eu le plus d'impact — un choix architectural qui a donné sa colonne vertébrale à l'ensemble de l'application.

### Le fil de tickets côté école — ma première traversée full-stack
C'est la fonctionnalité qui m'a fait comprendre ce que « full-stack » signifie concrètement. L'école consulte les demandes envoyées par les parents, avec un système de filtrage à trois niveaux : par statut (total, traité, non traité — avec compteurs dynamiques), par catégorie (Urgence, Absence, Divers, Autorisation — en sélection multiple), et par date.

Le composant `TicketCard` affiche chaque demande avec un panneau latéral coloré selon la catégorie, le nom du parent, le contenu tronqué, et un badge de statut. Tout le filtrage et le tri se font côté client, en mémoire, après le chargement initial — réactivité immédiate, zéro requête supplémentaire.

Côté serveur, la requête SQL qui alimente cette page est probablement la plus complexe du projet : elle joint cinq tables (ticket, ticket_category, parent, ticket_student, student, classroom) et utilise `GROUP_CONCAT` pour rassembler les noms des élèves concernés. Un détail qui peut paraître anodin mais qui est techniquement intéressant : le ticket n'a pas de lien direct avec l'école en base de données — il faut remonter la chaîne élève → classe → école pour filtrer. Ce genre de subtilité, on ne l'apprend pas en cours. On l'apprend en écrivant la requête.

### La modale de détail — avec changement de statut en temps réel
Quand l'école clique sur un ticket, une modale s'ouvre avec le contenu complet et un bouton pour changer le statut (traité / non traité). Le changement déclenche une requête `PATCH` vers le serveur, et l'état est mis à jour simultanément dans la modale et dans la liste derrière — sans rechargement, sans délai perceptible.

La modale intègre les bonnes pratiques d'accessibilité : `role="dialog"`, `aria-modal="true"`, gestion du focus à l'ouverture, fermeture par Escape, clic sur l'overlay, et blocage du scroll en arrière-plan.

## La stack technique
Pour les recruteurs et profils RH qui lisent ceci : la stack technique, c'est l'ensemble des outils et langages utilisés pour construire l'application. Voici les nôtres, en version lisible.

**Côté interface utilisateur** (ce que voit l'utilisateur dans son navigateur) : React 19 avec TypeScript, stylisé avec CSS Modules — pas de bibliothèque de composants toute faite, du CSS écrit à la main pour garder le contrôle total sur le design. Navigation gérée par React Router DOM v7 avec des routes imbriquées et protégées par rôle.

**Côté serveur** (la logique invisible qui traite les données) : Node.js 20 avec Express et TypeScript. Chaque requête passe par une chaîne de middlewares : vérification du token d'authentification, vérification du rôle, validation des données avec Joi, puis seulement le traitement. Les mots de passe sont hachés avec Argon2id — l'algorithme recommandé par l'OWASP — et l'authentification repose sur des tokens JWT signés.

**Base de données** : MySQL 8.0, avec des requêtes SQL écrites directement (pas d'ORM), des requêtes paramétrées pour empêcher toute injection SQL, et une modélisation en 11 tables incluant deux tables de liaison.

**Qualité de code** : Biome (linting + formatage en un seul outil) pour garantir un style cohérent entre les quatre développeurs.

## La sécurité — pas un chapitre à part, une philosophie
La sécurité n'est pas une couche qu'on ajoute à la fin. C'est une préoccupation intégrée à chaque niveau de l'application :

Le hachage des mots de passe avec Argon2id et des paramètres conformes aux recommandations OWASP. L'authentification par JWT avec expiration d'une heure, et une clé de signature stockée exclusivement en variable d'environnement. Le contrôle des rôles via des sous-routeurs dédiés — un parent ne peut *jamais* accéder aux routes de l'école, et inversement. La vérification d'appartenance des données — un parent ne peut créer un ticket que pour ses propres enfants, vérification faite côté serveur. La validation systématique des données entrantes avec Joi, avant tout traitement. Les requêtes SQL paramétrées, sans aucune concaténation de chaîne. La configuration CORS restreinte à l'URL du client.

Et un détail que j'apprécie particulièrement : le serveur renvoie le même code d'erreur, que l'email soit inconnu, que le rôle ne corresponde pas, ou que le mot de passe soit incorrect. Un attaquant ne peut pas deviner quels comptes existent. C'est ce qu'on appelle des « réponses non discriminantes » — un petit détail qui fait une grande différence en sécurité.

## Le déploiement — l'audace des débutants
C'est ici que l'histoire devient personnelle.

Le déploiement en production a été la partie la plus exigeante, la plus terrifiante et la plus formatrice de tout le projet. La formation n'avait pratiquement pas abordé le DevOps. J'ai fait l'intégralité de la mise en production seule — de la configuration du serveur VPS OVHcloud sous Ubuntu 24.04 LTS à la vérification finale dans le navigateur.

Connexion SSH par clé Ed25519 (mot de passe désactivé). Clonage du dépôt. Installation des dépendances. Création de la base MySQL. Configuration de Nginx en reverse proxy. Gestion du processus Node.js via PM2. Variables d'environnement de production. Build du frontend. Test. Débogage. Re-test.

Chaque erreur de configuration — et il y en a eu — m'amenait à consulter la documentation, analyser les logs, expérimenter. C'est un apprentissage entièrement autonome, et probablement le plus précieux de toute ma formation.

### L'Affaire ticket.ts — ou comment un bug nous a harcelés pendant deux mois
Et puis il y a eu *le* bug. Celui qui nous a accompagnés pendant toute la durée du développement, fidèle comme un mauvais horoscope.

Au début du projet, deux fichiers TypeScript côté serveur — `Ticket.ts` et `School.ts` — avaient été créés avec une minuscule initiale : `ticket.ts`, `school.ts`. Le nommage a été corrigé rapidement. Fin de l'histoire ? Pas du tout.

Le problème réapparaissait systématiquement. Après chaque merge, chaque pull, chaque création de branche. Les imports, écrits avec une majuscule (`import type { Ticket } from "../../types/express/Ticket"`), ne correspondaient plus au nom réel du fichier. Compilation : échec. Solution : renommer manuellement. Durée de la solution : jusqu'au prochain pull.

Quatre développeurs, deux mois, un rituel collectif de renommage. On aurait pu en faire un sprint planning à lui tout seul.

Et c'est lors du déploiement sur le serveur Linux que *l'illumination* m'est venue — un de ces moments où on passe de l'incompréhension totale à « mais c'est ÉVIDEMMENT ça ». Sur Windows et macOS, le système de fichiers est insensible à la casse : `ticket.ts` et `Ticket.ts` sont considérés comme le même fichier. Quand on renomme en changeant uniquement la casse, Git ne détecte pas toujours la modification et conserve l'ancien nom dans son historique. Mais sur Linux — le système de notre serveur de production — la casse est significative. `ticket.ts` et `Ticket.ts` sont deux fichiers totalement distincts. Les imports cherchaient `Ticket.ts`, trouvaient... rien. Backend : refus catégorique de démarrer.

La solution : corriger les noms de fichiers directement sur le serveur. Une fois l'harmonisation faite, le bug a disparu. Définitivement. Deux mois de souffrance, résolus en une commande `mv`.

Si vous développez sur Windows ou macOS et déployez sur Linux : vous êtes prévenus. La casse n'est pas une suggestion, c'est la loi.

## L'accessibilité — pas un bonus, une conviction
J'ai introduit dans le projet une dimension qui ne figurait pas dans le cahier des charges initial : l'accessibilité numérique. Ce n'est pas une surprise pour ceux qui me connaissent — étant moi-même malentendante et appareillée, je sais ce que signifie être exclue d'un outil parce que personne n'a pensé à vous.

Dès la phase de conception des maquettes, j'ai orienté les choix typographiques et chromatiques vers une lisibilité optimale : polices adaptées, vérification des niveaux de contraste, hiérarchie visuelle claire. En fin de projet, j'ai complété cette démarche par l'implémentation d'une navigation intégralement opérable au clavier sur la version desktop, ainsi que par l'ajout d'attributs ARIA sur les éléments interactifs et d'une classe utilitaire `.sr-only` pour les lecteurs d'écran.

L'accessibilité n'est pas un label qu'on ajoute en fin de projet. C'est une façon de concevoir. Et c'est la direction dans laquelle je veux développer ma spécialité professionnelle.

## Ce que j'en retiens
**Sur le plan technique**, ce projet m'a fait traverser la totalité de la chaîne de développement : des maquettes Figma au déploiement sur serveur, en passant par les composants React, les requêtes SQL avec jointures multiples, l'authentification JWT, le hachage Argon2id, la configuration Nginx. Je ne connaissais pas la moitié de ces outils il y a cinq mois.

**Sur le plan humain**, travailler sur un sujet que je ne connaissais pas — la communication scolaire, un monde dont je n'avais aucune expérience personnelle — m'a obligée à développer une compétence que le code seul ne donne pas : la capacité à comprendre un domaine métier par l'écoute et le questionnement. Écouter mes collègues parents d'élèves, interroger mes amis, observer les usages réels. C'est cette démarche qui a permis de créer des données de démonstration crédibles et une application qui parle à son public.

**Sur le plan organisationnel**, notre équipe est passée de six à quatre membres en cours de route. Reprioriser, accepter que certaines fonctionnalités ne seraient pas livrées, concentrer l'effort sur un produit fonctionnel, déployé et démontrable plutôt qu'ambitieux et inachevé — c'est une leçon que je n'oublierai pas.

## Ce qui reste à faire
P'tit Cahier est un produit fonctionnel, mais plusieurs évolutions le rapprocheraient d'un usage réel : HTTPS avec certificat Let's Encrypt, notifications en temps réel via WebSocket, agenda personnalisé pour les parents, système d'accusé de réception des annonces, pipeline CI/CD pour automatiser les déploiements, et — pourquoi pas — une Progressive Web App pour une expérience native sur smartphone.
La version actuelle est en ligne, en mode démonstration : [**ptit-cahier.fr**](https://ptit-cahier.fr).

Pour mes collègues développeurs et les recruteurs qui souhaitent plonger dans les détails techniques — architecture, extraits de code, modélisation de la base de données, jeu d'essai complet — j'ai préparé le dossier projet complet, disponible en téléchargement [**ici**](/Dossier-Projet-Ptit-Cahier.pdf). Attention : le fichier pèse environ 6 Mo. Prévoyez un bon wifi.
