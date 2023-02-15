import {
  mostrarTarjetas,
  mostrarchecks,
  checkCategoria,
  filtroBuscador,
 mensajeError,
} from "./module/functions.js";

const cards = document.getElementById("section-cards");
const checks = document.getElementById("section-check");
const input = document.querySelector(".form-control");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    let eventos;
    eventos = data.events;
    mostrarTarjetas(eventos, cards);
    let category = [
      ...new Set(eventos.map((categories) => categories.category)),
    ];
    mostrarchecks(category, checks);
    filtroBuscador(eventos, input, );
    checkCategoria(eventos, input);
  });

checks.addEventListener("change", (e) => {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      let eventos;
      eventos = data.events;

      let inputValue = input.value.toLowerCase();

      let aux = filtroBuscador(eventos, inputValue);
//console.log(aux)
      let aux2 = checkCategoria(aux);
      console.log(aux2)
     mensajeError(aux2, cards);
    });
});



input.addEventListener("keyup", (e) => {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      let eventos;
      eventos = data.events;

  e.preventDefault();
  let inputValue = input.value;
  let aux = filtroBuscador(eventos, inputValue);
  console.log(aux)
  let aux2 = checkCategoria(aux);
 mensajeError(aux2, cards);
})
})
