
function sommenombrespremiers(premiers1, premiers2){


    if(premiers1 && premiers2 < 2){

        return false
    }

    for(i=2; i<= premiers1 && premiers2 ; i++){

        if( premiers1 && premiers2 % i == 0){

            console.log('ce ne sont pas des nombres premier')

        }

      else{

        console.log(premiers1,premiers2)
      }
    }

}

console.log(sommenombrespremiers(3,5))
