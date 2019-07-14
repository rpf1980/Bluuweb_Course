// Lectura de archivo en local con Fetch

const contenido = document.querySelector('#contenido');

function traer() {

    //contenido.innerHTML = `<p>Contenido del párrafo</p>`; // Estas comillas nos permiten manejar templete literarios entre HTML y JS

    fetch('texto.txt') // Ocupamos un Fetch en indicamos la url de destino
    .then(data => data.text()) // Mediante una promesa (así refieren las acciones del fetch) estamos capturando un dato y además le damos un formato compatible, transformando el dato para poderlo leer (en este caso sería un txt, pero podría ser una imagen o más tipos de formato)
    .then(data=>{ // Hacemos otra promesa con este dato ya transformado

        console.log(data); // Y lo mostramos por consola
        contenido.innerHTML = `${data}`
    })
} 

