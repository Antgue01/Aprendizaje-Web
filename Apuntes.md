<h1>Extensiones interesantes VSCode</h1>
<font color ="#b61187"><u><b>Image Preview</u></b></font></br>
<font color ="#b61187"><u><b>Live server</u></b></font>
<font color ="#5999ee"> Permite ver tu página web en tiempo real. En la parte de abajo de vsCode (al lado de las líneas) pone un botón Go Live, que abre la página</font>
<h1>CSS</h1>
<font color ="#5999ee">
Para enlazar HTML con CSS se usa el tag link en el head con rel="stylesheet"
</br></br>
La sintaxis CSS es la siguiente:
</br>
<font color ="#a3f383">
tag a modificar
{</br>
propiedad : valor<b>;</b></br>
propiedad: valor<b>;</b></br>
}
</font>

El tag a seleccionar se llama <b>selector.</b>
</br></br>
En CSS también existe el concepto de <b>clase</b> de POO. El concepto es similar, hacer una plantilla para un elemento en HTML.

Para usar una clase, en el HTML se utiliza el atributo class para decir a qué clase pertenece el elemento, y en CSS se define la clase con un punto delante del nombre, de esta forma:

<font color ="#a3f383">
<b>.</b>clase
{</br>
propiedad : valor<b>;</b></br>
propiedad: valor<b>;</b></br>
}
</font>
 
 Además de las clases, existen los <b>id</b>, que están pensados para seleccionar elementos únicos, de forma que <b>uno y sólo uno de los elementos de la página</b> debe tener <b>un id en particular</b>. Su función es identificar al elemento de cara a ser utilizado en código javascript.
 
 Se redefinen en CSS con un # delante en lugar del punto que utilizamos en la clase.
</font>
<h2>Propiedades de texto más usadas</h2>
<font color ="#5999ee">
<b>Las propiedades que modifican la posición, tamaño, etc, lo hacen dento del tamaño de su contenedor.</b>


<font color = "#fae48b"><b>
color
</b></font>
</br>
<font color = "#fae48b"><b>
font-family
</b></font>
La font que queremos. Si tiene varias palabras el nombre, la ponemos entre comillas como si fuera un string. <b>Podemos poner varias, separadas por comas, y el navegador tratará de cargar la primera, si no puede intentará con la segunda y así sucesivamente.</b>
</br>
<font color = "#fae48b"><b>
font-size
</b></font>
El tamaño del texto, el default es 
<font color ="#5dffd4">
16px.
</font> Se puede medir en px, mm, porcentajes,etc.

<font color = "#fae48b"><b>
font-weight
</b></font>
El grosor de la letra. Para poner el texto en negrita se recomienda usar esto con el valor 
<font color ="#5dffd4">
bold
</font>
en lugar de la etiqueta 
<font color ="#b61187"><b>< b>
</b></font>. Cada font tiene varios niveles de grosor del 100 al 900 y se puede elegir, aunque la mayoría no los tiene todos definidos así que buscará el más próximo.

<font color = "#fae48b"><b>
font-style
</b></font>
.La inclinación de la fuente, 
<font color ="#5dffd4">
normal < oblique < italic
</font>
</br>Hay una función experimental que permite inclinarla el número de grados que queramos, usando deg. p, ej. 
<font color ="#5dffd4">
40deg.
</font>

<font color = "#fae48b"><b>
text-align
</b></font>
Permite alinear a la izquierda, derecha, centro o justificado.
</br>
Podemos usar también 
<font color ="#5dffd4">
start
</font>
o
<font color ="#5dffd4">
end
</font> para adaptar la alineación al idioma del país desde el que se acceda a la página. Por ejemplo, desde un país árabe escogerá 
<font color ="#5dffd4">
right
</font>
 automáticamente.

<font color = "#fae48b"><b>
text-decoration
</b></font>
Es el estilo de subrayado. Se pueden poner varios, por ejemplo tachado y subrayado, además de cambiar el color y grosor de la línea simplemente separando los valores con espacios. <b>NO </b> usar 
<font color ="#5dffd4">
blink
</font>
, está obsoleta.

<font color = "#fae48b"><b>
line-height
</b></font>
Interlineado. 1 es el tamaño de un carácter.

<font color = "#fae48b"><b>
letter-spacing
</b></font>
Espaciado entre caracteres. Se usa bastante en botones.

<font color = "#fae48b"><b>
text-transform
</b></font>
Transforma el texto a minúscula, mayúscula, o incluso otras opciones especiales, como 
<font color ="#5dffd4">
capitalize
</font>, que pone la primera letra de cada palabra en mayúscula, o 
<font color ="#5dffd4">
full-size
</font>, para alfabetos especiales como el japonés.
</font>

