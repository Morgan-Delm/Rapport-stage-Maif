# C4 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité

## Description

Assurer la gestion, la manipulation et la sécurité des données

---

## Experiences

- [Stage Maif: Development d'une application de sourcing](../Experiences/stage-appli-sourcing.md)

---

## Exemples

- [Staffing](../Exemples/feat-staffing.md)

---

### Analyse des exemples

#### I

Dans l'exemple "[Staffing](../Exemples/feat-staffing.md)", j’ai été amené à concevoir, manipuler et faire évoluer une base de données, tout en assurant l’intégration fluide avec le back-end de l’application. Ce travail illustre pleinement la compétence C4, notamment sur les aspects de modélisation, optimisation et sécurisation des données.

##### Démarche technique
- **Modélisation initiale** : Création d’un schéma de base de données adapté aux besoins métier, en prenant en compte les contraintes de types et de relations (ex. squad_id, tribu_id).
- **Évolution du schéma** : Suite à une revue technique, j’ai ajusté le modèle en supprimant une colonne redondante (tribu_id), démontrant ma capacité à optimiser la structure des données.
- **Utilisation de Liquibase** : Gestion des scripts SQL via un système de versioning, garantissant la traçabilité et la reproductibilité des modifications.
- **Intégration avec l’application** : Mise en place d’un mapping complet entre les entités de la base et les objets métier (DTO, Repository, Service, Controller), assurant une interaction fluide et sécurisée avec les données.

##### Sécurité et qualité
- **Validation des données** via des DTOs et gestion centralisée des exceptions.
- **Tests unitaires** sur les différentes couches (mapping, service, controller) pour garantir la fiabilité des échanges de données.

Ce projet démontre ma capacité à :

- **Concevoir et faire évoluer une base de données relationnelle**.
- **Assurer l’intégrité et la cohérence des données** dans un contexte applicatif.
- **Mettre en œuvre des pratiques de sécurité et de qualité** dans la gestion des données.