/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronombre = ["el", "la", "lo", "la"];
  const adj = ["mas", "posible", "delicioso", "menos"];
  const nombre = ["fuerte", "cachopo", "barba", "lapiz"];

  //Opción 1

  console.log("Opción 1: ");

  let pronomAl = aleatorio(pronombre);
  let adjAl = aleatorio(adj);
  let nombreAl = aleatorio(nombre);

  //Imprime en página web HTML:

  document.getElementById("nombredominio1").innerHTML =
    "<p style='border: 2px solid red;'>" +
    pronomAl +
    adjAl +
    nombreAl +
    ".com </p>";

  document.getElementById("nombredominio1").innerHTML +=
    "<p>Comprueba en consola</p>";

  //Imprime en consola:

  console.log(pronomAl + adjAl + nombreAl + ".com");

  //Opcion 2

  console.log("Opción 2:");

  const arrayDom = [pronombre, adj, nombre];

  let newDomain = "";

  for (let i = 0; i < arrayDom.length; i++) {
    newDomain += aleatorio(arrayDom[i]);
  }

  //Imprime en la página web HTML:
  document.getElementById("nombredominio2").innerHTML =
    "<p style='border: 2px dashed red'>" + newDomain + ".com </p>";
  document.getElementById("nombredominio2").innerHTML +=
    "<p>Comprueba en consola</p>";

  //Imprime en consola:

  console.log(newDomain + ".com");

  //Opcion 3

  let newDomain2 = "";

  console.log("Opción 3: ");

  for (let i = 0; i < 10; i++) {
    const elementos = arrayDom.map(arr => arr[i % arr.length]);
    const frase = elementos.join("");

    //Imprime en la página web HTML:
    document.getElementById("nombredominio3").innerHTML +=
      "<p style='border: 2px dotted red'>" +
      (i + 1) +
      ". " +
      frase +
      ".com </p>";

    //Imprime en consola:
    console.log(i + 1 + ". " + frase + ".com");
  }

  document.getElementById("nombredominio3").innerHTML +=
    "<p>Comprueba en consola</p>";

  //Opción 4 (Con extensiones web)

  console.log("Opción 4:");

  const extensiones = [".com", ".net", ".es", ".eu", ".org"];

  const arrayExt = [pronombre, adj, nombre, extensiones];

  //Método for tradicional
  let newDomain3 = "";

  for (let i = 0; i < arrayExt.length; i++) {
    newDomain3 += aleatorio(arrayExt[i]);
  }

  //Imprime en la página web HTML
  document.getElementById("nombredominio4").innerHTML =
    "<p style='border: 2px groove red'>" + newDomain3 + "</p>";

  //Imprime en consola:

  console.log("Método for: ");
  console.log(newDomain3);

  //Método forEach
  let newDomainforEach = "";

  arrayExt.forEach(subArrayEach => {
    newDomainforEach += aleatorio(subArrayEach);
  });

  //Imprime en consola:

  console.log("Método forEach: ");
  console.log(newDomainforEach);

  //Método for..of
  let newDomainForOf = "";

  for (let subArrayOf of arrayExt) {
    newDomainForOf += aleatorio(subArrayOf);
  }

  //Imprime en consola:

  console.log("Método for..of: ");
  console.log(newDomainForOf);

  //Método map

  let newDomainMap = "";

  arrayExt.map(subArrayMap => (newDomainMap += aleatorio(subArrayMap)));

  //Imprime en consola

  console.log("Método map:");
  console.log(newDomainMap);

  document.getElementById("nombredominio4").innerHTML +=
    "<p>Comprueba en consola</p>";
};

function aleatorio(arr) {
  let nuevoInd = Math.floor(Math.random() * arr.length);
  return arr[nuevoInd];
}
