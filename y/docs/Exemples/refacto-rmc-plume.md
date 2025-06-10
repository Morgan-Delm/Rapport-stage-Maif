
# Migration / Refactorisation des composants

## Description

La Maif utilise une bibliothèque de composant react interne.  
Actuellement la bibliothèque utilisée et maintenue est Plume, il s'agit d'une évolution de la précédente : RMC (React Maif Component), qui n'est plus maintenue.


Au fil de mon travail sur le projet, j'ai remarqué qu'il restait un certain nombre de composants qui venait encore de RMC.
Après avoir consulté un collègue afin de m'assurer de la pertinence de la démarche, j'ai pris l'initiative de migrer les composants RMC vers leur équivalent ou leur version plus adaptée sur Plume.

---

### Migrations des composants Input

- Avant :  
![TextInput avant migration](img/refacto/rmc/TextInput.png)


- Apres :  
![StringFormFragment après migration](./img/refacto/plume/stringFormFragment.png)

---

### Migration des composants Checkbox

- Avant :  
![Checkbox avant migration](img/refacto/rmc/Checkbox.png)


- Apres !  
![CheckBocFormFragment après migration](./img/refacto/plume/checkBoxFormFragment.png)

---

### Migration des composants SimpleTable

- Avant :  
![SimpleTable avant migration](img/refacto/rmc/SimpleTable.png)


- Apres :  
![Table après migration](./img/refacto/plume/table.png)

---

### Migration des  composants Tooltip

- Avant :  
![Tooltip avant migration](img/refacto/rmc/Tooltip.png)


- Apres :  
![Tooltip apres migration](./img/refacto/plume/tooltip.png)

---

### Migration des composants PopIn

- Avant :  
![PopIn avant migration](img/refacto/rmc/PopIn.png)


- Apres :  
![Dialog après migration](./img/refacto/plume/dialog.png)

---

### Migration des composants RadioGroup

- Avant :  
![RadioGroup avant migration](img/refacto/rmc/RadioGroup.png)


- Apres :  
![RadioGroup après migration](./img/refacto/plume/radioGroup.png)



