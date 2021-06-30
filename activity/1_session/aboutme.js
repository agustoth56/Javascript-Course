//informacion
var fullName = "Agustin Toth Moreira";
var career = "IT Technician";
var dreamJob = "Web Developer";

//cadena mediante template literals

var stringTempLit = `Hola, me llamo ${fullName} y me dedico a ${career}.
Estoy cursando este Máster porque me gustaría trabajar en ${dreamJob}`;

//Muestra en pantalla de la variable anterior
var div = document.createElement("div");
div.id = "ej1";
div.style = "margin: 10%";
document.body.appendChild(div);
var text = document.createTextNode(stringTempLit);
document.getElementById('ej1').appendChild(text);

console.log(stringTempLit);
