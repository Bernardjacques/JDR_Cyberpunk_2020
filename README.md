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

> Les dés ne servent qu'à faire du bruit derrière l'écran du MJ - Gary Gygax

#### 2.1 Lancés de dé simple (Reflex, Intel, Consti, etc...)

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

### 2.2 Lancé de dé multiple avec addition de Bonus // Calcul des Dégats Arme

ex:
```javascript
function shoot()
{
    let rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1)
    let rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6)+1
    alert(rand_total + " de dégâts")
}
```
https://github.com/Bernardjacques/JDR_Cyberpunk_2020/blob/master/js/weapon_event.js

### 2.3 Gestion Bar de Vie

ex:
```javascript

let var_color = 0

function life_hit() 
{
    if(var_color == 0)
    {
        document.getElementById("life1").style.backgroundColor = "red";
        var_color += 1;
    }
    else if(var_color == 1)
    {
        document.getElementById("life2").style.backgroundColor = "red";
        var_color += 1;
    }
    else if(var_color == 2)
    {
        document.getElementById("life3").style.backgroundColor = "red";
        var_color += 1;
    }
    else if(var_color == 3)
    {
        document.getElementById("life4").style.backgroundColor = "red";
        var_color += 1;
    }
 .
 .
 .
```
https://github.com/Bernardjacques/JDR_Cyberpunk_2020/blob/master/js/hp_bar_gestion.js


### 2.4 Gestion des Munitions

```javascript
let CDT_weapon = 3
let chargeur = 9
let left_ammo = 800

document.getElementById("CDT_weapon").innerHTML = CDT_weapon;
document.getElementById("chargeur").innerHTML = chargeur;
document.getElementById("left_ammo").innerHTML = left_ammo;


function tirer()
{
    if(chargeur >= CDT_weapon)
    {
        chargeur -= CDT_weapon
        shoot()
        document.getElementById("chargeur").innerHTML = chargeur;
    }
    else
    {
        left_ammo -= (9-chargeur)
        chargeur += 9
        document.getElementById("left_ammo").innerHTML = left_ammo;
        document.getElementById("chargeur").innerHTML = chargeur;
        alert("Rechargement Effectué");
    }
}
```
https://github.com/Bernardjacques/JDR_Cyberpunk_2020/blob/master/js/weapon_event.js

