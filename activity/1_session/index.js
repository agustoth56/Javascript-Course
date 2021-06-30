// Ejercicio 1

//import del archivo JS aboutme.js
var js = document.createElement("script");
js.src = "aboutme.js";
document.body.appendChild(js);

console.log("Ejercicio 1");

// Ejercicio 2

var ej2 = `Ejercicio 2:

Realizando la ejecucion del sitio con los breakpoints que se solicitaron, 
se puede ver que lo primero que hace es leer el fichero index.js de arriba a abajo
luego de leerlo ejecuta primero lo que se encuentra en ese archivo para luego
poder ir a los archivos importados y ejecutarlos en orden.

Respuesta corta: Primero hace el console.log() del index.js y luego muestra el mensaje en pantalla del about.js.`;

console.log(ej2);

// Ejercicio 3

var ej3 = `Ejercicio 3:

Elements: En esta sección nos muestra el HTML de la página web donde nos encontramos en el momento, en mi opinion es una herramienta fundamental si queremos ver parte del codigo (maquetación) de la web incluido los archivos JS que se llaman de la misma, etc. incluso tambien nos muestra los estilos de la pagina en tiempo real.

Console: En este sector nos muestra cualquier log que ocurra en el sitio en el momento, puede ser un log manual que el desarrollador haya creado para alguna referencia asi como tambien errores que pueda estar generando el codigo ademas de alguna que otra información que el navegador nos puede llegar a proporcionar.

Source: En esta pestaña podemos ver los archivos que forman parte del Front-End de la web que están dentro del servidor donde la misma está alojada, principalmente se utiliza para generar breakpoints que ayudan al desarrollo los cuales nos permiten ver que es lo que está realizando la pagina web al momento de cargarse.
`;

console.log(ej3);

// Ejercicio 4
var numero = `- `;
for(var i=1;i<=100;i++){
    if(i%7==0){
        numero+=i+` - `
    }
}

var ej4 = `Ejercicio 4:

Todos los numeros del 1-100 que son multiplos de 7:
`+numero;

console.log(ej4);

// Ejercicio 5

var ej5 = `Ejercicio 5:

El formato <script> funciona de forma "publica" dentro del fichero, es decir, si tu creas una funcion dentro de una sentencia <script> luego puedes crear otra sentencia <script> y podras llamar a la funcion anteriormente creada.
El formato <script type="module"> funciona de forma "privada", es decir, si tu creas una funcion dentro de una sentencia <script type="module"> esa funcion se va a manejar solamente dentro de esa sentencia, si intentas llamarla desde otra sentencia aunque esta sea <script> o <script type="module"> esta no la va a reconocer/encontrar y te va dar un error debido a que esta funcion solamente esta existe en la primer sentencia que se creo.`;

console.log(ej5);

// Ejercicio 6

var ej6 = `Ejercicio 6: 

`;
console.log(ej6);


