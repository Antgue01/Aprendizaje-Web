function hideLevel(itemContainer) {

    let i = itemContainer.nextElementSibling;
    while (i != null) {
        i.style.display === 'none' ? i.style.display = 'flex' : i.style.display = 'none';
        i = i.nextElementSibling;
    }
}
function copy(btn) {
    const code = btn.previousElementSibling.textContent;
    navigator.clipboard.writeText(code);

}
const label = document.querySelectorAll('.index__item__label');
for (let element of label) {
    element.addEventListener('click', () => hideLevel(element.parentElement));
}
// Quitamos los after del último nivel.
let iterator = label.length - 1;
while (!label[iterator].nextElementSibling.classList.contains("index__lv2")) {
    label[iterator].parentElement.classList.add("last__index__item");
    iterator--;
}
label[iterator].parentElement.classList.add("last__index__item");

const copyButtons = document.querySelectorAll(".code__box__copy");

for (const button of copyButtons) {
    button.addEventListener("click", () => {
        copy(button);
        button.nextElementSibling.animate(
            [{
                opacity: 0,
                zIndex: 1,
                translate: "0 0",
                offset: 0
            },
            {
                opacity: 1,
            },

            {
                opacity: 0,
                translate: "0 -10px",
                offset: 1

            }],
            {
                duration: 500,
                easing: "ease-out",
                
            }
        );
    });
};

//Get all links starting with "#"
const links = document.querySelectorAll(`a[href^="#"]`);
// For every link to a box list item, we open it.  
for (const link of links) {
    link.addEventListener("click", () => {
        const ref = document.getElementById(link.getAttribute("href").substring(1));
        //The input which is child of the label which is child of the item.
        if (ref.classList.contains("--can-open") && !ref.children[0].children[0].checked) {
            ref.children[0].children[0].checked = true;
        }
    });
    
}

