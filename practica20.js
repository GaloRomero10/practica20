`use strict`
let vehiculo = {
    model:"corsa",
    brand:"chevrolet",
    color:"rojo",
    year:"2007",
    
};


function validaTaxi (vehiculo) {
let currentYear = 2023;
let years = currentYear - vehiculo.year

if (years<10){
    return(true)
}else{
    return(false)
}
}


let result = validaTaxi (vehiculo);
alert("El Vehiculo es apto para ser Taxi" + result);