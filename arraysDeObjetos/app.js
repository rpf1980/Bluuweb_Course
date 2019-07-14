const array = ['HTML', 15, true];

console.log(array);

// Creamos un objeto

const objeto = {

    nombre: 'HTML',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'Introduccion',
        videos: 20
    }
}

console.log(objeto);

console.log(objeto.nombre);
console.log(objeto.duracion);

console.log(objeto.capitulos.nombre);


//Creamos un array de objetos

const arrayObjetos = [

    {
        nombre: 'HTML',
        estado: true
    },
    {
        nombre: 'CSS',
        estado: false
    },
    {
        nombre: 'JS',
        estado: true
    }
]

console.log(arrayObjetos);

console.log(arrayObjetos[2].nombre);

// Recorremos el array de objetos

for (let indice of arrayObjetos) {

    console.log(indice.nombre);
}