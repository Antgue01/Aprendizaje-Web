class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
}
// document.getElementById('saludo').onclick = ()=> saludar();
let a =23;
let b = '23';
document.writeln(`${a} (number) = = ${b} (string) => ${a == b}</br>`);
document.writeln(`${a} (number) = = = ${b} (string) => ${a === b}</br>`);
document.writeln(parseFloat(b) + a);


function saludar(){

    let nombre = prompt("mensaje");
    document.writeln(`¡Hola, <strong>${nombre}</strong>!</br>`);
}

let as ='soy una cadena';
as = as.split(' ');
let e =[1,2,3,4,5,6,7,8,9,10];
e.forEach((element)=>document.writeln(element));
e.splice(4,3);
document.writeln('</br>');
e.forEach((element)=>document.writeln(element));
document.writeln('</br>'); 
for(let i=0; i<20; i++){
    document.writeln(`${Math.round(Math.random()*(5-3) + (3))}<br> `);//3 - 5 es el rango
}

const persona = new Persona('Juan', 23);
document.writeln(persona.nombre);
persona.setNombre = 'Pedro';
document.writeln(persona.nombre);
console.log(console.dir(persona));
const ttle = document.getElementById('title');
ttle.setAttribute('tabindex', '-1');
document.writeln(ttle.className);
document.writeln("<br>");
const input = document.getElementById('input');

input.value = 'Hola';
document.writeln(input.value);