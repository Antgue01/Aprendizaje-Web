"use strict";
import Color from "https://colorjs.io/dist/color.js";
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

//#region  Classes
class Texturizer {
    constructor() {
        this.#samples = document.getElementById("samples");
        this.#texturizerZone = document.getElementById("Texturizer");

        this.#initializeSamples();

        this.#samples.addEventListener("dragover", (e) => {
            e.preventDefault();
            this.#samples.style.backdropFilter = "brightness(.8)";
        });
        this.#samples.addEventListener("dragleave", () => this.#samples.style.backdropFilter = "brightness(1)");
        this.#samples.addEventListener("drop", (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData("text/json");
            const json = data == "" ? undefined : JSON.parse(data);
            //Si no tiene json (y por tanto no va a venir del texturizer porque estos lo tienen)
            //O bien la clase no tiene texturizer
            if (json === undefined || (json !== undefined && json.class !== "texturizer")) {
                this.addImages(e.dataTransfer.files);
            }
            this.#samples.style.backdropFilter = "brightness(1)";

        });
        this.#texturizerZone.addEventListener("dragover", (e) => e.preventDefault());

        this.#texturizerZone.addEventListener("drop", (e) => {
            const rawData = e.dataTransfer.getData("text/json");
            if (rawData !== "") {
                const data = JSON.parse(rawData);
                this.#texturize(data);
            }
        });
    }
    //Public methods
    addImages(images) {
        for (const img of images) {
            if (img.type.startsWith("image/")) {

                const fileReader = new FileReader();
                fileReader.readAsDataURL(img);
                fileReader.addEventListener("load", e => this.#addImage(e.target.result))
            }
        }

    }
    // Private fields
    #samples;
    #texturizerZone;

    //Private methods
    #addImage(img) {
        const node = document.createElement('img');
        node.src = img;
        node.id = `Texture${this.#samples.children.length + 1}`;
        this.#samples.appendChild(node);
        this.#initializeSample(this.#samples.lastElementChild);

    }
    #texturize(data) {
        if (data.class === "texturizer") {
            if (data.id !== undefined)
                this.#texturizerZone.textContent = data.id;
            else this.#texturizerZone.textContent = "";

            const texture = data.texture;
            if (texture !== undefined && URL.canParse(texture))
                this.#texturizerZone.style.backgroundImage = `url(${texture})`;
            else this.#texturizerZone.textContent = "Imagen no válida";
        }
    }
    #initializeSamples() {
        for (const sample of this.#samples.children) {
            this.#initializeSample(sample);
        }

    }
    #initializeSample(sample) {
        sample.addEventListener("dragstart", (e) => {

            const obj = {
                class: "texturizer",
                id: sample.id,
                texture: sample.src
            };
            e.dataTransfer.setData("text/json", JSON.stringify(obj));
            sample.style.opacity = ".5";

        });
        sample.addEventListener("dragend", () => sample.style.opacity = "1")

    }
}
//#endregion Classes
//#region Functions

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

function tiempoCumple() {
    const cumple = new Date(new Date().getFullYear(), 0, 17);
    const ahora = new Date();
    const numDif = ahora.valueOf() - cumple.valueOf();
    //Si aún no ha llegado el cumpleaños cambiamos el año al pasado y, para que cuadren las cuentas, lo adelantamos un día
    const dif = numDif < 0 ? new Date(ahora.valueOf() - new Date(new Date().getFullYear() - 1, 0, 18).valueOf()) : new Date(numDif);
    const dias = dif.getDate();
    const meses = dif.getMonth();
    alert(`Han pasado ${meses} ${meses == 1 ? "mes" : "meses"} y ${dias} ${dias == 1 ? "día" : "días"} desde mi cumpleaños.`);


}

function bdAddData(bd, so, object) {
    const transaction = bd.transaction(so, "readwrite");
    transaction.objectStore(so).add(object);
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

const loadBoxes = async () => {
    const request = await fetch("Files/boxes.json");
    const json = await request.json();
    //Creamos la caja
    for (let i = 0; i < numLoadPublications; i++) {
        if (publications < json["content"].length) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = json["content"][publications].text;
            const color = json["content"][publications].color;
            const colorObj = new Color(color);
            colorObj.lighten(-0.2);
            box.style.backgroundColor = color;
            box.style.borderColor = colorObj.toString();
            boxsContainer.appendChild(box);
            publications++;
        }
    }
}
//#endregion Functions

