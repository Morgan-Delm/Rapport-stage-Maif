
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
Cependant, lors de la review, mon collègue m'a signalé que cela pourrait potentiellement provoquer quelques problèmes dans le futur si le besoin de l'utilisateur évolue.

![Retour Reveiw](img/staffing/retourReviewContrainteSchemaBD.png)


Afin de construire les endpoints de l'API, il a fallu :
+ Le model
+ Le Dto
+ Le mapping (pour faire le lien entre les deux précédents)
+ Le repository
+ Le service
+ Le controller
+ Un gestionnaire d'exception

#### 📸 Captures d’écran

![Schema BD](img/staffing/code/schemaBD.png)

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

---

### Dixième étape : Calcul des charges

#### 🎫 Ticket

![Ticket Jira](img/staffing/ticket/calcul-charges.png)

#### 📸 Captures d’écran