<h1>Workflow</h1>

<font color ="#5999ee">
Para <b>crear un menú navegable </b>creamos una lista sin orden y en cada elemento ponemos un enlace a la página que deseemos.
</br>
</br>

<b>Para vincular fuentes de google</b>, nos vamos a google fonts, seleccionamos las que queramos y nos aparece el código html para ponerlo en el head.

Para <b> configurar nuestras propias fuentes</b> creamos otro archivo css en el que definimos la propiedad <b>@font-face</b>, a la cual hay que darle un nombre, el <b>font-family</b> y un <b>src</b>, que sería utilizar la función <b>url</b> con la ruta a la fuente en cuestión y, para que el navegador la cargue más rápido, le decimos el formato con la función <b>format</b>. Si queremos configurar variantes de la misma fuente, cramos diferentes <b>@font-face</b> con la misma family y distintas propiedades.

 Ejemplo:
<img src ="imgs/fonts.png" title="Configuración de una fuente">
</font>
<h1>Atajos VSCode</h1>
<font color ="#5999ee"> <font color ="#b61187"><u><b>html:5</u></b></font> Autocompleta la estructura básica de una página web. </font></br>
<font color ="#b61187"><u><b>a + enter</u></b></font>
<font color ="#5999ee">Autocompleta un enlace.</font>
<h1>Tags importantes HTML</h1>
<font color ="#b61187"><u><b>< h1></u></b></font>
<font color ="#5999ee"> Los h son los títulos. Son importantes porque a nivel de SEO, Google le va a dar más importancia a los h1 que a los h2 y así sucesivamente. Solo se debe utilizar un h1</font>

<font color ="#b61187"><u><b>< head></u></b></font>
<font color ="#5999ee">Es el header, lo que contiene la información invisible que caracteriza la página.</font>
</br>
<font color ="#b61187"><u><b>
< link 
<font color ="#dd9b37"> 
rel href
</font> >
</u></b></font>
<font color ="#5999ee">
Se coloca en el head y sirve para enlazar archivos a la página para que los use.
</br>
<font color ="#dd9b37">
rel 
</font>
sería la relación que mantiene el archivo con la página. Para enlazar un CSS le damos el valor
<font color ="#54d398"> 
stylesheet
</font>.
</br>
<font color ="#dd9b37">
href
</font>
es la ruta al archivo.
</font>
</br>
<font color ="#b61187"><u><b>< title></u></b></font>
<font color ="#5999ee"> Va en un head. Es lo que le da el nombre a la pestaña.</font>
</br><font color ="#b61187"><u><b>< body></u></b></font>
<font color ="#5999ee"> Aquí va el contenido de la página.</font>
</br>Una página se empieza con el tag html y se divide en head y body de esta forma:</br>
<img src="imgs/est.png"></img>
</br><<font color ="#b61187"><u><b>< p></u></b></font>
<font color ="#5999ee">Párrafo. </font>
</br>
<font color ="#b61187"><u><b> < strong>
</b></u></font>
<font color ="#5999ee">
 Usar para las negritas, pues el SEO se va a fijar en esta etiqueta antes que en 
 </font>
 <font color ="#b61187"><u><b> 
 < b>.
 </b></u></font>
</br><font color ="#b61187"><u><b>< ol></u></b></font>
<font color ="#5999ee">Lista ordenada. </font>
</br><font color ="#b61187"><u><b>< ul></u></b></font>
<font color ="#5999ee">Lista sin orden. Se pueden usar para hacer menús navegables </font></br>
<font color ="#b61187"><u><b>
< li></u></b></font>
<font color ="#5999ee">Dentro de una lista, pone un item. </font></br>
<font color ="#b61187"><u><b>< a <font color ="#dd9b37">href  target</font>></u></b></font> 
<font color ="#5999ee">Enlace. 

<font color ="#dd9b37">href </font> es el recurso al que lleva el enlace, puede ser una imagen, otra página, etc.<b> Lo va a buscar en local, por lo que si es una página externa hay que añadirle https://</b> Si bien pdemos poner solo //, por motivos de SEO <b>NO</b> se recomienda.</font>
</br>
<font color ="#5999ee"> <font color ="#dd9b37">target</font> es la pestaña en la que se abre, <font color ="#54d398">_self</font> es en la misma pestaña, <font color ="#54d398">_blank</font> es una nueva pestaña o ventana, dependiendo de la configuración del navegador. <b>Se recomienda añadir el atributo rel="noreferrer" en estos casos para evitar que un hacker abuse de la API para abrir pestañas.</b> </font>
<font color ="#b61187"><u><b></br>
< img 
<font color ="#dd9b37"> 
src alt</font>>
</u></b></font>
<font color ="#5999ee">
Imagen. 

