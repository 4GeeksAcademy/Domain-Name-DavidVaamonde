/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronombres = ["el", "la", "lo", "la"];
  const adjs = ["mas", "posible", "delicioso", "menos"];
  const nombres = ["fuerte", "cachopo", "barba", "lapiz"];

  //Opción 1

  console.log("Opción 1: ");
  console.log("Bucle forEach:");

  const dominio1 = [];

  //Bucle forEach
  pronombres.forEach(pronombre => {
    adjs.forEach(adj => {
      nombres.forEach(nombre => {
        //Mostrar en consola
        const nombreDominio1 = pronombre + adj + nombre + ".com";
        dominio1.push(nombreDominio1);
      });
    });
  });

  //Muestra en consola
  console.log(dominio1);

  //Opción 2:

  console.log("Opción 2:");
  console.log("Bucle For of");

  const dominio2 = [];

  //Bucle For Of
  for (let pronombre of pronombres) {
    for (let adj of adjs) {
      for (let nombre of nombres) {
        //Mostrar en consola
        const nombreDominio2 = pronombre + adj + nombre + ".com";
        dominio2.push(nombreDominio2);
      }
    }
  }

  //Muestra en pantalla
  console.log(dominio2);

  console.log("Opción 3:");
  console.log("Bucle For in");

  const dominio3 = [];

  //Bucle For In
  for (let pro in pronombres) {
    for (let adj in adjs) {
      for (let nom in nombres) {
        //Mostrar en consola
        const nombreDominio3 =
          pronombres[pro] + adjs[adj] + nombres[nom] + ".com";
        dominio3.push(nombreDominio3);
      }
    }
  }

  //Muestra en pantalla
  console.log(dominio3);

  //Opción extra: tipos de extensiones
  console.log("Opción extra:");
  console.log("Tipos de extensiones");

  //Declaramos la variable de array de extensiones
  const extensiones = [".com", ".te", ".po", ".ba"];

  const dominioExtra = [];

  //Bucle forEach
  pronombres.forEach(pronombre => {
    adjs.forEach(adj => {
      nombres.forEach(nombre => {
        extensiones.forEach(ext => {
          //Mostrar en consola
          const nombreDominioExtra = pronombre + adj + nombre + ext;
          dominioExtra.push(nombreDominioExtra);
        });
      });
    });
  });

  //Muestra en consola
  console.log(dominioExtra);

  //Segundo punto
  console.log("Punto extra: ");
  const DominioExtraPunto = [];

  //Bucle For Of
  for (let pronombre of pronombres) {
    for (let adj of adjs) {
      for (let nombre of nombres) {
        for (let ext of extensiones) {
          //Longitud de la extension
          const longitudTerminacion = ext.length;
          const verificador = nombre.slice(-longitudTerminacion);
          const dominioBase = pronombre + adj + nombre;

          if (verificador === ext) {
            DominioExtraPunto.push(
              pronombre + adj + nombre.slice(0, -longitudTerminacion) + ext
            );
          } else {
            //Genera el dominio normal
            DominioExtraPunto.push(dominioBase + ext);
          }
        }
      }
    }
  }

  //Muestra en consola
  console.log(DominioExtraPunto);
};
