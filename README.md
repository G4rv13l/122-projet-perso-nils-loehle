# Mon projet 122

Projet JavaScript — Cours 122 (ESIG)

## Description

J'ai décidé de constituer un projet de listing de films.
Je n'irais pas jusqu'à me considérer comme un cinéphile accompli, mais j'essaie de diversifier les
films que je regarde. Récemment, j'ai revu des classiques et à d'autres moments, simplement de quoi me vider l'esprit.

J'ai listé ceux que j'ai vus il y a moins de 6 mois.

## Lien GitHub Pages

[Cinematon](https://g4rv13l.github.io/122-projet-perso-nils-loehle/)

## Fonctionnalités

- [x] Recherche en temps réel
- [x] Affichage dynamique de la liste
- [x] Ajout via formulaire
- [x] Responsive (mobile + desktop)
- [x] Tri par plusieurs critères (assez fier de mon rébus)
- [x] Suppression d'éléments

## Captures d'écran
<img src="https://i.postimg.cc/13RvJmqW/version-bureau.png" height="100" alt="version-bureau">
<img src="https://i.postimg.cc/BbcCBkQ0/capture-responsive.png" height="100" alt="capture-responsive">
<img src="https://i.postimg.cc/9FCbQmJf/le-meilleur-menu-de-tri.png" height="100" alt="le-meilleur-menu-de-tri">

## Transparence IA
- Transmission de prompts et de l'historique de discussion complet avec les modèles utilisés.

### Outils utilisés
J'utilise principalement l'outil français Mammouth Ai qui permet l'accès à un bouquet très vaste de modèles IA, pour
un prix dérisoire. Les modèles que j'utilise le plus couramment sont Claude (Sonnet) pour l'aide concernant le code,
ChatGPT pour la compréhension/vulgarisation de concepts théoriques et Perplexity pour la recherche d'informations.

Pour les longs textes, j'utilise aussi Typeless.

### Prompts utilisés
- [Recherche sources fiables pour bonnes pratiques](https://mammouth.ai/shared/55e63b85-28bd-43ff-bdd7-5df3ae86e10e)
- [Décomposition feature d'ajout de film](https://mammouth.ai/shared/153b7f73-fcca-4e07-b712-68ca6d1e3a34)
- [Questionnement sur les types durant documentation + problème de push + compréhension générale](https://mammouth.ai/shared/151ea116-8913-434b-b466-042fe8de9232)
- [Question propriété CSS transition](https://mammouth.ai/shared/b144807e-8850-46a2-95a0-eedd84335291)
- [Gestion du viewport pour mobile](https://mammouth.ai/shared/c643f314-6479-4766-b173-85ab085693e7)

### Sources consultées
- [CSS - Flex direction](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/flex-direction)
- [CSS - RGBA](https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- [CSS - Transition](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/transition)
- [CSS - Propriété grid ](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/grid)

### Ce que j'ai appris vs ce que l'IA a généré
#### IA

- Claude (Sonnet) m'a permis de localiser des erreurs bêtes (oublis, inattention)
- J'ai aussi utilisé Claude pour générer la structure du tableau d'objet pour le listing des films
- Je me suis constitué des supports PDF de synthèse du cours GitBook, pratique pour passer en revue certains sujets
rapidement durant le développement.
- L'IA est un outil formidable pour aider à cadrer ma pensée, j'ai tendance à vouloir tout faire en même temps et le
fait de pouvoir se constituer un plan d'attaque est très appréciable.

#### Connaissances acquises

- J'ignorais l'existence des aria-label, cela me permet de respecter la sémantique du formulaire sans devoir afficher
un élément que je masquerai plus tard.
- Connaissances mises à jour sur la propriété CSS transition, j'ignorais que l'on pouvait affecter plusieurs éléments
en ajoutant une virgule
- Je fais encore l'erreur assez souvent, mais lorsqu'on récupère un élément, il faut ajouter le suffixe "value" pour
accéder à son contenu, je ne compte plus le nombre de fois où cet oubli m'a donné du fil à retordre.
- Pouvoir assigner une valeur à une propriété inexistante d'un objet en JavaScript. (typiquement, ce que j'ai utilisé
pour l'assignation de l'ID pour mes films, pour pouvoir a posteriori les supprimer.)

### Améliorations

- Utiliser une API pour aller récupérer les images d'affiche des films (TheMovieDatabase par ex.)

### Suggestion personnelle

Lors de la réalisation de ce projet, il me semble (je ne m'en souviens plus) que vous aviez évoqué la possibilité
d'utiliser une partie du code que vous aviez publié pour démarrer l'exercice, au moment où il devenait intéressant
d'apporter sa propre patte au travail demandé.

J'ai constaté autour de moi que beaucoup d'étudiants avaient utilisé vos extraits de code pour lancer leur projet,
et j'ai donc fait de même. Après avoir relu vos consignes, ce n'était pas explicitement spécifié, j'ignore donc si
c'était autorisé ou non. À l'avenir, je pense que c'est un point qui pourrait être précisé davantage.