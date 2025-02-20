"use strict";
//#region Globals
const MAX__WIDTH = 1250;
//#endregion
//#region Functions
function hideLevel(itemContainer) {

    let i = itemContainer.nextElementSibling;
    while (i != null) {
        i.style.display === 'none' ? i.style.display = 'flex' : i.style.display = 'none';
        i = i.nextElementSibling;
    }

    //Fix for lv1's after not hiding when clicked
    const lv1 = itemContainer.children[1].nextElementSibling;
    if (lv1.classList.contains("index__lv1")) {
        //if the auxiliar property of display is block, set none and vice versa.
        itemContainer.style.getPropertyValue("--aux-display") === "block" ? itemContainer.style.setProperty("--aux-display", "none") : itemContainer.style.setProperty("--aux-display", "block");
    }
}
function copy(btn) {
    const code = btn.previousElementSibling.textContent;
    navigator.clipboard.writeText(code);

}
function boxExplanationInteract(label) {
    //get elements
    const explanation = label.querySelector(".box__explanation");
    const checkbox = label.querySelector("input");
    const dur = 200;

    //unfold to calc height
    explanation.style.height = "auto";
    const calcHeight = explanation.scrollHeight;

    //fold animation
    if (!checkbox.checked) {
        explanation.animate([
            { height: `${calcHeight}px` },
            { height: 0 },
        ], {
            duration: dur,
            easing: "linear"
        });
        //keep folded
        explanation.style.height = 0;
    }
    //unfold animation
    else {

        explanation.animate([
            { height: `${calcHeight}px` },
            { height: 0 },
        ],
            {
                duration: dur,
                direction: "reverse",
                easing: "linear"

            });
    }
}
function hideIndex(index) {
    if (window.innerWidth <= MAX__WIDTH)
        index.checked = true;
}

function mainMaxWidth(main) {
    if (window.innerWidth <= MAX__WIDTH)
        main.style.maxWidth = "none";
    else
        main.style.maxWidth = `${screen.width * .5}px`;

}
//#endregion Functions

//#region Code

//lv 1 after display fix
document.querySelector(".index__item:has(.index__lv1)").style.setProperty("--aux-display", "block");

//Index hide level events
const label = document.querySelectorAll('.index__item__label');
for (let element of label) {
    element.addEventListener('click', () => hideLevel(element.parentElement));
}
//Remove ::after from last level
let iterator = label.length - 1;
while (!label[iterator].nextElementSibling.classList.contains("index__lv2")) {
    label[iterator].parentElement.classList.add("last__index__item");
    iterator--;
}
label[iterator].parentElement.classList.add("last__index__item");

//Code box copy animation
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

const indexChecker = document.getElementById("index-close");
//Get all links starting with "#"
const links = document.querySelectorAll(`a[href^="#"]`);
// For every link to a box list item, we open it.  
for (const link of links) {

    link.addEventListener("click", () => {
        const ref = document.getElementById(link.getAttribute("href").substring(1));
        //The input which is child of the label which is child of the item.
        const checkbox = ref.querySelector("input[type=checkbox]");
        if (ref.classList.contains("--can-open") && !checkbox.checked) {
            checkbox.click();
        }
    });
    // Close index when small resolutions
    if (link.parentElement.classList.contains("index__item")) {
        link.addEventListener("click", () => hideIndex(indexChecker));
    }
}



//Box explanations
const boxLabels = document.querySelectorAll(`.box label`);
for (const label of boxLabels) {
    label.addEventListener(`click`, () => boxExplanationInteract(label));
}

//Main max-width
const main = document.querySelector("main");
mainMaxWidth(main);
window.addEventListener("resize", () => mainMaxWidth(main))
//#endregion Code

