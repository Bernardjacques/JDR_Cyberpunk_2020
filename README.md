# JDR_Cyberpunk_2020


## Cyberpunk 2020 - Fiche de personnage interactive
![Preview of CyberPunk2020](https://raw.githubusercontent.com/Bernardjacques/JDR_Cyberpunk_2020/master/img/Preview_CyberPunk2020.png)


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
JDR_Cyberpunk_2020/js/dice_event.js 

#### Feuille de personnage pour le jeu de rôle Cyberpunk 2020.
Ceci permet de pouvoir y jouer sans devoir se rassembler (bien utile pour les joueurs habitant loin).
Gestion complète de tous les aspect et jet de dés rencontré lors d'une partie classique sans pour autant tout automatisé afin de rester un maximum fidèle à l'expérience d'origine.
  Gestion de la barre de vie
  Gestion de l'inventaire
  Gestion des lancer de dés multiple avec bonus (ex : 2 dés 6 avec un bonus de +2)

- [X] Lancé de dé simple (Stat)
- [X] Gestion Bar de Vie
- [X] Gestion des Munitions
- [X] Calcul des dégats d'une arme
- [ ]
