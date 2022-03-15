

document.addEventListener("DOMContentLoaded" , () => {


    let article = document.getElementById('citation').textContent

  
    
    let btn = document.getElementById("button")
    

    
        
    function citation(){

        btn.addEventListener("click",  () =>{


            console.log(article)
        })

    }

    citation()

})