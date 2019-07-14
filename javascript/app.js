// Funciones ARROW

const saludoId = document.getElementById('saludo');
const sumaId = document.getElementById('suma');
const suma2Id = document.getElementById('suma2');

let saludar = nombre => 'Hola ' + nombre;
let sumatorio = (num1,num2) => num1+num2;

let sumatorio2 = (n1,n2) => {

    let n3 = 200;
    return n1 + n2 + n3;
}

saludoId.innerHTML = saludar('Manolito');
sumaId.innerHTML += sumatorio(20,30);
suma2Id.innerHTML += sumatorio2(30,70);


