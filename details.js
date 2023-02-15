import { tarjetaDetalles } from "./module/functions.js"

const detailSection = document.getElementById('detail-section')

let events;

fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then( data => data.json())
    .then( res => {
    events = res.events
    const params = new URLSearchParams(location.search)
    const id = params.get( "id" )
    const evento = res.events.find( evento => evento._id == id) 
    tarjetaDetalles(evento, detailSection)

    })

    .catch ( err => console.log(err))
