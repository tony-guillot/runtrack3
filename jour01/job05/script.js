function afficherjourssemaines(){

    var jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

    for(i = 0; i < jourssemaines.length; i++){

            document.write(" ",jourssemaines[i])
    }
}

console.log(afficherjourssemaines())