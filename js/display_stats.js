
// =============================== Affichages ==========================================
    
// =========== Stats ================

document.getElementById("nom_perso").innerHTML = nom_perso
document.getElementById("pseudo").innerHTML = pseudo
document.getElementById("classe").innerHTML = classe

document.getElementById("INT").innerHTML = INT
document.getElementById("REF").innerHTML = REF
document.getElementById("TECH").innerHTML = TECH
document.getElementById("SF").innerHTML = SF
document.getElementById("BT").innerHTML = BT
document.getElementById("MV").innerHTML = MV
document.getElementById("CON").innerHTML = CON
document.getElementById("EMP").innerHTML = EMP

document.getElementById("CH").innerHTML = CH
document.getElementById("PH").innerHTML = PH
document.getElementById("PHMAX").innerHTML = PHMAX
document.getElementById("course").innerHTML = course
document.getElementById("saut").innerHTML = saut
document.getElementById("levee").innerHTML = levee

document.getElementById("roll_int").innerHTML = random
document.getElementById("roll_ref").innerHTML = random
document.getElementById("roll_sf").innerHTML = random
document.getElementById("roll_bt").innerHTML = random
document.getElementById("roll_mv").innerHTML = random
document.getElementById("roll_con").innerHTML = random
document.getElementById("roll_emp").innerHTML = random


// ============ Skill ==================

document.getElementById("systeme_d").innerHTML = systeme_d

document.getElementById("b_and_p").innerHTML = baratin_et_persuasion
document.getElementById("proxenetisme").innerHTML = proxenetisme
document.getElementById("seduction").innerHTML = seduction

document.getElementById("education").innerHTML = education
document.getElementById("enseignement").innerHTML = enseignement
document.getElementById("perception").innerHTML = perception

document.getElementById("art_martial").innerHTML = art_martial
document.getElementById("fusil").innerHTML = fusil
document.getElementById("pistolet").innerHTML = pistolet

document.getElementById("contrefaçon").innerHTML = contrefaçon
document.getElementById("crocheter").innerHTML = crocheter
document.getElementById("cyberdeck").innerHTML = cyberdeck
document.getElementById("deguisement").innerHTML = deguisement
document.getElementById("electronique").innerHTML = electronique
document.getElementById("explosifs").innerHTML = explosifs
document.getElementById("gentech").innerHTML = gentech



// ==================== Inventaire =============================

document.getElementById("tips").innerHTML = "Name = "+p1.name + "</br> Precision = "+ p1.precision + "</br>"+ p1.dissimulation + "</br>"+ p1.dispobilite + "</br>"+ p1.degat + "</br>"+ p1.munition

// ============================================ Famille ===================================== //


document.getElementById("family_story").innerHTML = family_story
document.getElementById("parents_job").innerHTML = parents_job
document.getElementById("parents_stat").innerHTML = parents_stat
document.getElementById("brothers").innerHTML = brothers
document.getElementById("sisters").innerHTML = sisters
document.getElementById("numb_child").innerHTML = numb_child



// ============================================ Description personnage ===================================== //


document.getElementById("habillement").innerHTML = habillement
document.getElementById("coiffure").innerHTML = coiffure
document.getElementById("signe").innerHTML = signe
document.getElementById("ethnie").innerHTML = ethnie
document.getElementById("langue").innerHTML = langue

document.getElementById("caractere").innerHTML = caractere
document.getElementById("love").innerHTML = love
document.getElementById("most_important_thing").innerHTML = most_important_thing
document.getElementById("most_important_item").innerHTML = most_important_item
document.getElementById("people_relation").innerHTML = people_relation

// ============================================ Evènement ===================================== //

document.getElementById("event_1st_year").innerHTML = event_1st_year
document.getElementById("event_2nd_year").innerHTML = event_2nd_year

// ===============================================================================


// ========================== Affichage Fenêtres Skill ================================

function addclass(skill)
    {
        //console.log(css_value)
        if(document.getElementById(skill).classList == "others")
        {
            document.getElementById(skill).classList.add("vlavla");
        }
        else
        {
            document.getElementById(skill).classList.remove("vlavla");
        }
    }

function deploy_close(skill)
{
    addclass(skill)
}