

document.addEventListener("DOMContentLoaded", () => {


    let article = document.getElementById('citation').textContent

  
    
    let btn = document.getElementById("button")
    
    console.log(btn)
    
    
    
        
    function citaton(){

        btn.addEventListener("click",  () =>{


            console.log(article)
        })

    }

    citaton()
});