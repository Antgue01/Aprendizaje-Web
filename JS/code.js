function hideLevel(itemContainer) {

    let i = itemContainer.nextElementSibling;
    while (i != null) {
        i.style.display === 'none' ? i.style.display = 'block' : i.style.display = 'none';
        i = i.nextElementSibling;
    }
}

const label = document.querySelectorAll('.index__item__label');
for (let element of label){
    element.addEventListener('click', ()=> hideLevel(element.parentElement));
}
// Quitamos los after del último nivel.
let iterator = label.length-1;
while(!label[iterator].nextElementSibling.classList.contains("index__lv2"))
{
    label[iterator].parentElement.classList.add("last__index__item");
    iterator--;
}   
label[iterator].parentElement.classList.add("last__index__item");