//#region Buttons
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

document.getElementById("cumple").addEventListener('click', tiempoCumple);

//drag-drop
const circle = document.querySelector(".circle");
const dragZone = document.querySelector(".drag-zone");

circle.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", circle.id);
    circle.style.outline = "2px dashed #48e";
    // circle.style.position="absolute";

}
);
circle.addEventListener("dragend", () => circle.style.outline = "none");

dragZone.addEventListener("dragover", (e) => e.preventDefault());
dragZone.addEventListener("drop", (e) => {
    if (e.dataTransfer.getData("text/plain") === circle.id)
        alert("Bien, has metido el círculo");
    else alert("Te dije que metieras el círculo");
});

//Texturizer
const texturizer = new Texturizer();



//Texturizer add images button
const addImgsButton = document.getElementById("texturizerAdd");
addImgsButton.addEventListener("change", e => texturizer.addImages(e.currentTarget.files));

//IndexDB

const nombresDBReq = indexedDB.open("nombres", 1);
nombresDBReq.addEventListener("upgradeneeded", () => {
    //Create table
    const nombresOS = nombresDBReq.result.createObjectStore("nombres", { autoIncrement: true });
});

const nombresContainer = document.querySelector(".nombres__container");
const newName = (name) => {
    return `<div class="nombres__nombre__container">
            <h2 class="nombre__nombre">${name}</h2>
            <div class="nombre__options">
                <button class="posible">Guardar</button>
                <button class="delete">Eliminar</button>
            </div>
        </div>`;
}
//Add all keys to UI
nombresDBReq.addEventListener("success", () => {
    const transaction = nombresDBReq.result.transaction("nombres", "readonly");
    const oS = transaction.objectStore("nombres");
    const keysRequest = oS.getAllKeys();
    keysRequest.addEventListener("success", () => {
        for (const key of keysRequest.result) {
            const keyReq = oS.get(key);
            keyReq.addEventListener("success", () => {
                nombresContainer.innerHTML += newName(keyReq.result.name)
            })
        }
    })
})
//Add button
const addNombre = document.getElementById("addnombres-name");
document.getElementById("add-nombres-add").addEventListener("click", () => {
    if (addNombre.value !== "") {
        bdAddData(nombresDBReq.result, "nombres", { "name": addNombre.value });
        nombresContainer.innerHTML += newName(addNombre.value);
    }
});


//Match Media

const query500 = matchMedia("(max-width: 500px)");
query500.addEventListener("change", (obj) => {
    if (obj.matches && !document.getElementById("match-media-box")) {
        const box = document.createElement("DIV");
        box.innerHTML = `<div id="match-media-box">
                                <h2>Aparezco en 500px</h2>
                                </div>`;
        console.log(box);
        document.getElementById("media-box-container").appendChild(box);
        box.animate([
            {
                opacity: 0,
                translate: "0 -50px"
            },
            {
                opacity: 1,
                translate: "0 0"
            }

        ],
            {
                duration: 500,
                fill: "forwards"
            }
        )
    }
    else {
        const box = document.getElementById("match-media-box");
        if (box !== null) {
            box.animate([
                {
                    opacity: 1,
                    translate: "0 0"
                },
                {
                    opacity: 0,
                    translate: "0 -50px"
                }

            ],
                {
                    duration: 500,
                    fill: "forwards"
                }
            )
            setTimeout(() => box.remove(), 500);
        }
    }

});
//Intersection Observer
let publications = 0;
const numLoadPublications = 3;

const boxsContainer = document.querySelector(".box__publications .box__container");
const intersection = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        //lo hacemos asíncrono para asegurar que lleguen en orden
        loadBoxes();
    }
});
const next = document.querySelector(".box__publications .next");
intersection.observe(next);
//#endregion Buttons