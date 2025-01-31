async function pedirInfo() {
    try {
        let peticion = await fetch("info.json");
        let res = await peticion.json();
        return res;
    }
    catch (e) {
        console.log(e);
        return {};
    }
}
const answer = document.querySelector(".answer");
document.getElementById("aprobados").addEventListener("click", async () => {
    let info = await pedirInfo();
    let data = Object.keys(info).length === 0 ? "La petición falló" : info.aprobados;
    answer.innerHTML = `APROBADOS: <span class ="aprobado">${data}</span>`;
});
document.getElementById("suspensos").addEventListener("click", async () => {
    let info = await pedirInfo();
    let data = Object.keys(info).length === 0 ? "La petición falló" : info.suspensos;
    answer.innerHTML = `SUSPENSOS: <span class ="suspenso">${data}</span>`;
});
document.getElementById("total").addEventListener("click", async () => {
    let info = await pedirInfo();
    let data = Object.keys(info).length === 0 ? "La petición falló" : info.aprobados + info.suspensos;
    answer.innerHTML = `TOTAL: <span class ="total">${data}</span>`;
});