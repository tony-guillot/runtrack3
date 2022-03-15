
document.addEventListener("DOMContentLoaded", () => {
    
   function addone(){

       
       var count = 0
        let p = document.getElementById('compteur')

        let btn = document.getElementById('button').onclick=function(){
            count =count+1
            p.innerHTML =count
        
            }

        let reset = document.getElementById('reset').onclick=function(){
                
                count = 0

                p.innerHTML=count

        }
        console.log(count)
     

    }

    addone()
})
