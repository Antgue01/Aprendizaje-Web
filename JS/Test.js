
let a =23;
let b = '23';
document.writeln(`${a} (number) = = ${b} (string) => ${a == b}</br>`);
document.writeln(`${a} (number) = = = ${b} (string) => ${a === b}</br>`);
document.writeln(parseFloat(b) + a);

let arr = [1,2,3,4,5];
for( elem in arr){
    alert(elem);
}
function saludar(){
    let nombre = prompt("mensaje");
    document.writeln(`¡Hola, <strong>${nombre}</strong>!</br>`);
}