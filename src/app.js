/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Ejercicio
  console.log("Ejercicio: ");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  //Sin array

  let variable = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        variable += " " + pronoun[i] + adj[j] + noun[k] + ".com | ";
      }
    }
  }

  console.log(variable);

  const pronombres = ["el", "la", "lo", "la"];
  const adjs = ["mas", "posible", "delicioso", "menos"];
  const nombres = ["fuerte", "cachopo", "barba", "lapiz"];

  //Opción 1

  console.log("Opción 1: ");
  console.log("Bucle forEach:");

  let dominio1 = "";

  //Bucle forEach
  pronombres.forEach(pronombre => {
    adjs.forEach(adj => {
      nombres.forEach(nombre => {
        //Mostrar en consola
        const nombreDominio1 = pronombre + adj + nombre + ".com | ";
        dominio1 += nombreDominio1;
      });
    });
  });

  //Muestra en consola
  console.log(dominio1);

  //Opción 2:

  console.log("Opción 2:");
  console.log("Bucle For of");

  let dominio2 = "";

  //Bucle For Of
  for (let pronombre of pronombres) {
    for (let adj of adjs) {
      for (let nombre of nombres) {
        //Mostrar en consola
        const nombreDominio2 = pronombre + adj + nombre + ".com | ";
        dominio2 += nombreDominio2;
      }
    }
  }

  //Muestra en pantalla
  console.log(dominio2);

  console.log("Opción 3:");
  console.log("Bucle For in");

  let dominio3 = "";

  //Bucle For In
  for (let pro in pronombres) {
    for (let adj in adjs) {
      for (let nom in nombres) {
        //Mostrar en consola
        const nombreDominio3 =
          pronombres[pro] + adjs[adj] + nombres[nom] + ".com | ";

        dominio3 += nombreDominio3;
      }
    }
  }

  //Muestra en pantalla
  console.log(dominio3);

  console.log("Opción extra: ");

  let domainHacks = [".er", ".ur", ".ig"];

  let dominiosExtra = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < domainHacks.length; m++) {
          const nouns = noun[k];

          if (nouns.length > 3) {
            let hackPrefijo = nouns.slice(0, -2);
            let hackSufijo = nouns.slice(-2);
            dominiosExtra.push(`${hackPrefijo}.${hackSufijo}`);
          }

          dominiosExtra.push(noun[k] + domainHacks[m]);
        }
      }
    }
  }

  console.log(dominiosExtra);
};
