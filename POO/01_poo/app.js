/* const PeliculaUno = {

    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `reproduciendo película... ${this.nombre}`;
    }
}
 */
// Crearemos una clase

class Pelicula {

    constructor(nombre, id){

        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo pelicula ${this.nombre}`;
    }
}

// Instanciamos objetos de la clase creada

const peliculaUno = new Pelicula('PepaPi', 98);
const peliculaDos = new Pelicula('Dora la Exploradora', 99);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());

// Herencia de clases
class Serie extends Pelicula {

    constructor(nombre, id, cap){

        super(nombre,id);
        this.cap = cap;
    }

    reproducirCapitulo(){

        return `Reproduciendo capítulo ... ${this.cap} ... ${this.nombre}`;
    }
}

const serieUno = new Serie('Dexter', 3, 'Capítulo55');
console.log(serieUno.reproducirCapitulo());