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