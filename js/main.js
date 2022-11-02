// Bienenido al Sistema
alert("Sistema Control Stock de Mercadería");

// Ingreso Datos Empleado
let nombreEmpleado = prompt("Ingrese Nombre y Apellido");
let cuilEmpleado = Number(prompt("Ingrese N° CUIL sin guiones"));

// Bienvenido Usuario
function saludar(nombreEmpleado, cuilEmpleado) {
    alert("Bienvenido "+ nombreEmpleado + " N° de Cuil / Registro: " + cuilEmpleado)
}
saludar(nombreEmpleado, cuilEmpleado);

// Condicional
let seleccionProducto = prompt("Ingrese Nombre del Producto a Controlar: Monitor / Teclado / Mouse / Parlante");

while (seleccionProducto != 'Monitor' && seleccionProducto !='Teclado' && seleccionProducto !='Mouse' && seleccionProducto !='Parlante') {
    alert("El nombre ingresado es incorrecto");
    seleccionProducto = prompt("Ingrese Nombre del Producto a Controlar: Monitor / Teclado / Mouse / Parlante");
}

// Control de Flujos
if (seleccionProducto == "Monitor") {
    alert("Ud. realizará el control de Stock de Monitores")
} else if (seleccionProducto == "Teclado") {
    alert("Ud. realizará el control de Stock de Teclados")
} else if (seleccionProducto == "Mouse") {
    alert("Ud. realizará el control de Stock de Mouses")
} else {
    alert("Ud. realizará el control de Stock de Parlantes")
}