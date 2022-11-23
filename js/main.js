// Bienvenido
alert ("Bienvenido al sistema de cotización de productos");

// Ingreso de Datos
let nombre = prompt("Ingrese Nombre y Apellido");

// Funcion
function saludar (nombre) {
    alert ("Bienvenido " + nombre);
}
saludar(nombre);

// Control de Flujos y Condicional
let producto = prompt("Que producto desea cotizar? Remera / Jean / Camisa / Buzo");

while (producto != "Remera" && producto != "Jean" && producto != "Camisa" && producto != "Buzo") {
    alert ("Producto Incorrecto");
    producto = prompt("Que producto desea cotizar? Remera / Jean / Camisa / Buzo")
}

if (producto == "Remera") {
    alert("Producto: Remera. Valor de contado: $4.990");
} else if (producto == "Jean") {
    alert("Producto: Jean. Valor de contado: $9.990");
} else if (producto == "Camisa") {
    alert("Producto: Camisa. Valor de contado: $7.530");
} else {
    alert("Producto: Buzo. Valor de contado: $8.990");  
}

// Objetos
class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    precioEnCuotas() {
        this.precio = this.precio * 1.2;
        return this.precio;
    }
}

// Array
const productos = [];

productos.push (new Producto ("Remera", "4990"));
productos.push (new Producto ("Jean", "9990"));
productos.push (new Producto ("Camisa", "7530"));
productos.push (new Producto ("Buzo", "8990"));


for (const producto of productos) {
    alert("Producto: " + producto.nombre + "; Precio de contado: $" + producto.precio + "; Precio en 3 Cuotas: $" + producto.precioEnCuotas());
}

// Funciones de Orden Superior
const seisCuotas = productos.map((seis) => Math.round(seis.precio * 1.4));
let masCuotas = prompt('Desea saber el precio en 6 cuotas? Si / No')

while (masCuotas != "Si" && masCuotas != "No") {
    alert('Dato ingresado Incorrecto')
    masCuotas = prompt('Desea saber el precio en 6 cuotas? Si / No')
}

if (masCuotas === 'Si') {
    alert('Remera en 6 cuotas: $'+ seisCuotas[0] + ', Jean en 6 cuotas: $' + seisCuotas[1] + ', Camisa en 6 cuotas: $' + seisCuotas[2] + ', Buzo en 6 cuotas: $' + seisCuotas[3])
} else {
    alert ('Gracias igualmente por su consulta')
}









