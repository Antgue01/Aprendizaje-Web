student = [
    { name: "cofla", mail: "cofla@flaco.com", subject: "Matemáticas", week: 1 },
    { name: "pepe", mail: "pepiño@ñoqui.com", subject: "Lengua", week: 2 },
    { name: "Jorge Ramírez", mail: "ramírez@ñoqui.com", subject: "Física 3", week: 2 },
    { name: "Facundo Roberto", mail: "facu@comunista.com", subject: "Economía Básica", week: 2 },

];
const grid = document.querySelector(".grid__container");
document.getElementById("boton__confirmar").addEventListener('click',confirmar);

let code ='';
for (data of student) {

     code+= `<div class="grid__item nombre">${data["name"]}</div>
        <div class="grid__item email">${data["mail"]}</div>
        <div class="grid__item asignatura">${data["subject"]}</div>
        <div class="grid__item semana">
            <select>
                <option value="1">Semana 1</option>
                <option value="2">Semana 2</option>
            </select>
        </div>`;
    // Le añadimos todo el código 
}
grid.innerHTML = code;

function confirmar(){
    const weeks = document.querySelectorAll(".semana");
    for (week of weeks){
        let val = week.children[0].value;
        week.innerHTML=`Semana ${val}`;
    }
}

function lenta() {

    for (data of student) {

        // Nombre
        const nameDiv = document.createElement("DIV");
        nameDiv.classList.add("grid__item");
        nameDiv.classList.add("nombre");
        nameDiv.textContent = data["name"];
        // Mail
        const mailDiv = document.createElement("DIV");
        mailDiv.classList.add("grid__item");
        mailDiv.classList.add("email");
        mailDiv.textContent = data["mail"];
        // Materia
        const subjectDiv = document.createElement("DIV");
        subjectDiv.classList.add("grid__item");
        subjectDiv.classList.add("asignatura");
        subjectDiv.textContent = data["subject"];
        // Semana
        const weekDiv = document.createElement("DIV");
        weekDiv.classList.add("grid__item");
        weekDiv.classList.add("semana");

        const select = document.createElement("SELECT");
        const sem1 = document.createElement("OPTION");
        const sem2 = document.createElement("OPTION");

        sem1.value = 1;
        sem2.value = 2;
        sem1.textContent = "Semana 1";
        sem2.textContent = "Semana 2";

        select.appendChild(sem1);
        select.appendChild(sem2);

        weekDiv.appendChild(select);

        grid.appendChild(nameDiv);
        grid.appendChild(mailDiv);
        grid.appendChild(subjectDiv);
        grid.appendChild(weekDiv);
    }
}