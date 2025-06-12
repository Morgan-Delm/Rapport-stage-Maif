# C2 : Optimiser des applications informatiques

## Description 

Sélectionner les algorithmes adéquats pour répondre à un problème donné

---

## Experiences

- [Stage Maif: Development d'une application de sourcing](../Experiences/stage-appli-sourcing.md)

---

## Exemples

- [Feature : Colonne Pièces jointes](../Exemples/feat-colonne-PJs.md)
- [Migration / Refactorisation des composants](../Exemples/refacto-rmc-plume.md)

---

### 🔍 Analyse des exemples

#### I

Dans l'exemple "[Feature : Colonne Pièces jointes](../Exemples/feat-colonne-PJs.md)" j’ai mené une optimisation du code existant en procédant à une refactorisation des composants PjsExistantes et PjsNouvelles. Ces deux composants, bien que similaires, étaient redondants et complexifiaient la maintenance du code.

##### Démarche d’optimisation
- **Analyse du code existant** : J’ai identifié que la seule différence notable entre les deux composants résidait dans la gestion de la suppression des pièces jointes.
- **Refactorisation** : J’ai fusionné les deux composants en un seul composant générique, avec une prop conditionnelle pour gérer l’affichage du bouton de suppression.
- **Modularité accrue** : J’ai également créé un composant dédié à l’affichage des pièces jointes (AfficherPJs), rendant le code plus clair, réutilisable et évolutif.

Cette intervention démontre ma capacité à :

- **Analyser un code existant** pour en identifier les redondances.
- **Choisir une approche algorithmique et structurelle plus efficace**.
- **Mettre en œuvre une refactorisation** orientée performance et lisibilité.

#### II

Dans l'exemple "[Migration / Refactorisation des composants](../Exemples/refacto-rmc-plume.md)" j’ai identifié la présence résiduelle de composants issus de l’ancienne bibliothèque RMC (React Maif Component), aujourd’hui obsolète. J’ai pris l’initiative de migrer ces composants vers leur équivalent dans la bibliothèque actuelle, Plume, plus moderne, maintenue et performante.

##### Démarche d’optimisation
- **Audit du code existant** : J’ai repéré plusieurs composants RMC encore utilisés (Input, Checkbox, SimpleTable, Tooltip, PopIn, RadioGroup).
- **Analyse comparative** : Pour chaque composant, j’ai identifié son équivalent dans Plume, en tenant compte des différences d’API et de comportement.
- **Refactorisation progressive** : J’ai remplacé les composants RMC par leurs homologues Plume, en adaptant le code pour garantir une compatibilité fonctionnelle et visuelle.

Cette intervention illustre ma capacité à :

- **Identifier des opportunités d’optimisation** dans un projet existant.
- **Choisir des solutions techniques pertinentes** (ici, migration vers une bibliothèque plus performante).
- **Mettre en œuvre une refactorisation structurée** pour améliorer la qualité globale de l’application.