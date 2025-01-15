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
  let pronomAl = aleatorio(pronombre);
  let adjAl = aleatorio(adj);
  let nombreAl = aleatorio(nombre);

  document.getElementById("nombredominio1").innerText =
    pronomAl + adjAl + nombreAl + ".com";

  //Opcion 2

  const arrayDom = [pronombre, adj, nombre];

  let newDomain = "";

  for (let i = 0; i < arrayDom.length; i++) {
    newDomain += aleatorio(arrayDom[i]);
  }

  document.getElementById("nombredominio2").innerText = newDomain + ".com";

  //Opcion 3

  let newDomain2 = "";

  for (let i = 0; i < 10; i++) {
    const elementos = arrayDom.map(arr => arr[i % arr.length]);
    const frase = elementos.join("");
    document.getElementById("nombredominio3").innerHTML +=
      "<p>" + (i + 1) + ". " + frase + ".com </p>";
  }

  //Con extensiones

  const extensiones = [".com", ".net", ".es", ".eu", ".org"];

  const arrayExt = [pronombre, adj, nombre, extensiones];

  let newDomain3 = "";

  for (let i = 0; i < arrayExt.length; i++) {
    newDomain3 += aleatorio(arrayExt[i]);
  }

  document.getElementById("nombredominio4").innerText = newDomain3;
};

function aleatorio(arr) {
  let nuevoInd = Math.floor(Math.random() * arr.length);
  return arr[nuevoInd];
}
