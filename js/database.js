// ======================== Armes ======================== //

// =========== Pistolet Légers ============= //

let p1 = new Object();
    p1.name = "Budget Armes C-13"
    p1.type = "Pistolet"
    p1.precision = -1
    p1.dissimulation = "Poche"
    p1.dispobilite = "Excellente"
    p1.degat = "1D6"
    p1.munition = "5mm"
    p1.chargeur = 8
    p1.cadence_de_tir = 2
    p1.fiabilite = "Standart"
    p1.portee = 50
    p1.prix = 75

function touchp1()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp1()
    {
        let random = Math.round(Math.random() * (6 - 1) + 1)
    }



let p2 = new Object();
    p2.name = "Dai Lung Cybermag 15"
    p2.type = "Pistolet"
    p2.precision = -1
    p2.dissimulation = "Poche"
    p2.dispobilite = "Commune"
    p2.degat = "1D+1"
    p2.munition = "6mm"
    p2.chargeur = 10
    p2.cadence_de_tir = 2
    p2.fiabilite = "Peu Fiable"
    p2.portee = 50
    p2.prix = 50

function touchp2()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp2()
    {
        let random = (Math.round(Math.random() * (6 - 1) + 1) + 1)
    }



let p3 = new Object();
    p3.name = "Federeted Armes X-22"
    p3.type = "Psitolet"
    p3.precision = 0
    p3.dissimulation = "Veste"
    p3.dispobilite = "Excellente"
    p3.degat = "1D6+1"
    p3.munition = "6mm"
    p3.chargeur = 10
    p3.cadence_de_tir = 2
    p3.fiabilite = "Standart"
    p3.portee = 50
    p3.prix = 150

function touchp3()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp3()
    {
        let random = (Math.round(Math.random() * (6 - 1) + 1) + 1)
    }






// =========== Pistolet Moyens ============= //

let p4 = new Object();
    p4.name = "Militech Arms Avenger"
    p4.type = "Pistolet"
    p4.precision = 0
    p4.dissimulation = "Veste"
    p4.dispobilite = "Excellente"
    p4.degat = "2D6+1"
    p4.munition = "9mm"
    p4.chargeur = 10
    p4.cadence_de_tir = 2
    p4.fiabilite = "Très Fiable"
    p4.portee = 50
    p4.prix = 250

function touchp4()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp4()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + 1)
    }



let p5 = new Object();
    p5.name = "Dai Lung Streetmaster"
    p5.type = "Pistolet"
    p5.precision = 0
    p5.dissimulation = "Veste"
    p5.dispobilite = "Excellente"
    p5.degat = "2D6+3"
    p5.munition = "10mm"
    p5.chargeur = 12
    p5.cadence_de_tir = 2
    p5.fiabilite = "Peu Fiable"
    p5.portee = 50
    p5.prix = 350

function touchp5()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp5()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + 3)
    }



let p6 = new Object();
    p6.name = "Federated Arms X-9mm"
    p6.type = "Pistolet"
    p6.precision = 0
    p6.dissimulation = "Veste"
    p6.dispobilite = "Excellente"
    p6.degat = "2D6+1"
    p6.munition = "9mm"
    p6.chargeur = 12
    p6.cadence_de_tir = 2
    p6.fiabilite = "Standart"
    p6.portee = 50
    p6.prix = 300

function touchp6()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp6()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + 1)
    }






// =========== Pistolet Lourds ============= //

let p7 = new Object();
    p7.name = "Budget Arms Auto 3"
    p7.type = "Pistolet"
    p7.precision = -1
    p7.dissimulation = "Veste"
    p7.dispobilite = "Excellente"
    p7.degat = "3D6"
    p7.munition = "11mm"
    p7.chargeur = 8
    p7.cadence_de_tir = 2
    p7.fiabilite = "Peu Fiable"
    p7.portee = 50
    p7.prix = 350

function touchp7()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp7()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let random3 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + random3)
    }



let p8 = new Object();
    p8.name = "Sternmeyer Type 35"
    p8.type = "Pistolet"
    p8.precision = 0
    p8.dissimulation = "Veste"
    p8.dispobilite = "Commune"
    p8.degat = "3D6"
    p8.munition = "11mm"
    p8.chargeur = 8
    p8.cadence_de_tir = 2
    p8.fiabilite = "Très Fiable"
    p8.portee = 50
    p8.prix = 400

function touchp8()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp8()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let random3 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + random3)
    }






// =========== Pistolet Très Lourds ============= //

let p9 = new Object();
    p9.name = "Armalite 44"
    p9.type = "Pistolet"
    p9.precision = 0
    p9.dissimulation = "Veste"
    p9.dispobilite = "Excellente"
    p9.degat = "4D6+1"
    p9.munition = "12mm"
    p9.chargeur = 8
    p9.cadence_de_tir = 1
    p9.fiabilite = "Standart"
    p9.portee = 50
    p9.prix = 450

