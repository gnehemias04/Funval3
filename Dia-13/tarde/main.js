// funcion para sumar
const sumar = (a ,b) => a + b ;

// funcion para restar

const restar = (a ,b) => a - b ;


// funcion para multiplicar 

const multiplicar = (a ,b) => a * b ;


// funcion para dividir
const dividir = (a ,b) => a / b ;






alert ("esto es una calculadora, que desea?")

let deseo = prompt("desea sumar, restar, multiplicar o dividir?")
let a =  parseInt (prompt ("que valor desea ejecutar"))
let b = parseInt( prompt ("cual mas?"))
console.log (a)
console.log (b)
console.log(deseo)


if (deseo == "sumar"){
   alert("desea sumar " + a  + " + " + b)
   alert ("el resultado es: " + sumar(a,b));
}else{
  if(deseo == "restar"){
    alert("desea restar " + a  + " - " + b)
    alert ("el resultado es: " + restar(a,b));
  }else{
    if(deseo == "multiplicar"){
      alert("desea multiplicar " + a  + " * " + b)
      alert ("el resultado es: " + multiplicar(a,b));
    }else{
      if(deseo == "dividir"){
        alert("desea dividir " + a  + " / " + b)
        alert ("el resultado es: " + dividir(a,b));
      }
    }
    
    
  }
}


