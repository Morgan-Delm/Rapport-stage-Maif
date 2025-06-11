
# Staffing

## Description

La partie staffing est une troisième partie de l'application qui n'existait pas.  
Il s'agissait de créer une première version de cette fonctionnalité afin de voir quels points seraient utiles et ce à quoi il faudrait penser dans le but de la rendre utilisable.

---

### Besoin

À l'heure actuelle, les affectations des personnels au sein de la Maif (du moins pour la DSI) est géré dans un fichier excel 
et si une personne change d'équipe, il n'y a pas de trace de ses affectations précédentes.

---

### Première étape : un modèle back-end

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/modele-donnee.png)

![Champs nécessaires](img/staffing/ticket/saisie.png)

D'après les données requises, j'avais dans un premier temps placé des contraintes sur le type et le statut.
Cependant, lors de la revue, mon collègue m'a signalé que cela pourrait potentiellement provoquer quelques problèmes dans le futur si le besoin de l'utilisateur évolue.

![Retour Review](img/staffing/retourReviewContrainteSchemaBD.png)

Le schéma de la table staffing ressemblait donc à ceci dans un premier temps:  

![Schema BD](img/staffing/code/schemaBD.png)

Il est important de noter que dans ce projet, la base donnée est gérée par liquid base.  
Le fichier `db.changelog-master.yaml` contient la liste des fichiers sql à exécuter dans l'ordre.

L'une des règles d'équipe sur ce projet est qu'on ne peut plus modifier un fichier sql une fois qu'il a été validé et intégré dans la branche de développement.  
Par la suite, je me suis rendu compte que l’attribut `tribu_id` n’était pas indispensable. En effet, l’attribut `squad_id` suffisait, puisqu’une squad est toujours rattachée à une tribu. Par conséquent, j’ai dû créer un second fichier SQL pour effectuer les ajustements nécessaires.

![Script SQL Drop column tribu_id](./img/staffing/code/modifTable1.png)

#### 🔌 API

Afin de construire les endpoints de l'API, il a fallu :
+ Le model
+ Le Dto
+ Le mapping (pour faire le lien entre les deux précédents)
+ Le repository
+ Le service
+ Le controller
+ Un gestionnaire d'exception


#### ✅ Tests

- Tests du mapping :  
![Tests du mapping](img/staffing/test/testStaffingMapping.png)

- Tests du controller :  
![Tests du controller](img/staffing/test/staffingControllerTest.png)

- Tests du service :  
![Tests du service](img/staffing/test/staffingServiceTest.png)

---

### Deuxième étape : lister

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/liste.png)

#### 📸 Captures d’écran

![Tableau](img/staffing/tableau.png)

---

### Troisième étape : Ajouter

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/saisie.png)

#### 📸 Captures d’écran

![Page d'ajout](img/staffing/ajout.png)

---

### Quatrième étape : Detail

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/detail.png)

#### 📸 Captures d’écran

![Page detail](img/staffing/modif.png)

---

### Cinquième étape : Supprimer

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/supprimer.png)

#### 📸 Captures d’écran

![Bouton supprimer](img/staffing/supprimer.png)

---

### Sixième étape : Filtrer

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/filtre.png)

#### 📸 Captures d’écran

![Tableau filtré](./img/staffing/tableauFiltrer.png)

---

### Sixième étape : Mise en forme

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/mise-en-forme-filtres.png)

#### 📸 Captures d’écran

![Filtre mis en forme](img/staffing/filtres.png)

---

### Septième étape : Exporter

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/export.png)

#### 📸 Captures d’écran

![Exporter le tableau](img/staffing/exporter.png)

---

### Huitième étape : Champ commentaire

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/champ-commentaire.png)

#### 📸 Captures d’écran

![Champ commentaire](img/staffing/champCommentaire.png)

---

### Neuvième étape : Changement d'affectation

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/changement-affectation.png)

#### 📸 Captures d’écran

![Ecran de changement d'affectation](./img/staffing/changementLigneStaffing.png)

---

### Dixième étape : Calcul des charges

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/calcul-charges.png)

#### 📸 Captures d’écran

Pour les internes :  

![Calcul charges pour les internes 199](./img/staffing/interne199.png)
![Calcul charges pour les internes 398](./img/staffing/interne398.png)
  
Pour les externes :  

![Calcul des charges pour les externes 210](./img/staffing/externe210.png)
![Calcul des charges pour les externes 420](./img/staffing/externe420.png)












