// Lectura de API con Fetch

const contenido = document.querySelector('#contenido');

function traer() {

    fetch('https://randomuser.me/api/') // Fetch toma por defecto el método GET... pero también podemos enviar con POST
    .then(res => res.json()
    .then(data => {
        console.log(data.results['0']);
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last}</p>`
    }))
}

