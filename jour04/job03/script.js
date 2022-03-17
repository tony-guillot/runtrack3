
document.addEventListener("DOMContentLoaded" , (event) => {
        
        
        let btn = document.getElementById('btn')
        let id= document.getElementById('id')
        let nom = document.getElementById('nom')

        btn.addEventListener('click', function filtrer(){

                
        })
        
        
                
    fetch('pokemon.json')
        .then((response) => response.json())
        .then((data) => {

                console.log(data[0].name.english)
                // console.log(data[0].type)
                // console.log(data[0].type[0])
                console.log(data)

        for(let i = 0; i< data.length ;i++){
                
            
                console.log(data[i].type)
                     

                
        }
        
       
        
   
        
        })

      
})


