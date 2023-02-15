import { mostrarchecks, checkCategoria, filtroBuscador,mensajeError, mostrarTarjetasUpcoming } from "./module/functions.js"

const cards = document.getElementById("section-cards");
const checks = document.getElementById("section-check");
const input = document.querySelector(".form-control");
let eventos
let fechas

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then((data) => {
    eventos = data.events
    fechas = data.currentDate
    mostrarTarjetasUpcoming(eventos, cards, fechas)
    let category = [...new Set(eventos.map(categories => categories.category))]
    mostrarchecks(category, checks)
  })

checks.addEventListener("change", (e) => {
  let inputValue = input.value.toLowerCase()
  let aux = filtroBuscador(eventos, inputValue)
  let aux2 = checkCategoria(aux)
 mensajeError(aux2, cards)
})

input.addEventListener("keyup", (e) => {
  e.preventDefault()
  let inputValue = input.value.toLowerCase()
  let aux = filtroBuscador(eventos, inputValue)
  let aux2 = checkCategoria(aux)
 mensajeError(aux2, cards)
})
