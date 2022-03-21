document.addEventListener("DOMContentLoaded", (event) => {


        let nom = document.getElementById("nom")
        let prenom= document.getElementById("prenom")
        let email = document.getElementById("email")
        let password = document.getElementById("password")

        let p = document.querySelectorAll('p')



        nom.addEventListener('keydown', function(){

            p[0].innerHTLM = "prenom ok"
            

            console.log(p[0])            
            p[0].classList.add("green")



            


        })

    })