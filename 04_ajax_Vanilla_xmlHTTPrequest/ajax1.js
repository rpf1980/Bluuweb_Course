console.log('activo');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {

    //console.log('function activada');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'archivo.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            console.log(this.responseText);
        }
    }
}