//alert("Hola este es mi Javascript");

//let nombre = "Luis";
//console.log(nombre);

let nombre = "Luis";
let ciudad = "Zapatoca";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
  let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
  return contenido;
}

console.log(parrafo);

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);
