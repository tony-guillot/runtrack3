
document.addEventListener("DOMContentLoaded" , (event) => {
        
        

      
        let json = '{"name":"Laplateforme", "adresse":"8 rue dhozier", "city":"marseille", "nb_staff": "11", "creation": "2019"}'

        let obj = JSON.parse(json)

        console.log(obj )

        



       

        
        function JsonValueKey(json, key ){

               
                 console.log(obj[key])

                 
                
        }


        JsonValueKey(json, "city")
})


