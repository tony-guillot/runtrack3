
document.addEventListener("DOMContentLoaded" , (event) => {


        let btn = document.getElementById('button')

        let p = document.getElementById('expression')


        btn.addEventListener('click', function(){


                fetch('expression.txt')
                .then((response) => response.text())
                .then((response)=> {

                p.innerHTML = response


                }) 
                .catch((error) => console.log(error))


        })




})


