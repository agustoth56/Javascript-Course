// Ejercicio 1

console.log("Ejercicio 1:");

function objeto(parametro){
  let arreglo = Object.keys(parametro)
  return arreglo;
}

//objeto de ejemplo para prueba
var persona = {
  nombre:"Agustin", 
  edad: 22, 
  profesion:"Developer",
  pais: "New Zealand"
}

var arrayMuestra = objeto(persona);

console.log(arrayMuestra);


// Ejercicio 2


console.log(`Ejercicio 2:

1- En un metodo, "this" se refiere al objeto.
1.1- var persona = {
      nombre:"pepe",
      apellido: "gonzalez",
      nombreCompleto() {
        return this.nombre + " " + this.apellido;
      }
    }

2- En una funcion, "this" se refiere al objeto window.
2.1- function myFunction() {
        return this;
     }

3- Pero dentro de una funcion en modo estricto, "this" pasa a ser "undefined".
3.1-  "use strict";
      function myFunction() {
        return this;
      }

4- Por si solo "this" se refiere al objeto window como en una funcion pero esto no cambia si está en modo estricto.
4.1-  let x = this;
4.2-  "use strict";
      let x = this;

5- En un evento, "this" se refiere al "evento" (puede ser un boton por ej) que recibe el evento.
5.1- <button onclick="this.style.display='none'"> Si haces click lo remueves. </button>

6- En metodos como "call() y "apply()", "this" se refiere a todos los objetos.
6.1-  var persona = {
        nombreCompleto() {
          return this.nombre + " " + this.apellido;
        }
      }
      var persona2 = {
        nombre:"pepe",
        apellido: "gonzalez"
      }
      persona.nombreCompleto.call(persona2);  // retorna "pepe gonzalez"
`);



// Ejercicio 3

console.log("Ejercicio 3:");

var arrowFunc = (cadena) => {
  var largoCadena = cadena.length;
  var cadenaInvertida = "";
  while (largoCadena>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(largoCadena);
    largoCadena--;
  }
  return cadenaInvertida;
}

console.log(arrowFunc("Hello World"));

// Ejercicio 4

console.log("Ejercicio 4:");

class inicioSesion{
  constructor(username, password){
    this._username = username;
    this._password = password;
  }

  login(){
    return this._username === "admin" && this.password === "passwd" ? alert("User Logged in (ej4)") : alert("User or Pass incorrect (ej4)");
  }

  get inicio(){
    return this.login();
  }

  get username(){
    return this._username;
  }
  
  get password(){
    return this._password;
  }

}

//var usuarios = new inicioSesion("pepe", "bad");
var usuarios = new inicioSesion("admin", "passwd");
usuarios.inicio;
console.log("Done!");


// Ejercicio 5

console.log("Ejercicio 5:");
const success = document.getElementById('loginSuccess');
const failure = document.getElementById('loginFailure');

function logueo(usuario, contrasena){
  if(usuario === "admin" && contrasena === "passwd"){
    alert("User Logged in\n"+"user: "+usuario+"- pass: "+contrasena);
  }else{
    alert("User or Pass incorrect\n"+"user: "+usuario+"- pass: "+contrasena);
  }
}

success.addEventListener('click', () => {
  var login = {user: "admin",pass: "passwd"};
  logueo(login.user, login.pass);
});

failure.addEventListener('click', () => {
  var login = {user: "pepe",pass: "bad"};
  logueo(login.user, login.pass);
});

console.log("Prueba hacer click en los botones 'Login' y 'Error' para comprobar que funciona, ademas del mensaje muestro el user y pass que se utilizaron para intentar el login.")


// Ejercicio 6

console.log("Ejercicio 6:")

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password!!");
        }
      }, 200);
    });
};

const successAsync = document.getElementById('loginSuccessAsync');
const failureAsync = document.getElementById('loginFailureAsync');

// Asi seria con el .then
/*async function asyncSuccess() {
  var login = {user: "admin",pass: "passwd"};
  loginWitUsername(login.user, login.pass)
  .then( (resolved) => {
    console.log(resolved);
  })
  .catch( (rejected) => {
    console.log(rejected);
  })
}

async function asyncFailure(){
  var login = {user: "pepe",pass: "bad"};
  loginWitUsername(login.user, login.pass)
  .then( (resolved) => {
    console.log(resolved);
  })
  .catch( (rejected) => {
    console.log(rejected);
  })
}*/

// Y esta seria con la solucion del await

async function asyncSuccess() {
  var login = {user: "admin",pass: "passwd"};
  var resolved = await loginWitUsername(login.user, login.pass)
  alert(resolved);
}

async function asyncFailure(){
  var login = {user: "pepe",pass: "bad"};
  var rejected = await loginWitUsername(login.user, login.pass)
  alert(rejected);
}



successAsync.addEventListener('click', asyncSuccess);
failureAsync.addEventListener('click', asyncFailure);

console.log("Done! Solo haga click en alguno de los botones.");


