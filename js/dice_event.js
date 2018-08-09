// ================================ Dice Function ======================================
// ================================= Dices Roll ========================================
function dice_roll_10() {
    var random = Math.round(Math.random() * (10 - 1) + 1);
    return (random);
}
function dice_INT() {
    document.getElementById("roll_int").innerHTML = (dice_roll_10() + INT);
}
function dice_REF() {
    document.getElementById("roll_ref").innerHTML = (dice_roll_10() + REF);
}
function dice_TECH() {
    document.getElementById("roll_tech").innerHTML = (dice_roll_10() + TECH);
}
function dice_SF() {
    document.getElementById("roll_sf").innerHTML = (dice_roll_10() + SF);
}
function dice_BT() {
    document.getElementById("roll_bt").innerHTML = (dice_roll_10() + BT);
}
function dice_MV() {
    document.getElementById("roll_mv").innerHTML = (dice_roll_10() + MV);
}
function dice_CON() {
    document.getElementById("roll_con").innerHTML = (dice_roll_10() + CON);
}
function dice_EMP() {
    document.getElementById("roll_emp").innerHTML = (dice_roll_10() + EMP);
}
