"use strict";
document.getElementById("myBtn").addEventListener("click",calculerSomme)
function calculerSomme() {
    var x =new Number(document.getElementById("number1").value);
    
    var y =new Number(document.getElementById("number2").value);
    
    var a =new Number(document.getElementById("number3").value);
    
    var b =new Number(document.getElementById("number4").value);
    var somme = x + y + a + b;
    document.getElementById("otal").value = somme;
}