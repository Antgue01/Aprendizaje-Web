let alto= window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es ${alto} y el ancho es ${ancho}. ¿Quieres comprar la TV?`);

let answer = comprar ? "Gracias por su compra":"Elige otra opción";

document.writeln(`<strong>${answer}.</strong>`)

document.writeln(`<br><br>EJ 2: ${window.location.protocol}://${window.location.hostname}${window.location.pathname}`);