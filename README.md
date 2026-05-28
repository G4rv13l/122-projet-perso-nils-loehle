# Mon projet 122

Projet JavaScript — Cours 122 (ESIG)

## Description

J'ai décidé de constituer un projet de listing de films.
Je n'irai pas jusqu'à me considérer comme un cinéphile accompli, mais je diversifie le plus possible les
films que je regarde. Récemment, j'ai revu de belles œuvres et à d'autres moment, simplement me vider l'esprit.

Je regarde beaucoup de films, j'ai donc listé ceux que j'ai vus il y a moins de 6 mois.
Le mélange est assez varié.

## Lien GitHub Pages

[Mon site Web](https://g4rv13l.github.io/122-projet-perso-nils-loehle/)

## Fonctionnalités

- [x] Recherche en temps réel
- [x] Affichage dynamique de la liste
- [x] Ajout via formulaire
- [x] Responsive (mobile + desktop)
- [ ] Tri par plusieurs critères
- [ ] Suppression d'éléments

## Captures d'écran

[Ajoute des captures de ton projet ici]

## Transparence IA
- Transmission de prompt et de l'historique de discussion complet avec les modèles utilisés.

### Outils utilisés
J'utilise principalement l'outil français Mammouth Ai qui permet l'accès à un bouquet très vaste de modèles IA, pour
un prix dérisoire. Les modèles que j'utilise le plus couramment sont Claude (Sonnet) pour l'aide concernant le code,
ChatGpt pour la compréhension/vulgarisation de concepts théoriques et perplexity pour la recherche d'information.

### Prompts utilisés
- [Décomposition feature d'ajout de film](https://mammouth.ai/shared/153b7f73-fcca-4e07-b712-68ca6d1e3a34)
- [Questionnement sur les types durant documentation + problème de push + compréhension générale](https://mammouth.ai/shared/151ea116-8913-434b-b466-042fe8de9232)

### Ce que j'ai appris vs ce que l'IA a généré
#### IA
- Claude (Sonnet) m'a permis de localiser des erreurs bêtes (.value oublié durant la récupération de mes champs par ex.)
- J'ai aussi utilisé Claude pour générer la structure du tableau d'objet pour le listing des films
- Je me suis constitué des supports PDF de synthèse du cours gitbook, pratique pour passer en revue certains sujets
rapidement durant le développement.
- L'IA est un outil formidable pour aider à cadrer ma pensée, j'ai tendance à vouloir tout faire en même temps et le
fait de pouvoir se constituer un plan d'attaque est très appréciable.

#### Connaissances acquises
- J'ignorais l'existence des aria-label, cela me permet de respecter la sémantique du formulaire sans devoir afficher
un élément que j'aurais dû masquer plus tard.