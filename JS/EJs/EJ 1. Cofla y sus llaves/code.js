class Key{
    constructor(name, model, price, img){
        this.name = name;
        this.model = model;
        this.price = price;
        this.img = img;
    }
    getKeyData(){
        return `<h2>${this.name}</h2><img src="${this.img}"><h3>${this.model}</h3><p>Precio: <strong>${this.price}</strong> gold.</p>`;
    }
}
function select(nb){

   document.querySelector('.key__selected').value=nb; 
}
const list = document.querySelector('.key__list');
let fragment =document.createDocumentFragment();
const submit = document.querySelector('.submit');
for (let i = 0; i < 30; i++) {
    let modelo = Math.round(Math.random()*100000);
    let price =Math.round(Math.random()*(100-40) + 40);
    const key = new Key(`Llave nº ${i+1}`,`Modelo ${modelo}`, price,"key.png" );
    let li = document.createElement('LI');
    li.setAttribute('id',modelo);
    li.addEventListener('click',()=>select(li.id));
    li.tabIndex = i;
    li.innerHTML = key.getKeyData();
    li.classList.add('key');
    fragment.appendChild(li);
}
list.appendChild(fragment);

