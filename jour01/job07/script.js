function jourtravaille(date){

    // var jours= new Date(date)

    var jour = "jour travaile"
       
    month = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre",]

    jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

    // weekend = ["samedi", "dimanche"]
      
        const joursferie = [
        
        new Date(2022,01,01),
        new Date(2022,04,18),
        new Date(2022,05,01),
        new Date(2022,05,08),
        new Date(2022,06,06),
        new Date(2022,07,14),
        new Date(2022,08,15),
        new Date(2022,11,01),
        new Date(2022,11,11),
        new Date(2022,12,25)
        
        
        
        
        // '2022-04-18','2022-05-01','2022-05-08','2022-06-06','2022-07-14','2022-08-15','2022-11-01','2022-11-11','2022-12-25')

        ]

        if(date.getDay() == 0 || date.getDay() == 6){

           jours = "weekend";
        }


        for(i = 0; i < joursferie.length;i++){

            if(date.getTime() == joursferie.getTime()){

                document.write('jour férié')   
                
            }     else{
            
                document.write('ok')
            }

        }

      console.log(joursferie)

       

        
        
        
        
        // ,'2022-04-18','2022-05-01','2022-05-08','2022-06-06','2022-07-14','2022-08-15','2022-11-01','2022-11-11','2022-12-25')

        
   
        
    }
    




jourtravaille(2022,04,18)
