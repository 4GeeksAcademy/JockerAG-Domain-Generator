/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const tag = document.querySelector("#domain");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extension = [".es", ".com", ".net"];
  var dominios = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        let randomextension = Math.floor(Math.random() * extension.length);
        const combinacion =
          pronoun[i] + adj[a] + noun[b] + extension[randomextension];
        dominios.push(combinacion);
      }
    }
  }

  tag.innerHTML += "<ul>";
  dominios.map(item => {
    tag.innerHTML += "<li>" + item + "</li>";
  });
  tag.innerHTML += "</ul>";
};

// primero debo capturar el elemento html en una variable //
// segundo debo modificar la propiedad inner HTML de ese elemento //
// recorrer el array resultado de combinaciones y lo vamos a poner con un .map dentro de ese .map vas a generar un parrafo o una li con cada uno de los dominios //