function touchp9()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp9()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let random3 = Math.round(Math.random() * (6 - 1) + 1)
        let random4 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + random3 + random4 + 1)
    }



let p10 = new Object();
    p10.name = "Colt ATM Modèle 2000"
    p10.type = "Pistolet"
    p10.precision = 0
    p10.dissimulation = "Veste"
    p10.dispobilite = "Commune"
    p10.degat = "4D6+1"
    p10.munition = "12mm"
    p10.chargeur = 8
    p10.cadence_de_tir = 1
    p10.fiabilite = "Très Fiable"
    p10.portee = 50
    p10.prix = 500

function touchp10()
    {
        let random = Math.round(Math.random() * (10 - 1) + 1)
        document.getElementById("roll_touch").innerHTML = (random + REF + pistolet)
    }

function degp10()
    {
        let random1 = Math.round(Math.random() * (6 - 1) + 1)
        let random2 = Math.round(Math.random() * (6 - 1) + 1)
        let random3 = Math.round(Math.random() * (6 - 1) + 1)
        let random4 = Math.round(Math.random() * (6 - 1) + 1)
        let total = (random1 + random2 + random3 + random4 + 1)
    }



//let  = new Object();
//    .name = ""
//    .type = ""
//    .precision = 
//    .dissimulation = ""
//    .dispobilite = ""
//    .degat = ""
//    .munition = ""
//    .chargeur = 
//    .cadence_de_tir = 
//    .fiabilite = ""
//    .portee = 
//    .prix = 
//
//function touch()
//    {
//        let random = Math.round(Math.random() * (10 - 1) + 1)
//        document.getElementById("roll_touch").innerHTML = (random + REF + )
//    }
//
//function deg()
//    {
//        let random = Math.round(Math.random() * ( - 1) + 1)
//    }




//    ***** *     **      *                                                           
//  ******  **    ****   **                                                           
// **   *  * **    ****  **                                                           
//*    *  *  **    * *   **                                                           
//    *  *    **   *     **                                           ***  ****         
//   ** **    **   *     **  ***      ****    ***  ****       ****     **** ****    
//   ** **     **  *     ** * ***    * ***  *  **** **** *   * ***  *   **   ****     
//   ** **     **  *     ***   ***  *   ****    **   ****   *   ****    **              
//   ** **      ** *     **     ** **    **     **    **   **    **     **            
//   ** **      ** *     **     ** **    **     **    **   **    **     **            
//   *  **       ***     **     ** **    **     **    **   **    **     **            
//      *        ***     **     ** **    **     **    **   **    **     **              
//  ****          **     **     ** **    **     **    **   **    **     ***           
// *  *****              **     **  ***** **    ***   ***   ***** **     ***          
//*     **                **    **   ***   **    ***   ***   ***   **                 
//*  *                          *                                                    
// **                          *                                                      
//                            *                                                       
//                           *                                                        
//
//
//          .8.          b.             8 8 888888888o.      
//         .888.         888o.          8 8 8888    `^888.   
//        :88888.        Y88888o.       8 8 8888        `88. 
//       . `88888.       .`Y888888o.    8 8 8888         `88 
//      .8. `88888.      8o. `Y888888o. 8 8 8888          88 
//     .8`8. `88888.     8`Y8o. `Y88888o8 8 8888          88 
//    .8' `8. `88888.    8   `Y8o. `Y8888 8 8888         ,88 
//   .8'   `8. `88888.   8      `Y8o. `Y8 8 8888        ,88' 
//  .888888888. `88888.  8         `Y8o.` 8 8888    ,o88P'   
// .8'       `8. `88888. 8            `Yo 8 888888888P'  
//
//
//
//
//
//
//@@@@@@@@   @@@@@@    @@@@@@    @@@@@@    @@@@@@    @@@@@@@@  @@@  @@@@@@@  @@@  @@@  
//@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@   @@@@@@@@  @@@@@@@@@  @@@  @@@@@@@  @@@  @@@  
//     @@!  @@!  @@@  !@@       !@@       @@!  @@@  !@@        @@!    @@!    @@!  @@@  
//    !@!   !@!  @!@  !@!       !@!       !@!  @!@  !@!        !@!    !@!    !@!  @!@  
//   @!!    @!@!@!@!  !!@@!!    !!@@!!    @!@!@!@!  !@! @!@!@  !!@    @!!    @!@!@!@!  
//  !!!     !!!@!!!!   !!@!!!    !!@!!!   !!!@!!!!  !!! !!@!!  !!!    !!!    !!!@!!!!  
// !!:      !!:  !!!       !:!       !:!  !!:  !!!  :!!   !!:  !!:    !!:    !!:  !!!  
//:!:       :!:  !:!      !:!       !:!   :!:  !:!  :!:   !::  :!:    :!:    :!:  !:!  
// :: ::::  ::   :::  :::: ::   :::: ::   ::   :::   ::: ::::   ::     ::    ::   :::  
//: :: : :   :   : :  :: : :    :: : :     :   : :   :: :: :   :       :      :   : :  
//                                                                                    