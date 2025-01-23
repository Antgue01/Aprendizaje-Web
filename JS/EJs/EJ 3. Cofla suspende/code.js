const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const subjectsInput = document.getElementById("subjects-select");
const submitBtn = document.getElementById("apply-for-test");
const result = document.querySelector(".result")
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const validate = validar(nameInput.value, emailInput.value);
    if (validate[0]) {
        if (!result.classList.replace("--error", "--success"))
            result.classList.add("--success");
        result.textContent = `El señor ${nameInput.value} con email ${emailInput.value} tiene que recuperar ${subjectsInput.value}`;
    }
    else {
        if (!result.classList.replace("--success", "--error"))
            result.classList.add("--error");

        result.textContent = validate[1];
    }
});

function validar(name, mail) {
    let resultado = [];
    let split = mail.split('.');
    if (name.length < 5) {
        resultado[0] = false;
        resultado[1] = "El nombre es demasiado corto (<5 caracteres)";
    }
    else if (name.length > 40) {
        resultado[0] = false;
        resultado[1] = "El nombre es demasiado largo (>40 caracteres)";
    }
    else if (mail.length < 5) {
        resultado[0] = false;
        resultado[1] = "El mail es demasiado corto (<5 caracteres)";
    }
    else if (mail.length > 40) {
        resultado[0] = false;
        resultado[1] = "El mail es demasiado largo (>40 caracteres)";
    }
    // Por si alguien decide cambiar el tipo de email a texto con F12
    else if (mail.indexOf("@") == -1) {
        resultado[0] = false;
        resultado[1] = "El email no tiene @";
    }
    else if (split.length < 2 || split[1] === "") {
        resultado[0] = false;
        resultado[1] = "El mail no tiene un dominio";
        console.dir(mail.split('.'));
    }
    else {
        resultado[0] = true;
        resultado[1] = '';
    }
    return resultado;
}
