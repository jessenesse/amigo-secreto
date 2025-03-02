// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de variables
let listaDeNombres = [];
let nombreDeAmigo;
let contadorDeLista = 0;
let cantidadElementosArray;
let numeroAleatorio;

//Funciones para el boton añadir
function agregarAmigo() {
nombreDeAmigo = document.getElementById("amigo").value;
if (nombreDeAmigo == " ") {
    alert("Ingrese un valor valido");
    borrarCajaTexto();
    }
    else {
    enlistarInput();
    borrarCajaTexto();
    enlistadorHtml();
    //instrucciones para el boton añadir
    cantidadElementosArray = listaDeNombres.length;
    numeroAleatorio = Math.floor(Math.random()*cantidadElementosArray);
    amigoSorteado = listaDeNombres[numeroAleatorio];
    }
};
function sortearAmigo() {
    if (listaDeNombres == "") {
        alert("Aún no hay amigos para sortear");
    }
    else {
        listaAmigoSorteado = document.getElementById("resultado");
    listaAmigoSorteado.innerHTML = "<li>" + amigoSorteado + "</li>";
    }
    
}
//Funciones que vamos a invocar
function borrarCajaTexto() {
    let valorCajaTexto = document.getElementById("amigo");
    valorCajaTexto.value = " ";
    return;
};
function enlistarInput() {
    listaDeNombres.push(nombreDeAmigo);
};
function enlistadorHtml() {
    let listaHtml = document.getElementById("listaAmigos");
let htmlList = "";
for (let i = 0; i < listaDeNombres.length; i++) {
  htmlList += "<li>" + listaDeNombres[i] + "</li>";
}
listaHtml.innerHTML = htmlList;
}