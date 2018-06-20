# JDR_Cyberpunk_2020


## Cyberpunk 2020 - Fiche de personnage interactive
![Preview of CyberPunk2020](https://raw.githubusercontent.com/Bernardjacques/JDR_Cyberpunk_2020/master/img/Preview_CyberPunk2020.png)

Avancement :

- [X] Lancés de dé simple (ex 1D10)
- [X] Lancés de dés multiple avec Addition de Bonus (ex: [3D10+4])
- [X] Gestion Bar de Vie
- [X] Gestion des Munitions
- [X] Calcul des dégats d'une arme
- [X] Gestion d'Inventaire
- [ ] Calcul jet de Compétence (ex: Reflexe = [Perception + 1d10+Ref])


Détails du Projet : 

### 1.
Cette fiche de personnage a pour but de faciliter les interactions (jets de dés, calculs) entre les joueurs d'une partie de jeu de rôle.

### 2. Outils mis à disposition

#### 2.1 Jet de dé pour le calcul des statistiques basiques (Reflex, Intel, Consti, etc...)

> Les dés ne servent qu'à faire du bruit derrière l'écran du MJ - Gary Gygax

ex:
```javascript
  function dice_roll_10()
  {
      let random = Math.round(Math.random() * (10 - 1) + 1)
      return(random);
  }
  
  function dice_REF()
  {
      document.getElementById("roll_ref").innerHTML = (dice_roll_10() + REF)
  }
```
https://github.com/Bernardjacques/JDR_Cyberpunk_2020/blob/master/js/dice_event.js


