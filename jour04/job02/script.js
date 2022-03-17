
document.addEventListener("DOMContentLoaded" , (event) => {
        
        // const json = 
  
        // fetch('file.json')
        // .then((response) => response.json)
        // .then((respon) => {



               
     
        // .catch((error) => console.log(error))

        // let name = JSON.stringify(file)

        // console.log(file)
        // console.log(name)

      
        const json = {"name":"Laplateforme", "adresse":"8 rue dhozier", "city":"marseille", "nb_staff": "11", "creation": "2019"}

        console.log(json)

        var key = 'name'




        
        function JsonValueKey(json, key){

               
                console.log(json[key])
                
        }


        JsonValueKey(json,key)
})


