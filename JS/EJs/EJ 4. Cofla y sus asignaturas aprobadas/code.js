const materias = [
    { subjectName: "Física II", subjectScore: 2 },
    { subjectName: "Física I", subjectScore: 10 },
    { subjectName: "Matemáticas", subjectScore: 7 }
];
const materiasHTML = document.querySelector(".materias");

const obtainSubjects = (id) => {
    return new Promise((resolve, reject) => {
        if (id >= materias.length || id < 0 )
            reject("Esa materia no existe");
        //Simulamos que el servidor tarda en devolver la solicitud
        else setTimeout(()=>resolve(materias[id]),Math.random()*1000);
    })
}
const returnSubjects =async ()=>{
    for (subject in materias){
        try{
            //Es más rápido formar un string de código y devolverlo fuera del for, porque actualizamos el DOM una vez
            //pero así simulamos una carga lenta.
            const data = await obtainSubjects(subject);
            materiasHTML.innerHTML+=`<div class="materia"><div class="nombre">${data["subjectName"]}</div>\n<div class="nota">${data["subjectScore"]}</div></div>`;            ;
        }
        catch(e){
            document.writeln(e);
        }
    }
}
returnSubjects();
