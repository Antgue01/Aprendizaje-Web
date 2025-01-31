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
function askPrint() {
    let print = window.confirm("¿Seguro que quieres imprimir?");
    if (print) {
        window.print();
    }
}
function LoadJSON(request, path) {
    request.open("GET", path);
    request.send();
    request.addEventListener('load', () => {
        if (request.readyState == 4)
            alert("La petición está servida");
    })
}
function printJSON(request) {
    if (request.readyState == 4 && request.status == 200)
        alert(request.response);
    else if (request.readyState == 0)
        alert("No hay petición");
    else document.writeln(request.response);
}
function getAPI() {
    fetch("https://reqres.in/api/users?page=1").then((prom) => {
        prom.text().then((res) => {
            res = JSON.parse(res);
            data = res["data"];
            fullData = "";
            for (person of data) {
                fullData += `Mi nombre es ${person["first_name"]} y mi correo electrónico es ${person["email"]}\n\n`;
            }
            alert(fullData);
        });
    });
}
function getAPIJSON() {
    fetch("https://reqres.in/api/users?page=2").then((prom) => prom.json().then((res => {
        data = res["data"];
        string = "";
        for (person of data) {
            string += `${person['id']}: ${person['first_name']} ${person['last_name']}\n\n`;
        }
        alert(string);
    })));
}

function postAPI() {
    const obj = {
        "first_name": "Pepe",
        "last_name": "Viyuela",
        "email": "pepe.viyuela@gmail.com"

    };
    fetch("https://reqres.in/api/users",
        {
            "method": "POST",
            "body": JSON.stringify(obj),
            "headers": {
                "content-type": "application/json"
            }
        }
    ).then((prom) => {
        alert(prom.status);
        prom.json().then((res) => {
            let string = '';
            for (key of Object.keys(res)) {
                string += `${key} : ${res[key]}\n\n`;
            }
            alert(string);
        })
    })

}
function objContainer(title, imgURL) {
    return `<div class="obj__container">
        <h2>${title}</h2>
        <div class="obj">
            <img src="${imgURL}">
        </div>
    </div>`;
}
function personaRndApi(btn) {
    fetch("https://reqres.in/api/users?page=2").then((prom) => prom.json().then((res) => {
        const max = res['per_page'];
        const rnd = Math.round(Math.random() * (max - 1));
        const data = res['data'][rnd];
        btn.outerHTML = objContainer(`${data['first_name']} ${data['last_name']}`, `${data['avatar']}`);
    }))
}
function blob(btn) {

    fetch("imgs/flag.jpg").then((prom) => prom.blob().then((res) => {
        btn.outerHTML = objContainer("", URL.createObjectURL(res));
    }))
}
const asAlert = (text, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), timeout);
    });
}
const asyncFunc = async () => {
    let d1 = await asAlert("1", 2000);
    console.log("inter");
    let d2 = await asAlert("2", 1000);

    console.log(d1);
    console.log(d2);
    alert("Espero 2s hasta que me llega el 1 , hago el inter, espero 1000s hasta que me llega el 2 y escribo primero el 1 y luego el 2. Por tanto soy bloqueante.")

}
const asyncFuncNoAwait = async () => {
    let d1 = asAlert("1", 2000);
    console.log("inter");
    let d2 = asAlert("2", 1000);

    d2.then((r) => console.log(r));
    d1.then((r) => console.log(r));

    setTimeout(() => alert("Hago el inter, espero 1s hasta que me llegue el 2 y lo escribo y espero otro 1s (lo que me queda hasta los 2s que tenía puestos) y me llega el 2 y lo escribo, por lo que no soy bloqueante"), 2001);

}
document.getElementById('Saludo').addEventListener('click', saludar);
document.getElementById('check').addEventListener('click', check);
document.getElementById('count').addEventListener('click', countAndSplice);
document.getElementById('rnd').addEventListener('click', range);
const persona = new Persona('Juan', 23);
document.getElementById('persona').addEventListener('click', () => persona.writeData());
document.getElementById('name').addEventListener('click', () => { let name = prompt("nombre"); persona.setNombre = name; });
document.getElementById('age').addEventListener('click', () => { let age = prompt("Edad"); persona.setEdad = age; });
document.getElementById('yt').addEventListener('click', () => window.open("https://gg.deals"));
document.getElementById('print').addEventListener('click', askPrint);
document.getElementById('resize').addEventListener('click', () => window.moveBy(200, 0));
document.getElementById('mouseup').addEventListener('mouseup', () => alert("Soltaste el click weón"));
document.getElementById('keys').addEventListener('keydown', () => console.log("Tecla pulsada"));
addEventListener('resize', () => console.log(`Las nuevas medidas son ${window.innerWidth}px de ancho x ${window.innerHeight}px de alto`));
const ttle = document.getElementById('title');
ttle.setAttribute('tabindex', '0');

document.getElementById("preg").addEventListener('click', () => alert(!!"d" == true));
document.getElementById("async").addEventListener('click', asyncFunc);
document.getElementById("prom").addEventListener('click', asyncFuncNoAwait);
const peticionAJAX = new XMLHttpRequest();
document.getElementById("loadReq").addEventListener('click', () => LoadJSON(peticionAJAX, "Files/Test.json"));
document.getElementById("loadReqmal").addEventListener('click', () => LoadJSON(peticionAJAX, "Files/Tessft.json"));
document.getElementById("printReq").addEventListener('click', () => printJSON(peticionAJAX));
document.getElementById("apiget").addEventListener('click', getAPI);
document.getElementById("apigetjson").addEventListener('click', getAPIJSON);
document.getElementById("apipost").addEventListener('click', postAPI);
const personRndButton = document.getElementById("apirnd");
personRndButton.addEventListener('click', () => personaRndApi(personRndButton));
const flag = document.getElementById("blob");
flag.addEventListener('click', () => blob(flag));