<font color ="#dd9b37"> 
src</font>
es la ruta de la imagen.
<font color ="#dd9b37"> 
</br>alt</font>
es lo que se muestra cuando no carga. Es importante que describa bien la imagen por motivos de SEO.
</font>
<font color ="#b61187"><u><b></br>
< form
<font color ="#dd9b37"> 
method
</font>
></font></u></b>
<font color ="#5999ee">
Inicio de un formulario. Dentro irán las etiquetas input.
</br>
<font color ="#dd9b37"> 
method
</font>
es el verbo que usa la aplicación web para mandarlo. Puede ser 
<font color ="#54d398">
get
</font> o
<font color ="#54d398">
post
</font>
.
</font>
<font color ="#b61187"><u><b>
</br>< input
<font color ="#dd9b37"> 
type value required name placeholder value minlength maxlength
</font>
>
</font></u></b>
<font color ="#5999ee">
Recoge el input del usuario en función del tipo, que puede ser texto, fechas, números, etc.</br>
<font color ="#dd9b37"> 
value</font> es el texto por defecto. En un botón por ejemplo es el texto del botón. 
</br> Los tipos más comunes son:
<ul>
<li>
<font color ="#54d398">
text.
</font>
</li>
<li>
<font color ="#54d398">
email.
</font>
Los inputs de tipo submit no lo van a aceptar hasta que no tenga el formato correcto.
</li>
<li>
<font color ="#54d398">
password.
</font>
Oculta con puntos lo que escriba el usuario.
</li>
<li>
<font color ="#54d398">
checkbox.
</font>
Un bool.
</li>
<li>
<font color ="#54d398">
radio.
</font>
Un círculo para seleccionar una opción.
</li>
<li>
<font color ="#54d398">
file.
</font>
Archivo de disco.
</li>
<li>
<font color ="#54d398">
date.
</font>
Una fecha de calentario.
</li>
</ul>
<font color ="#dd9b37"> 
required 
</font>
hace que elcampo sea obligatorio.
<font color ="#dd9b37"> 
</br>name
</font>
es un identificador del campo para una posible aplicación web.
</br>
<font color ="#dd9b37"> 
placeholder
</font>
es texto que desaparece del input al escribir algo. Normalmente se utiliza para poner un ejemplo de lo que te está pidiendo.
<font color ="#dd9b37"> 
</br>
value
</font>
es a nivel de aplicación web donde se almacenará el valor del input. Como atributo, es el valor por defecto que se le da.
<font color ="#dd9b37"> </br>
minlength y maxlength
</font>
Ponen límites inferiores y superiores de número de carácteres.
</font><h2>Atributos importantes</h2>

<font color ="#dd9b37">
<b>title</b>
</font>
<font color ="#5999ee">
 crea un recuadro al pasar el ratón por el elemento y muestra el texto que le pongas como valor al atributo. <b>Se suele poner en las imágenes para describirlas y en los enlaces para decir a dónde llevan. También en los campos de los formularios y en los botones.</b>
</br></br>
<font color ="#dd9b37">
<b>class</b>
</font>
le dice al tag que pertenece a una clase de CSS.
</font>

<h2>Tags HTML para referenciar CSS</h2>
<font color ="#b61187"><u><b>
< span>
</u></b></font>
<font color ="#5999ee">
Se utiliza para seleccionar partes concretas de nuestro código.
</font>
</font>
<h1>Listas</h1>
Hay listas ordenadas y sin orden. Se pueden utilizar para menús navegables
<h1>Reglas del buen programador</h1>

<font color ="#5999ee">
Como naming convention, se utiliza una similar a snake case, pero en lugar de barra baja, se utiliza el guión.
</font>
</br></br>

<font color ="#5999ee"> En HTML trabajamos de forma semántica y en CSS de forma estética. Es importante que a nivel de SEO nuestro HTML tenga cada tag cumpliendo el rol que se supone que cumple. Un ejemplo de esto es que premia usar < strong> en lugar de < b></font>

</br>
<font color ="#5999ee"> Cada párrafo debe describir algo, por ejemplo, en un blog sobre salud un párrafo puede describir los beneficios del ejercicio físico y otro puede hablar de salud mental.

Por página web solo se utiliza un h1 por motivos de SEO y debe ser lo más descriptivo posible.
</br>
Por tanto, se deben escribir las páginas con la estructura y la semántica en mente. Un ejemplo es esto:
</br>
<img src="imgs/Sin título-1.png"></img>

El atributo 
<font color ="#dd9b37">
title </font> es muy recomendable usarlo para las <b>personas ciegas</b>, pues las páginas leen esta información en voz alta.

En CSS, hay que tener en cuenta que los enlaces deben ser <b>muy reconocibles</b>.

</font>