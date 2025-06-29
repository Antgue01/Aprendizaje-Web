"use strict";
//#region Globals
const MAX__WIDTH = 1250;
//#endregion
//#region Classes
class Node {
    #nextNodes;
    #domElements;
    #letter;
    #parent;

    constructor(letter, DOMelement, nextNode, parent) {
        this.#domElements = new Set([DOMelement]);
        this.#letter = letter;
        this.#nextNodes = nextNode;
        this.#parent = parent;
    }
    get element() { return this.#domElements; }
    get letter() { return this.#letter; }
    get parent() { return this.#parent; }

    addElement(DOMelement) {
        if (!this.#domElements.has(DOMelement))
            this.#domElements.add(DOMelement);
    }

    next(char) {
        if (char in this.#nextNodes)
            return this.#nextNodes[char];
        else return new Node(' ', this.#domElements, {}, this.#parent);
    }
    append(node) {
        //We only append the letter if we don't have it
        if (!(node.#letter in this.#nextNodes))
            this.#nextNodes[node.#letter] = node;
        else this.#nextNodes[node.#letter].push(node.#nextNodes);
    }

}
class Trie {
    #root;
    constructor() {
        this.#root = new Node(' ', $(document), {}, null);
    }
    insert(word, DOMelement) {
        let node = this.#root;
        for (const char of word) {
            const nextNode = node.next(char);
            if (char == ' ')
                continue;
            //if we have this letter, continue inserting with the next letter
            if (nextNode.letter !== ' ') {
                node.addElement(DOMelement);
                node = nextNode;
            }
            //on the contrary, if we don't have this letter, append it
            else {
                const newNode = new Node(char, DOMelement, {}, node);
                node.append(newNode);
                //We add the dom element to the list of final elements
                node.addElement(DOMelement);
                node = newNode;
            }
        }
    }

    get getRoot() { return this.#root; }
}




//#endregion Classes
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
function showIndexItem(item) {
    item.removeAttribute('hidden');
    item.parentElement.parentElement.style.display = 'flex';
    item.parentElement.classList.remove("hidden__index__item");
    item.parentElement.querySelector('.index__item__label').removeAttribute('hidden');
    item.parentElement.querySelector('.index__item__bar')?.removeAttribute('hidden');

}
function showAllNodeElements(searchNode) {
    for (let element of searchNode.element) {
        element = element.querySelector('a');
        showIndexItem(element);
        while (!element.classList.contains("index__lv2")) {
            element = element.parentElement.parentElement.parentElement.children[0].querySelector('a');
            showIndexItem(element);
            console.log(element);
        }
    }
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

//Index term search
// TODO: Quizás conviene que en lugar de usar un trie, usemos un map con cada letra y los Eementos del DOM, ya que con el trie nos mostrará solo las palabras que empiecen por lo que queramos
// y no las que contengan lo que queramos.
const searchTrie = new Trie();
const indexItems = document.querySelectorAll(".index__container .index__item__container .index__item:not(:has(.index__lv1)) a");
for (const item of indexItems) {
    //We insert the text content of the link, and the item itself as the DOM element.
    searchTrie.insert(item.textContent.toLowerCase(), item.parentElement);
}
let searchNode = searchTrie.getRoot;
let searchPreviousLenght = 0;
const initialIndex = document.querySelector(".index .index__container").children[0];

document.querySelector(".index input").addEventListener("input", (e) => {
    if (e.target.value.length === 0) {
        for (const item of indexItems) {
            showIndexItem(item);
        }
        searchNode = searchTrie.getRoot;
    }
    // TODO: Si se borra una selección, que se muestre todo el índice.
    else {
        //Hide all index items
        for (const item of indexItems) {
            item.setAttribute('hidden', true);
            item.parentElement.parentElement.style.display = 'none';
            item.parentElement.classList.add("hidden__index__item");
            item.parentElement.querySelector('.index__item__label').setAttribute('hidden', true);
            //If the item contains the search term, we hide it.
            item.parentElement.querySelector('.index__item__bar')?.setAttribute('hidden', true);

        }
        if (e.data !== null)
            searchNode = searchNode.next(e.data);
        else
            searchNode = searchNode.parent;
        showAllNodeElements(searchNode);
    }
});


//#endregion Code

