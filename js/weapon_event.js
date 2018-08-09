// ===================== Event Arme Principale ====================================
var CDT_weapon = 3;
var chargeur = 9;
var left_ammo = 800;
document.getElementById("CDT_weapon").innerHTML = CDT_weapon;
document.getElementById("chargeur").innerHTML = chargeur;
document.getElementById("left_ammo").innerHTML = left_ammo;
function tirer() {
    if (chargeur >= CDT_weapon) {
        chargeur -= CDT_weapon;
        shoot();
        document.getElementById("chargeur").innerHTML = chargeur;
    }
    else {
        left_ammo -= (9 - chargeur);
        chargeur += 9;
        document.getElementById("left_ammo").innerHTML = left_ammo;
        document.getElementById("chargeur").innerHTML = chargeur;
        alert("Rechargement Effectué");
    }
}
function reload() {
    left_ammo -= (9 - chargeur);
    chargeur = 9;
    document.getElementById("left_ammo").innerHTML = left_ammo;
    document.getElementById("chargeur").innerHTML = chargeur;
    alert("Rechargement Effectué");
}
function shoot() {
    var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
    var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6) + 1;
    alert(rand_total + " de dégâts");
}
// ===================== Event Arme Secondaire ====================================
var CDT_weapon2 = 2;
var chargeur2 = 10;
var left_ammo2 = 750;
document.getElementById("CDT_weapon2").innerHTML = CDT_weapon2;
document.getElementById("chargeur2").innerHTML = chargeur2;
document.getElementById("left_ammo2").innerHTML = left_ammo2;
function tirer2() {
    if (chargeur2 >= CDT_weapon2) {
        chargeur2 -= CDT_weapon2;
        shoot_secondary();
        document.getElementById("chargeur2").innerHTML = chargeur2;
    }
    else {
        left_ammo2 -= (9 - chargeur2);
        chargeur2 += 9;
        document.getElementById("left_ammo2").innerHTML = left_ammo2;
        document.getElementById("chargeur2").innerHTML = chargeur2;
        alert("Rechargement Effectué");
    }
}
function reload2() {
    left_ammo2 -= (9 - chargeur2);
    chargeur2 = 9;
    document.getElementById("left_ammo2").innerHTML = left_ammo2;
    document.getElementById("chargeur2").innerHTML = chargeur2;
    alert("Rechargement Effectué");
}
// ======================= Damage Calculation Range Primary Weapon =========================================
function damage_calculation() {
    if (document.getElementById("check_courte").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5) + 3;
        alert(rand_total + " de dégâts courte portée");
    }
    else if (document.getElementById("check_moyenne").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6) + 1;
        alert(rand_total + " de dégâts moyenne portée");
    }
    else if (document.getElementById("check_longue").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_7 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6 + rand_dice_7);
        alert(rand_total + " de dégâts longue portée");
    }
    else if (document.getElementById("check_extreme").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_7 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6 + rand_dice_7) + 3;
        alert(rand_total + " de dégâts de portée extreme");
    }
    else {
        alert("Merci d'indiquer une valeur de distance");
    }
}
// ============================ Damage Calculation Range Secondary Weapon ================================
function damage_calculation_secondary() {
    if (document.getElementById("check_courte_secondary").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5) + 3;
        alert(rand_total + " de dégâts courte portée");
    }
    else if (document.getElementById("check_moyenne_secondary").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6) + 1;
        alert(rand_total + " de dégâts moyenne portée");
    }
    else if (document.getElementById("check_longue_secondary").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_7 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6 + rand_dice_7);
        alert(rand_total + " de dégâts longue portée");
    }
    else if (document.getElementById("check_extreme_secondary").checked == true) {
        var rand_dice_1 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_2 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_3 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_4 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_5 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_6 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_dice_7 = Math.round(Math.random() * (6 - 1) + 1);
        var rand_total = (rand_dice_1 + rand_dice_2 + rand_dice_3 + rand_dice_4 + rand_dice_5 + rand_dice_6 + rand_dice_7) + 3;
        alert(rand_total + " de dégâts de portée extreme");
    }
    else {
        alert("Merci d'indiquer une valeur de distance");
    }
}
// ======================================================================================================
function shoot() {
    damage_calculation();
}
function shoot_secondary() {
    damage_calculation_secondary();
}
document.getElementById("tips").innerHTML = "Name = " + p1.name + "</br> Precision = " + p1.precision + "</br>" + p1.dissimulation + "</br>" + p1.dispobilite + "</br>" + p1.degat + "</br>" + p1.munition;
