class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set setEdad(edad) {
        this.edad = Number.parseInt(edad);
    }
    writeData() {
        document.writeln(persona.nombre);
        document.writeln(persona.edad);

    }
}
function saludar() {

    let nombre = prompt("Nombre");
    document.writeln(`¡Hola, <strong>${nombre}</strong>!</br>`);
}
function check() {
    let a = 23;
    let b = '23';
    document.writeln(`${a} (number) = = ${b} (string) => ${a == b}</br>`);
    document.writeln(`${a} (number) = = = ${b} (string) => ${a === b}</br>`);

}
function countAndSplice() {
    let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    e.forEach((element) => document.writeln(element));
    e.splice(4, 3);
    document.writeln('</br>');
    e.forEach((element) => document.writeln(element));
    document.writeln('</br>');
}
function range() {
    let min = Number.parseInt(prompt("min"));
    let max = Number.parseInt(prompt("max"));
    for (let i = 0; i < 20; i++) {
        document.writeln(`${Math.round(Math.random() * (max - min) + (min))}<br> `);//3 - 5 es el rango
    }
}
function askPrint()
{
    let print = window.confirm("¿Seguro que quieres imprimir?");
    if (print){
        window.print();
    }
}
document.getElementById('Saludo').addEventListener('click', saludar);
document.getElementById('check').addEventListener('click', check);
document.getElementById('count').addEventListener('click', countAndSplice);
document.getElementById('rnd').addEventListener('click', range);
const persona = new Persona('Juan', 23);
document.getElementById('persona').addEventListener('click', () => persona.writeData());
document.getElementById('name').addEventListener('click', () => { let name = prompt("nombre"); persona.setNombre = name; });
document.getElementById('age').addEventListener('click', () => { let age = prompt("Edad"); persona.setEdad = age;});
document.getElementById('yt').addEventListener('click', () => window.open("https://gg.deals"));
document.getElementById('print').addEventListener('click', askPrint);
document.getElementById('resize').addEventListener('click', () =>  window.moveBy(200,0));
document.getElementById('mouseup').addEventListener('mouseup', () =>  alert("Soltaste el click weón"));
document.getElementById('keys').addEventListener('keydown', () =>  console.log("Tecla pulsada"));
addEventListener('resize', () =>  console.log(`Las nuevas medidas son ${window.innerWidth}px de ancho x ${window.innerHeight}px de alto`));
const ttle = document.getElementById('title');
ttle.setAttribute('tabindex', '0');