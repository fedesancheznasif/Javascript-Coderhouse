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
let producto = prompt("Que producto desea cotizar? Remera / Jean / Buzo");

while (producto != "Remera" && producto != "Jean" && producto != "Buzo") {
    alert ("Producto Incorrecto");
    producto = prompt("Que producto desea cotizar? Remera / Jean / Buzo")
}

if (producto == "Remera") {
    alert("Producto: Remera. Valor de contado: $4990");
} else if (producto == "Jean") {
    alert("Producto: Jean. Valor de contado: $9990");
} else {
    alert("Producto: Buzo. Valor de contado: $8990");  
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
productos.push (new Producto ("Buzo", "8990"));

for (const producto of productos) {
    alert("Producto: " + producto.nombre + "; Precio de contado: $" + producto.precio + "; Precio en Cuotas: $" + producto.precioEnCuotas());
}