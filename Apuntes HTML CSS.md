<h1>Curiosidades</h1>
<font color ="#a0c2f0">
Los mails leen HTML y CSS, por lo que si copiamos y pegamos contenido de una página web, se copiará también su estilo.
</font>
<h1>Recursos</h1>

<h2>Extensiones interesantes VSCode</h2>

<font color ="#b61187"><u><b>Image Preview</u></b></font></br>
<font color ="#b61187"><u><b>Live server</u></b></font>
<font color ="#a0c2f0"> Permite ver tu página web en tiempo real. En la parte de abajo de vsCode (al lado de las líneas) pone un botón Go Live, que abre la página.</font>

<h2>Webs</h2>

[Curvas bezier](https://cubic-bezier.com)

[Meta tags](https://metatags.io)

[Pruebas animaciones scroll](https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=100&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes)

[Clip paths](https://bennettfeely.com/clippy/)

<h1>Diccionario</h1>

## General
<font color ="#a0c2f0">

<font id = "uri" color = "#fae48b">

**URI.**
</font>
Dirección a un **recurso** o una **página web**.
<font color = "#fae48b"><b>

lazy loading.
</b></font>
Carga diferida, básicamente, la página va a ir cargando el contenido según lo vaya necesitando en lugar de cargarlo todo al principio.

<font id ="wire" color = "#fae48b">

**Wireframe.**
</font>
Esquema de la distribución de los elementos de la página tanto en PC como en móviles.Ejemplo:
PC:

![PC](imgs/PC.png)

![Mobile](imgs/Mobile.png)

<font id ="dominio" color = "#fae48b">

**Dominio.**
</font>
Es el nombre de la página web, el que enmascara la IP.
<font id ="SSL" color = "#fae48b">

**SSL.**
</font>
Certificado que autentica la identidad del sitio web y habilita una conexión cifrada. Básicamente es lo que mira el navegador para ponerle un candado en la barra de búsqueda para decir que es segura.

<font color = "#fae48b">

**CDN.**
</font>
Almacena las copias del contenido estratégicamente alrededor de todos los servidores alrededor del mundo del host. Es decir, al hacer una solicitud, el servidor central va a elegir al más rápido según tu ubicación para servirte el contenido. **En resumen, aumenta la velocidad de carga y reduce la latencia.**. También es bueno para la seguridad, pues ayuda a proteger contra ataques DDOS, que consiste en sobrecargar el servidor.


<font id="Framework" color = "#fae48b">

**Framework.**
</font>
Conjunto de librerías para trabajar en un determinado entorno.
</font>

## HTML/CSS
<font color ="#a0c2f0">

<font id="eli" color = "#fae48b"><b>
Elementos en línea.
</b></font>
Aquellos que se agrupan horizontalmente. **Negrita, cursivas, enlaces y span**.

**NO** aceptan margin ni padding verticales para cambiar el tamaño de la caja, ya que se rompen.

**Tampoco** aceptan alto y ancho.

<font id="elb" color = "#fae48b"><b>
Elementos en bloque.
</b></font>
Aquellos que se agrupan verticalmente y que por defecto tienen el **width en 100%**. Son los **párrafos, los h1,h2,etc; y los div**.

Aceptan margin, padding para cambiar el tamaño de la caja.

<font id ="Shorthand" color = "#fae48b"><b>
shorthand.
</b></font>
Etiqueta abreviada, atajo

<font id ="maco" color = "#fae48b"><b>
Margin collapse.
</b></font>
Efecto que se da al acumularse margins, ya que aunque lo lógico es que se sumen, en realidad predomina el mayor, ahorrando cuentas al desarrollador.

<font id ="modal" color = "#fae48b"><b>
Ventana modal o modal box.
</b></font>
Recuadro que aparece sobre la página, con la particularidad de que bloquea todas las funciones y hace que el usuario solamente pueda realizar una determinada acción o cerrar la ventana.

<font id="icon" color = "#fae48b"><b>
favicon.
</b></font>
Icono de la pestaña.

<font id="meta" color = "#fae48b"><b>
metatags.
</b></font>
Etiquetas que van en el <b>head</b> que se usan para dar información de cara al SEO. Importante hacerlas bien.


<font color = "#fae48b"><b>

Bootstrap 5.
</b></font>
Librería de metodología BEM con muchas clases modificadoras.

<font id ="mq" color = "#fae48b"><b>

media-query.
</b></font>
Solicitud que le hace al dispositivo para obtener cierta información como resolución, etc y cargar unos recursos u otros dependiendo de esto (e.g. un tema). 

<font id ="fq" color = "#fae48b"><b>

feature-query.
</b></font>
Es código que podemos escribir en caso de que el navegador soporte una cierta funcionalidad. La sintaxis es:
</br>
<font color="#AE8ECD">

 @supports
 </font>
 (lo que sea){
  </br>
  Código CSS
  </br>
 }

 Se suele usar para usar algo en caso de que lo soporte y otra cosa en caso de que no. (Aquí se usaría 
<font color="#AE8ECD">
@supports not
</font>
 ).

<font id ="cq" color = "#fae48b"><b>

container-query.
</b></font>
Da estilo a los elementos dependiendo de las características de su contenedor.

<font id ="wrapper" color = "#fae48b"><b>
wrapper.
</b></font>
Elemento cuya función es darle un estilo.
</font>
<h1>CSS</h1>
<font color ="#a0c2f0">
Para enlazar HTML con CSS se usa el tag link en el head con rel="stylesheet"
</br></br>
La sintaxis CSS es la siguiente:
</br>
<font color ="#a3f383">
tag a modificar, opcionalmente otro tag
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
 
 Se pueden poner varias clases en un mismo elemento separándolas con espacios en el valor de 
<font color ="#a3f383">
 class.
 </font>

En CSS también hay herencia, es decir, que los tags que sean hijos de otro heredarán el estilo del padre. De hecho, a los atributos podemos darle el valor <b>inherit</b>, es decir, que herede el valor de alguno de los padres. 
</br>
También podemos darle el valor **initial**, que sería el valor por defecto del navegador.

El valor **unset** es no especificar nada y el valor **revert** es buscar el valor del tema del navegador, y si no hay ningún tema aplicado el por defecto.

 Además de las clases, existen los <b>id</b>, que están pensados para seleccionar elementos únicos, de forma que <b>uno y sólo uno de los elementos de la página</b> debe tener <b>un id en particular</b>. Su función es identificar al elemento de cara a ser utilizado en código javascript.
 
 Se redefinen en CSS con un **#** delante en lugar del punto que utilizamos en la clase.

Podemos crear **variables** con 
<font color="#AE8ECD">
--nombre : valor ;
</font>

Y después la referenciamos con la función
<font color = "#88a12c">
**var( <font color = "#fae48b">nombre de la variable </font>).**
</font>

Las variables se pueden usar en **cualquier elemento** hijo del elemento en el que se creó, por lo que **lo normal es declararlas en el body** y si algún elemento y sus hijos se va a comportar diferente redefinirlo en ese elemento, pues sólo se van a ver afectados él y los hijos.
 
 También podemos crear propiedades con esta sintaxis:
 
<font color="#AE8ECD">

@property --nombre{
  </br>
  syntax: "< tipo de la variable. Por ejemplo number>";
  </br>
  inherits: true o false;
  </br>
  initial-value: valor;
  </br>
}
 </font>




 </font>
 <h2>Cascada y especificidad</h2>

<font color ="#a0c2f0">
El orden de prioridad en que se selecciona un elemento viene dado por la cascada y, una vez seleccionado en cascada, si hay conflictos, viene dado por la especificidad del elemento.

La cascada aplica el siguiente orden de prioridad, de menor a mayor:

 - Estilo definido por el navegador.
 - Estilo definido por el tema del navegador
 - Estilo definido en un archivo CSS **o** usando el tag
<font color ="#b61187">
< style>.
</font>
 
 - Estilo definido usando el atributo 
<font color = "#fae48b">
style.
</font>

 - Estilo que tenga el marcador **!important**, esté donde esté.

Dentro de lo elegido por la cascada, si hay conflictos, pasa a elegir por especificidad, es decir, qué elementos son más **específicos**.

El orden en este caso de menor especificidad a mayor sería **elementos generales < clases < id**, o como lo referenciaríamos en CSS, **h1 < .clase_titulo < #titulo_razas_de_perro** .

La especificidad se puede ver en Chrome como una tupla de tres valores con 1 y 0 al pasar el ratón por encima de un selector. Mientrás más a la izquierda esté el 1, más específico es. Si usamos selecotres avanzados podemos tener varios 1, siendo más específicos que si usamos selectores simples.

En caso de que haya dos elementos con la **misma especificidad**, elegirá el **último de ellos**.
</font>




<h2>Propiedades de texto más usadas</h2>
<font color ="#a0c2f0">
<b>Las propiedades que modifican la posición, tamaño, etc, lo hacen dento del tamaño de su contenedor.</b>


<font color = "#fae48b"><b>

color
</b></font>

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

<font color = "#fae48b"><b>

list-style.
</b></font>
Es el icono de los puntos de las listas desordenadas.

<font color ="#5dffd4">
capitalize
</font>, que pone la primera letra de cada palabra en mayúscula, o 
<font color ="#5dffd4">
full-size
</font>, para alfabetos especiales como el japonés.

<font color = "#fae48b"><b>

direction.
</b></font>
Dirección de lectura del texto. Puede ser 
<font color ="#5dffd4">
ltr
</font>
(left to right) o
<font color ="#5dffd4">
rtl
</font>
(right to left).

<font color = "#fae48b"><b>

white-space.
</b></font>
Define cómo se comportan los espacios en blanco.

<font color ="#5dffd4">

normal
</font> 
hace que cuando haya overflow haga un salto de línea.
</br>
<font color ="#5dffd4">
nowrap
</font>
hace que no haya saltos de línea.
</br>
<font color ="#5dffd4">
pre
</font>
pone los mismos saltos de línea que el editor.
</br>
<font color ="#5dffd4">
pre-wrap
</font>
es una mezcla entre **normal** y **pre**.

<font color = "#fae48b"><b>

text-overflow.
</b></font>
Dicta qué hay que hacer con el texto que se desborda, siempre y cuando el 
<font color = "#fae48b">
overflow
</font>
no esté en 
<font color ="#5dffd4">
display.
</font>

Los valores son 
<font color ="#5dffd4">
clip
</font> por defecto, que recorta el overflow, y
<font color ="#5dffd4">
ellipsis,
</font>
que pone puntos suspensivos.

<font color = "#fae48b"><b>

word-break.
</b></font>
Define cómo dividir las palabras cuando se desbordan.

<font color ="#5dffd4">

break-all
</font>
recorta la línea justo donde no cabe, sin tener en cuenta si forma parte de una palabra.
</br>
<font color ="#5dffd4">
keep-all
</font>
en idiomas como el coreano evita la ruptura de palabras.
</br>
<font color ="#5dffd4">
auto-phrase
</font>
Evita cortar las frases cuando mete el salto de línea.

<font color = "#fae48b"><b>

overflow-wrap.
</b></font>
Dicta por dónde se rompen las palabras cuando hay overflow.
<font color ="#5dffd4">

anywhere
</font>
rompe por cualquier sitio.
</br>
<font color ="#5dffd4">
break-word
</font>
rompe teniendo en cuenta las sílabas.
</br>
<font color ="#5dffd4">
balance
</font>
intenta romper de forma que el texto quede dividido de forma más o menos uniforme o balanceada.
</br>
<font color ="#5dffd4">
pretty
</font>
intenta que no se queden palabras solas.
</font>


<h3>

Propiedad display

</h3>
<font color ="#a0c2f0">

Hay varios valores que podemos darle a display para cambiar el tipo de elemento:

<font color ="#5dffd4">

inline.
</font>
Hace que el elemento pase a ser en línea, es decir, no acepta padding ni margin, y se apilan horizontalmente.

<font color ="#5dffd4">

block.
</font>
Hace que el elemento sea en bloque, es decir, acepta padding, margin, width y height, se apilan verticalmente y por defecto tienen width 100%, es decir, **ocupan todo el ancho de la página.** e **inician una nueva línea.**

<font color ="#5dffd4">

inline-block
</font>
Funcionan igual que los elementos en bloque, pero **NO ocupan todo el ancho disponible NI inician una nueva línea.**

<font color ="#5dffd4">

none.
</font>
El elemento pasa a no ocupar espacio en la página y a **NO** renderizarse. Además, **NO** se cuenta en el cómputo de elementos hermanos, etc.


</font>

<h3>Posicionamiento</h3>

<font color ="#a0c2f0">

Para esto se utiliza la propiedad 
<font color = "#fae48b"><b>
position.
</b></font>

Esta propiedad nos permite crear un contexto de apilamiento, es decir, una especie de "Eje Z" para los elementos de forma que estén unos encima de otros y se puedan superponer entre sí.

En la práctica, esto quiere decir que a los elementos que están posicionados les empiezan a afectar ciertas propiedades como el 
<font color ="#e6c925">
z-index, 
</font> 
que dice dónde están en el eje Z. Se suelen poner de 10 en 10 aunque no es necesario hacerlo así.

Aparecen ademas las propiedades
<font color ="#e6c925">
top, bottom, left y right.
</font>
para mover los elementos en el renderer.
<font color ="#e6c925">
</br>
top
 </font>
 y
<font color ="#e6c925">
  left
</font>
 tienen prioridad sobre
<font color ="#e6c925">
bottom
</font>
y
<font color ="#e6c925">
right
</font>
, respectivamente.



Los posibles valores son:

<font color ="#5dffd4">

relative.
</font>
Mantiene su **posición original** en el DOM, pero **permite renderizar el elemento desplazado** con las propiedades 
<font color ="#e6c925">
top, bottom, left y right.
</font>
y además se convierte en un **pivote** para los elementos hijos.

<font color ="#5dffd4">

absolute.
</font>
El elemento **deja de ocupar espacio en la página**, aunque sigue renderizándose ahí. Todo lo que movamos el elemento en el renderer será en **posiciones absolutas** siendo el punto **pivote** por defecto el lado **superior izquierdo**, aunque **si tiene un padre en 
<font color ="#5dffd4">
relative
</font>
, lo usará como pivote.**
</br>
Esto último es útil ya que de esta forma, con 
<font color ="#e6c925">
left
</font>
en 0 se posicionará en el extremo izquierdo del contenedor,
<font color ="#e6c925">
bottom
</font>
en 0 se posicionará en el extremo inferior del contenedor, etc.

**Si le damos 0 en las cuatro propiedades y 
<font color ="#e6c925">
margin
</font>
auto**, se centrará el elemento. 

<font color ="#5dffd4">

static.
</font>
Es el por defecto, no se considera posicionado, pues no se puede mover a no ser por el margin.

<font color ="#5dffd4">

fixed.
</font>
Es exactamente igual que el absolute, pero con la diferencia de que **se posiciona con respecto a la ventana** en lugar de con respecto al padre.
</br>
De hecho, al hacer scroll, va a seguir al scroll.

<font color ="#5dffd4">

sticky.
</font>
Es como relative, pero cuando hay scroll usa 
<font color ="#e6c925">
top, bottom, left y right
</font>
como **tresholds** antes de tener el comportamiento de 
<font color ="#5dffd4">
fixed. 
</font>
Es decir, si por ejemplo, le ponemos 10px de 
<font color ="#e6c925">
top
</font>
, cuando al hacer scroll llegue a los 10 píxeles de arriba de la pantalla, de ahí para abajo va a acompañar al scroll.
</font>
<h2> Funciones más usadas</h2>
<font color ="#a0c2f0">

<b><font color = "#88a12c">

url (
<font color ="#e6c925">
link
</font>
)
</font>
</b>
Devuelve lo que haya en la url referenciada por el parámetro
<font color ="#e6c925">
link.
</font>
<b><font color = "#88a12c">

linear-gradient ( 
<font color ="#e6c925">
degs, color1 perc, color2 perc, colorn perc
</font>
)
</font>
</b>
Devuelve un degradado lineal con 
<font color ="#e6c925">
deg
</font>
grados y tantos colores como se les suministren en los porcentajes dados.

<b><font color = "#88a12c">

radial-gradient ( 
<font color ="#e6c925">
shape 
<font color ="a0c2f0">
at
</font>
position, color1 perc, color2 perc, colorn perc
</font>
)
</font>
</b>.
La 
<font color ="#e6c925">
shape
</font>
puede ser un 
<font color ="#54d398"> 
circle
</font>
o una
<font color ="#54d398"> 
elipse.
</font>

<b><font color = "#88a12c">

conic-gradient(
<font color ="#e6c925">
color1, color2, color n
</font>
)
</font></b>
<font color = "#88a12c">

**clamp (<font color ="#e6c925">min, ideal, max</font> ).**
</font>
Sobre todo se usa para anchuras o alturas. Si el elemento mide menos de <font color ="#e6c925">
min
</font>, se queda con 
<font color ="#e6c925">
min,
</font>
 si mide más de 
 <font color ="#e6c925">
 max,
 </font> se queda con 
 <font color ="#e6c925">
 max.
 </font> En caso contario se queda con 
 <font color ="#e6c925">
 ideal.
 </font>

 También se usa bastante para dar tamaño a **las fonts.** Se ponen las medidas mínimas y máximas en rem y las ideales en vw.

<font color = "#88a12c">

**calc().**
</font>
Permite realizar cálculos aritméticos con sumas, restas, multiplicaciones, divisiones y otras funciones.
<font color = "#88a12c">

**color-mix (<font color ="#e6c925"> method, color percentage, color percentage, etc </font>)**
</font>.
Mezcla los colores usando el método (puede ser 
<font color ="#5dffd4">
hsl, srgb,
</font> entre otros).
<font color ="#fff">
<h3>Funciones de Filtro</h3>
</font>
<b><font color = "#88a12c">

drop-shadow(
<font color ="#e6c925">
horizontal vertical size color
</font>
).
</b></font>
Filtro que aplica una sombra a las imágenes sin fondo basadas en los bordes de la misma usando un kernel. Útil para logos, por ejemplo.
<font color = "#88a12c">

**brightness(<font color ="#e6c925"> b </font>).**
</font>
Multiplica el brightness del elemento por 
<font color ="#e6c925">
b.
<font color = "#88a12c">

**contrast( <font color ="#e6c925">c</font> ).**</font>
</font>
Igual que el anterior pero con el contraste.
<font color = "#88a12c">

**saturate( <font color ="#e6c925">s</font> ).**
</font>
Igual que el anterior pero con la saturación.
<font color = "#88a12c">

**grayscale()**
</font>
Convierte el contenido a escala de grises.
<font color = "#88a12c">

**hue-rotate( <font color ="#e6c925">degs</font> ).**
</font>
Rota en el tono. Se utilizan grados, por lo que de 0 a 360.
<font color = "#88a12c">

**opacity ( <font color ="#e6c925">o</font> ).**
</font>
Aplica opacidad.
<font color = "#88a12c">

**invert().**
</font>
Invierte los colores.
<font color = "#88a12c">

**sepia()**
</font>



</font>
<h3>Funciones de la propiedad Transform</h3>
<font color ="#a0c2f0">

<font color = "#88a12c">

**scaleX(<font color ="#e6c925"> sc </font>).**
</font>
Escala en X. También lo hay en el resto de ejes y general.
<font color = "#88a12c">

**skew( <font color ="#e6c925">degs </font>).**
</font>
Le hace una transformación itálica.
<font color = "#88a12c">

**rotate(<font color ="#e6c925"> degs</font> ).**
</font>
Rota el elemento. Podemos hacer que sea como rotar un sprite en 3D si usamos las funciones del resto de ejes.
<font color = "#88a12c">

**translate(<font color ="#e6c925"> h , v </font>).**
</font>
Mueve el elmento.
<font color = "#88a12c">

**perspective( <font color ="#e6c925">px</font> ).**
</font>
Mueve el punto de fuga
<font color ="#e6c925">
px
</font>
píxeles hacia atrás.
<font color = "#fae48b">

**backface-visibility.**
</font>
Es si se ocultan o no las caras traseras en 3D. Por defecto se muestran.
<font color = "#fae48b">

**mix-blend-mode.**
</font>
Son los modos de fusión como los de Photoshop o Nuke.
</font>
<h2>Selectores avanzados</h2>

<font color ="#a0c2f0">

Una forma de conseguir selectores de un elemento es en inspeccionar->Elements->copy->copy selector.

Por otra parte, los selectores se pueden encadenar unos con otros:
</br>

<font color ="#e6c925"><b>
[ 
<font color = "#88a12c">
atributo = "valor"
</font>
]
</b></font>
selecciona en base a un valor concreto de un atributo.

 Si al atributo <b> le añadimos $</b> seleccionará aquellos atributos que <b>terminen</b> en lo que escribamos.

Si <b> le añadimos ^</b> seleccionará los que **empiecen** con lo que escribamos.

<font color ="#e6c925"><b>
tag1, tag2
</b></font>. Al separar por comas, aplicamos el estilo a todos los 
<font color ="#e6c925">
tag1 
</font>
y
<font color ="#e6c925">
tag2
</font>
.

<font color ="#e6c925"><b>
tag_padre tag_hijo
</b></font>
.Al separar por espacios, le damos estilo a todos los tags que se llamen 
<font color ="#e6c925">
tag_hijo 
</font>
y que sean hijos **directos o indirectos** de tags que se llamen
<font color ="#e6c925">
tag_padre.

</font>
<font color ="#e6c925"><b>
tag_padre > tag_hijo
</b></font>
Usando <b>></b> seleccionamos a los 
<font color ="#e6c925">
tag_hijo
</font>
que sean hijos <b>directos</b> de
<font color ="#e6c925">
tag_padre
</font>
.

</br>
<font color ="#e6c925"><b>
tag_anterior + tag
</b></font>
.Selecciona al primer tag que se llame 
<font color ="#e6c925">
tag
</font>
que esté justo después de un tag 
<font color ="#e6c925">
tag_anterior.
</font>

</br>
<font color ="#e6c925"><b>
tag_anterior ~ tag
</b></font>
.Selecciona a todos los tags que se llamen 
<font color ="#e6c925">
tag
</font>
que estén después de un tag 
<font color ="#e6c925">
tag_anterior.
</font>
</font>

<h2>Pseudo-clases</h2>
<font color ="#a0c2f0">
Son funciones o atributos que marcan estados concretos a la hora de seleccionar un elemento. En la <a href ="https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes">documentación</a> podemos encontrarlas todas, pero algunas de las más comunes son las siguientes:

<font color ="#e6c925"><b>

:root
</b></font>
.Es la raíz de todo el documento. Todo hereda de ello. Se pone sin ningún atributo específico.

<font color ="#e6c925"><b>

:hover
</b></font>
.Cuando el ratón está encima del elemento.

<font color ="#e6c925"><b>

:active
</b></font>
.Cuando se está clickando el elemento.

<font color ="#e6c925"><b>

:first-child
</b></font>
.Elige al primero de los elementos hermanos.

<font color ="#e6c925"><b>

:last-child
</b></font>
.Elige al último de los elementos hermanos.

<font color ="#e6c925"><b>

:nth-child( expresión )
</b></font>
. Elige a uno de los elementos hermanos en base a una expresión con la n. Por ejemplo,
<font color ="#54d398"> 
2
</font>
elige al segundo hermano, pero
<font color ="#54d398"> 
2n + 1
</font>
elige a los hermanos impares.

<font color ="#e6c925"><b>

:nth-of-type ( expresión )
</b></font>.Elige a uno de los elementos hermanos que sea del tipo concreto del selector en base a una expresión con la n.

<font color ="#e6c925"><b>

:not( selector)
</b></font>
.Elige a todos aquellos elementos que no sean seleccionados por el 
<font color ="#e6c925">selector.
</font>

<font color ="#e6c925"><b>
:empty
</b></font>
.Elige a todos los elementos que estén vacíos y no formateados, es decir, la única forma de elegirlos es que tengan esta forma (sin espacios):
<font color ="#54d398"> 
< tag>< /tag>.
</font>
Puede servir para por ejemplo darle un borde a un elemento, pero si está vacío quitárselo.

<font color ="#e6c925"><b>

:checked
</b></font>
.En una checkbox, la elige si está marcada.

<font color ="#e6c925"><b>

:link
</b></font>
.Selecciona un enlace que **NO** está visitado.

<font color ="#e6c925"><b>

:visited
</b></font>
.Selecciona un enlace que **YA** esté visitado.

<font color ="#e6c925"><b>

:focus
</b></font>
.Selecciona un elemento si tiene el foco.

<font color ="#e6c925"><b>

:enabled
</b></font>
. Selecciona un input si está activado, es decir, puede recoger input.

<font color ="#e6c925"><b>

:disabled
</b></font>
. Selecciona un input si está desactivado.

<font color ="#e6c925"><b>

:fullscreen
</b></font>
. Selecciona un elemento solo en modo pantalla completa.

<font color ="#e6c925"><b>

:invalid
</b></font>
. Selecciona un input cuyo valor dado por el usuario es incorrecto, por ejemplo, un email sin el @. También está la pseudo-clase 
<font color ="#e6c925">
:valid.</font>

<font color ="#e6c925"><b>

:is ( elementos )
</b></font>. Agrupa elementos para no tener que repetirlos cuando usamos selectores avanzados. Por ejemplo, en el siguiente caso, el color rosa y el color verde están seleccionando los mismos elementos.
</br>
![alt text](imgs/is.png)
</br>
**Cambia la especificidad**, pues hace los elementos **más específicos.**

<font color ="#e6c925"><b>

:where( elementos )
</b></font>
. Es igual que is, pero **NO** cambia la especificidad.

<font color ="#e6c925"><b>

:has ( elementos )
</b></font>
.Selecciona aquellos objetos que sean padres de los 
<font color ="#e6c925">
elementos
</font>
del argumento.
</font>

<h2>Pseudo-elementos</h2>

<font color ="#a0c2f0">

Son los componentes de los elementos, por ejemplo, los placeholder de los inputs. **Sólo se les pueden modificar ciertas propiedades dependiendo del pseudoelemento.**

Los más importantes son:

<font color ="#e6c925"><b>

::first-letter
</b></font>
.La primera letra del elemento.

A esta le podemos dar la propiedad
<font color ="#e6c925">**initial-letter.**</font>
,que recibe dos valores, las líneas que va a ocupar de alto, y a partir de qué línea va a aparecer.
<font color ="#e6c925"><b>

::first-line
</b></font>
.La primera línea del elemento.

<font color ="#e6c925"><b>

::selection
</b></font>
.El texto (u otros elementos) que seleccionamos con el ratón.

<font color ="#e6c925"><b>

::placeholder
</b></font>

<font color ="#e6c925"><b>

::marker
</b></font>
.Los puntos de las < ul>.

<font color ="#e6c925"><b>

:before
</b></font>
.Lo que hay antes del elemento.

<font color ="#e6c925"><b>

::after
</b></font>
.Lo que hay después del elemento.

Una de las propiedades que se pueden cambiar exclusivamente en los pseudo-elementos es:

<font color = "#fae48b"><b>

content
</b></font>
.Contenido en general, puede usarse para cambiar un texto por otro.
</font>

<h2>Transiciones</h2>

<font color ="#a0c2f0">

Podemos controlar los siguientes aspectos de las transiciones con propiedades.

<font color = "#e6c925"><b>

transition-property.
</b></font>
Es la propiedad que queremos que transicione, como por ejemplo, el 
<font color ="#54d398"> 
color.
</font>
**NO** se recomienda poner 
<font color ="#54d398"> 
all
</font>
por ser muy ineficiente.

<font color = "#e6c925"><b>

transition-duration.
</b></font>
Podemos hacer que sea distinta en el estado al que estamos transicionando, lo que hará que dure distinto al pasar a ese estado que al volver de ese estado.

<font color = "#e6c925"><b>

Transition-delay.
</b></font>

<font id = "transitionFunction" color = "#e6c925"><b>

transition-timing-function.
</b></font>
Controla la curva de animación. Podemos darle valor 
<font color ="#54d398"> 
linear, ease
</font>
y todas sus variantes, o crear curvas bezier con la función
<font color ="#54d398"> 
bezier.
</font>
Para ajustarlas visualmente usaremos la página [cubic bezier](https://cubic-bezier.com) o desde las herramientas del desarrollador de chrome.

Otra opción es usar la función
<font color = "#88a12c">
steps()
</font>, que nos permite darle un número de saltos en los que se dividirá la transición.

El [shorthand](#Shorthand) para las transiciones es
<font color = "#e6c925"><b>
transition
<font color ="#54d398"> 
properties time function delay
</font>
</b></font>
</br>
Se pueden separar por coma.

</font>
<h2>Animaciones</h2>
<font color ="#a0c2f0">

 La sintaxis es parecida a las [media queries](#mq). Sería:

<font color="#AE8ECD">

@keyframes
</font>
<font color ="#6d48f7">
nombre
</font>{</br>
  0%{</br>
    propiedad: valor;</br>
    propiedad: valor;
  }</br>
  ...</br>
  ...</br>
  100% {</br>
propiedad: valor</br>
propiedad: valor</br>
  }</br>
}

Para mostrar la animación, hay que darle valor a las siguientes propiedades:
<font color = "#fae48b">

**animation-name.**
</font> El nombre que le hemos dado en la parte de arriba.

<font color = "#fae48b">

**animation-duration.**
</font>

Además, se pueden usar otras propiedades:
<font color = "#fae48b">

**animation-delay.** 
</font>
Un retardo en la animación.
<font color = "#fae48b">
 
 **animation-iteration-count.**
 </font>
 Número de iteracciones. Se puede usar el valor
<font color ="#54d398"> 
infinite.
</font>
<font color = "#fae48b">

**animation-fill-mode.**
</font>
Cómo se queda la animación al terminar. Posibles valores:

<font color ="#54d398"> 

forwards.
</font>
Se queda igual que termina.
<font color ="#54d398"> 

backwards.
</font>
Se queda como al inicio.
<font color ="#54d398"> 

both.
</font>
Es como forwards pero por defecto toma los valores del primer estado en lugar de los definidos en el CSS normal. Esto se ve sobre todo si hay algún delay en la animación. **Es el que se suele usar.**
<font color = "#fae48b">

**animation-timing-function.**
</font>
La función que sigue para dar curvas. Igual que en las [transiciones.](#transitionFunction)
<font color = "#fae48b">

**animation-direction.**
</font>
<font color ="#54d398"> 

reverse. 
</font>
La animación se reproduce al revés.
<font color ="#54d398"> 

alternate.
</font>
La animación se reproduce y cuando termina se reproduce otra vez al revés.
<font color ="#54d398"> 

alternate-reverse.
</font>
Se reproduce al revés y cuando termina se reproduce normal.

<font color = "#fae48b">

**animation-play-state.**
</font>
<font color ="#54d398"> 

paused
</font>
o
<font color ="#54d398"> 
running.
</font>
<font color = "#fae48b">

**animation-timeline.**
</font>
Disponible solo en algunos navegadores, permite controlar el avance de las animaciones con el scroll. **Si se usa no poner<font color = "#fae48b"> animation-iteration-count</font>. y el <font color = "#fae48b">position</font> en <font color ="#54d398"> fixed</font>.** Tiene varios valores:
<font color ="#54d398"> 

scroll().
</font>
Controlas la animación en base al scroll general de la página.

Otra opción es usar el nombre del elemento de la página que queramos **(que no sea el body)**, en el cual habría que usar las propiedades <font color = "#fae48b">scroll-timeline-name</font> y <font color = "#fae48b">scroll-timeline-axis.</font>
Para usar esta técnica es importante que **el contenido a animar sea mayor que el contenedor** y hay que poner el 
<font color = "#fae48b">
overflow
</font>
en 
<font color ="#54d398"> 
scroll.
</font>
<font id = "sctml" color = "#fae48b">

**scroll-timeline-name**.
</font>
El nombre que le vamos a dar al elemento para usarlo de scroll
<font color = "#fae48b">

**scroll-timeline-axis.**
</font>
<font color ="#54d398"> 
inline
</font> es el eje horizontal y
<font color ="#54d398"> 
block
</font>
el vertical.

El [shorthand](#Shorthand) para estos dos es 
<font  color = "#fae48b">
**scroll-timeline.**
</font>
<font color ="#54d398"> 

view().
</font>
Controlas la animación en base al scroll general pero en la parte de la página en la que se ve, es decir, mientras vas haciendo scroll empieza a reproducirse cuando se empiece a ver el elemento hasta que salga de la vista. Obviamente, **aquí no tiene sentido usar <font color = "#fae48b">position</font> <font color ="#54d398"> fixed</font>.**

Usando
<font color = "#fae48b">

**view-timeline**
</font>
con los mismos valores que [scroll-timeline](#sctml) en cualquier otro elemento, podemos hacer que la animación se reproduzca según la visibilidad de ese otro elemento.

Podemos controlar los límites a partir de los cuales el elemento se considera que se se empieza y termina de ver (es decir, a partir de cuándo empieza y termina la animación) con 
<font color = "#fae48b">

**animation-range-start.**
</font>
Habría que decirle el comportamiento y el treshold en porcentaje a partir del cual empieza. P. ej. 
<font color ="#54d398"> 
cover 20%
</font>.
Los comportamientos más usados son:

<font color ="#54d398"> 

cover.
</font>
Cuando el elemento empieza a verse, aunque solo sea el borde.
<font color ="#54d398"> 

contain.
</font>
Cuando todo el elemento es visible.

<font color ="#54d398"> 

exit-crossing.
</font>
Cuando el elemento se está yendo de la pantalla.
<font color = "#fae48b">

**animation-range-end.**
</font> Igual que el anterior pero cuando el elemento desaparece de pantalla.

Ambos son compatibles con 
<font color = "#fae48b">
animation-fill-mode.
</font>

El [shorthand](#Shorthand) para ambos es
<font color = "#fae48b">

**animation-range.**
</font>
Podemos previsualizar y hacer pruebas [aquí](https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=100&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes)
</font>


<h2>Box Model</h2>
<p>
<font color ="#a0c2f0">
Es un paradigma de CSS que define cómo poner los elementos de una página web.

Cada elemento sería una caja rectangular y este paradigma dicta cómo se redimensionan, interactúan entre sí, etc.

Cada caja tiene un <b> content</b>, que es lo que hay dentro, es decir, el texto, la imagen o lo que sea.

Las cajas también tienen un <b>border</b>, que es el contorno de la caja. Se puede configurar el estilo, el color y el grosor, un <b>padding</b>, que es el espacio entre el contenido y el border, y un <b>margin</b>, que es el espacio en blanco alrededor de la caja, y separa el elemento de los demás. <b> El margin NO forma parte de la caja. </b>
Además, hay un **outline** entre el border y el margin.

Las propiedades que se pueden modificar son:

<font color ="#b7dafc"><b>
Contenido
</b></font>
<br>
Width y Height. 
<b>Cuidado, porque pueden descentrar el conteido.</b>
</p>

<font color ="#b7dafc"><b>
Padding y margin
</b></font>
</br>
left, right, top y bottom. **Si les damos el valor <font color ="#54d398"> auto </font>, se le dará como valor en esa dirección el espacio sobrante.**

<font color ="#b7dafc"><b>
Border
</b></font></br>
width, radius y sizing.

<font color ="#b7dafc"><b>

Outline
</b></font>
</br>
outline-color, outline-style, outline-width, outline-offset.
</br>
El outline **NO** cambia el tamaño de la caja, es puramente visual, por lo que **es genial para transiciones, hovers, etc**.
</br>
Si queremos quitar el outline cuando el elemento tenga el foco, por accesibilidad hacerlo **en :focus-visible y NO en :focus**.
</font>


<h3>Box sizing</h3>

<font color ="#a0c2f0">
Hay dos modelos a la hora de calcular los tamaños de las cajas, el 
<font color ="#54d398"> 
content box
</font>
,que es el default, le aplica el tamaño que le demos a la caja únicamente al 
<font color ="#c0f5dc"> 
content
</br>
</font>
,por lo que los tamaños del padding, border y margin serán un extra.

El otro es el 
<font color ="#54d398"> 
border box
</font>
, que le aplica el tamaño de la caja al 
<font color ="#c0f5dc"> 
border
</font>
, haciendo que el contenido y el padding se ajusten dentro de ese tamaño.

En resumen, si elegimos 
<font color ="#54d398"> 
content box
</font>
, todo lo que le agreguemos al content hará que la 
<font color ="#c0f5dc"> 
caja crezca
</font>
, mientras que si elegimos 
<font color ="#54d398"> 
border box
</font>
,
<font color ="#c0f5dc"> 
 mantendrá su tamaño
</font>
 a pesar de que le agreguemos cosas.
</font>
<h3>Propiedades interesantes Box Model</h3>
<font color ="#a0c2f0">

<font color = "#fae48b"><b>
padding
</b></font>
Define el padding en el sentido de las agujas del reloj  empezando por arriba separado por espacios. Tiene varios [shorthands](#Shorthand). También podemos poner solo dos valores que serán el vertical y el horizontal.

<font color = "#fae48b"><b>
margin
</b></font>
De igual forma que el padding, define el margin, que separa las cajas entre sí.
</br> Si usamos auto lo centra horizontalmente con respecto a su contenedor.

<font color = "#fae48b"><b>
border
</b></font>
hay varias propiedades del borde, pero como mínimo deben estar definidas
 <font color = "#fae48b"><b>
border-width, border-color y border-style.
</br>
</b></font>
Uno de los estilos, 
<font color ="#54d398"> 
hidden,
</font>
oculta el borde para poder mostrarlo posteriormente por código, aunque modifica el tamaño.
Para que no se modifique el tamaño podríamos usar
<font color ="#54d398"> 
transparent.
</font>
</br>
 <font color = "#fae48b"><b>
border-radius
</b></font>
redondea los bordes tantos píxeles como queramos (o porcentaje, que redondea usando también parte de los lados verticales). Al igual que el margin, podemos ponerle varios valores para que cada uno afecte a cada una de las esquinas del borde. Si solo ponemos dos, lo hará en diagonal de izquierda a derecha.

El [shorthand](#Shorthand) 
 <font color = "#fae48b"><b>
border
</b></font>
se usa para sustituir las tres propiedades imprescindibles del borde y se dan en el siguiente orden: <b>width style color</b>.

Se pueden modificar cualquiera de los lados del borde por separado con 
 <font color = "#fae48b"><b>
border-top,border-right, etc
</b></font>
y los valores de anchura, estilo y color en el mismo orden.
</br>
Lo mismo sucede con los radios, pudiendo hacer formas redondeadas un poco más personalizadas.

 <font color = "#fae48b"><b>
box-sizing.
</b></font>


<font color ="#54d398"> 
border-box
</font>
o
<font color ="#54d398"> 
content-box
</font>
.

</br>
 <font color = "#fae48b"><b>

filter.
</b></font>
Aplica filtros al elemento.
<font color ="#fae48b">

**backdrop-filter.**
</font>
Aplica filtros a lo que hay detrás del elemento.
 <font color = "#fae48b"><b>

border-spacing.
</b></font>
Se  usa sobre todo en tablas, separa los bordes entre sí.
<font color = "#fae48b"><b>

overflow.
</b></font>
Controla lo que sucede cuando algo no cabe en un elemento. Puede ser
<font color ="#54d398"> 
visible, hidden, clip, scroll
</font>
o
<font color ="#54d398"> 
auto
</font>
, que pone el scroll cuando hace falta.
</br>
</br> La diferencia entre
<font color ="#54d398"> 
clip
</font>
y
<font color ="#54d398"> 
hidden
</font>
es que el último reserva un poco de espacio para las barras de scroll aunque no se vean.

 <font color = "#fae48b"><b>

object-fit.
</b></font>
Define qué hacer con imágenes y videos reescalados.

<font color ="#5dffd4">

fill
</font>
rellena el contenido, aunque no se respete el aspect ratio original.
</br>
<font color ="#5dffd4">
contain
</font>
respeta el aspect ratio original o bien por horizontal o por vertical y rellena el espacio que sobra con padding.
</br>
<font color ="#5dffd4">
cover
</font>
mantiene el aspect ratio original recortando el contenido que se desborde.
</br>
<font color ="#5dffd4">
none
</font>
evita que se reescale.
</br>
<font color ="#5dffd4">
scale-down
</font>
elige entre las anteriores de forma que la imagen quede lo más pequeña posible.
 <font color = "#fae48b"><b>

object-position.
</b></font>
Tiene sentido cuando 
 <font color = "#fae48b">
 object-fit
 </font>
 está en 
 <font color ="#5dffd4">
cover.
</font>. Dice qué parte del contenido es la que se va a ver. Puede ser 
<font color ="#5dffd4">
top, center, bottom, left o right.
</font>
</br>
También podemos darle 
<font color ="#5dffd4">
píxeles
</font>
como valor.
<font color = "#fae48b">

**scroll-behavior**
</font> Cambia el comportamiento del scroll, si queremos que afecte a toda la página habría que aplicarlo a *. Los valores son:
<font color ="#5dffd4">

auto.
</font>
Valor por defecto, el scroll se desplaza inmediatamente.
<font color ="#5dffd4">

smooth.
</font>
Suaviza el scroll y cuando **hacemos enlaces a seciones de la web** hace que **baje la barra** en lugar de "teletransportarse".

<font color = "#fae48b">


**scrollbar-color.**
</font>
Color de la barra de scroll. Hay que darle **dos colores**, primero el foreground y luego el background.
<font color = "#fae48b">

**scrollbar-width.**
</font>
Tiene tres posibles valores:

<font color ="#5dffd4">

auto.
</font>
Tamaño normal.
<font color ="#5dffd4">

thin.
</font>
Más pequeña.

<font color ="#5dffd4">

none.
</font>
Invisible, permite hacer scroll con el ratón (o con el dedo en móviles).

<font color = "#fae48b">

**clip-path.**
</font>Crea una máscara. Podemos personalizarla con un [generador](https://bennettfeely.com/clippy/).
<font color = "#fae48b">

**user-select.**
</font> Permite decidir si queremos que el usuario seleccione o no el elemento.
<h3>Fondos</h3>
<font color ="#a0c2f0">

 <font color = "#fae48b"><b>
background-image.
</b></font>
podemos usar varias funciones para darle valor. Con la función 
<font color = "#88a12c">
url
</font>
le damos el valor de una imagen, con la función 
<font color = "#88a12c">
linear-gradient
</font>
o
<font color = "#88a12c">
radial-gradient
</font>
le damos un degradado.

Además, podemos poner **varias capas** separándolas por comas en orden descendiente, por ejemplo, una capa de degradado con un negro transparente y otra capa con una imagen para oscurecer la imagen

 <font color = "#fae48b"><b>
background-size.
</b></font>
Si le damos un
<font color ="#54d398"> 
porcentaje
</font>
, reescala la imagen (o lo que haya de fondo) para que la anchura ocupe ese tanto por ciento del contenedor.
</br>
También podemos darle
<font color ="#54d398"> 
 medidas absolutas.
</font>
</br>
</br>
<font color ="#54d398"> 
contain
</font>
obliga al contenedor a que la imagen quepa al menos una vez, aunque luego se repita.
</br>
</br>
<font color ="#54d398"> 
cover
</font>
hace que la imagen ocupe todo el contenedor, pudiendo incluso cortarse. La diferencia con dar 
<font color ="#54d398"> 
100%
</font>
es que este último repetirá la imagen.


 <font color = "#fae48b"><b>
background-position.
</b></font>
<font color ="#54d398"> 
left, right, top, bottom o center.
</font>
Alinea el fondo.
También se le puede dar un número de pixeles en positivo o negativo para derecha y otro para abajo.
 
 <font color = "#fae48b"><b>
background-repeat.
</b></font>
Controla si queremos que se repita la imagen de fondo o no.

 <font color = "#fae48b"><b>
background-attachment.
</b></font>
Controla cómo scrollea la imagen de fondo con respecto al scroll general de la página.
</br>
<font color ="#54d398"> 
fixed
</font>
deja el fondo fijo con respecto al scroll, de forma que cuando se scrollee la página dará la impresión de que se mueve.

<font color ="#54d398"> 
scroll
</font>
es el valor por defecto. La imagen de fondo se mueve con el scroll, por lo que da la impresión de estar fija.

</br>
<font color = "#fae48b"><b>
background.
</b></font>
[shorthand](#Shorthand) para todo lo anterior. El orden de los atributos es 
<font color ="#54d398"> 
image position / size repeat attachment color.
</font>
</br>
<b>Entre 
<font color ="#54d398"> 
position
</font>
 y 
<font color ="#54d398"> 
size
</font>
hay que poner siempre la barra /.</b>
</font>

<h3>Sombras</h3>
<font color ="#a0c2f0">

<font color = "#fae48b"><b>
box-shadow.
</b></font>
Controla las sombras de las cajas, hay que pasarle 
<font color ="#54d398"> 
tamaño horizontal, tamaño vertical ,tamaño del blur, longitud o separación y color.
</font>

<font color = "#fae48b"><b>
text-shadow.
</b></font>
Igual que el anterior pero <b>sin</b>
<font color ="#54d398"> 
longitud o separación.
</font>
</font>

<h2>Flexbox</h2>

<font color ="#a0c2f0">

Es otro modelo de cajas, en este caso las cajas van a a adaptar su tamaño (**sin tener en cuenta el padding**) al tamaño de la ventana (**Solo pueden disminuir su tamaño por defecto**). Para usarlo, a un elemento padre le daremos a la propiedad
<font color = "#fae48b">
display
</font>
el valor
<font color ="#54d398"> 
flex, block-flex
</font>
o
<font color ="#54d398"> 
inline-flex.
</font>
</br></br>
De esta forma, las cajas contenedoras se comportarán en bloque, pero sus hijos **directos** serán flexibles.

Si vamos a hacer **mails** en HTML, **NO** está soportado. Usar [tablas](#tables) en su lugar.

Los elementos flexibles apuntan todos en una misma dirección, que se puede definir y hay dos ejes, el **main axis**, que es si están en horizontal o vertical, y el **cross axis**, que es el orden.

Los hijos toman por defecto el tamaño para ocupar todo el **cross axis.**

Tenemos distintas propiedades que podemos modificar.
<font color="#fff">

<h3>Propiedades para los padres</h3>
</font>
<font color = "#fae48b"><b>

flex-direction.
</b></font>
</br>
<font color ="#54d398"> 
row.
</font>
En horizontal, dirección de lectura (izq -> der).
</br>
<font color ="#54d398"> 
row-reverse.
</font>
En horizontal, dirección contraria a la lectura (der -> izq).
</br>
<font color ="#54d398"> 
column.
</font>
En vertical, dirección de lectura (arr -> aba).
</br>
<font color ="#54d398"> 
column-reverse.
</font>
En vertical, dirección conraria a lectura (aba -> arr).

<font color = "#fae48b"><b>

flex-wrap.
</b></font>
Determina si los elementos hijos pueden hacer saltos de linea.
</br>
<font color ="#54d398"> 
wrap
</font>
los permite, mientras que 
<font color ="#54d398"> 
nowrap
</font>
(que es la por defecto), **NO** los permite.
</br>
Podemos usar sus versiones reverse para dar la vuelta al revés.

<font color = "#fae48b"><b>

flex-flow.
</b></font>
Es un [shorthand](#Shorthand) para los dos anteriores.


<font id="jc" color = "#fae48b"><b>

justify-content.
</b></font>
Posiciona los elementos en el **main axis.** Puede ser
<font color ="#54d398"> 
start, center, end
</font>
u otras especiales como:

<font color ="#54d398"> 

space-between.
</font>
Pone el primero en el principio, el último en el final y el resto los distribuye de forma equitativa.
</br>
<font color ="#54d398"> 
space-around.
</font>
Distribuye de forma equitativa **TODOS** los elementos. Esto provoca que los elementos del medio tengan el doble de espacio que el primero y el último.
</br>
<font color ="#54d398"> 
space-evenly.
</font>
Igual que el anterior pero ahora **TODOS** van a tener el mismo espacio.

<font id="ai" color = "#fae48b"><b>

align-items.
</b></font>
Posiciona los elementos en el **cross axis.** Úil cuando hay sólo **una línea**
Los valores que toma son:

<font color ="#54d398"> 

stretch.
</font>
Los elementos se estiran para llenar el contenedor.
</br>
<font color ="#54d398"> 
start.
</font>
Los elementos mantienen el tamaño y se ponen al principio de su línea (o columna). Pasa lo mismo con 
<font color ="#54d398"> 
center
</font>
y
<font color ="#54d398"> 
end.
</font>
</br>
<font color ="#54d398"> 
baseline.
</font>
Intenta alinear el texto de dentro. Se nota más cuando hay distintos tamaños.

<font color = "#fae48b"><b>

align-content.
</b></font>
Igual que el anterior pero para **múltiples líneas**.
</br>
**También toma los valores de justify-content**.

<font color = "#fae48b"><b>

order.
</b></font>
Cambiamos el orden de renderizado de los elementos (**NO afecta al DOM.**). Los valores son de 0 a n **pero todos los elementos tienen que tenerlo definido**.

<font color = "#fae48b"><b>

gap.
</b></font>
Asigna un espaciado entre elementos. Pueden salirse del flexbox.

<font color="#fff">

<h3>Propiedades para los hijos</h3>
</font>

<font color = "#fae48b"><b>

flex-grow.
</b></font>
Es un número que representa la proprción del espacio **sobrante** que puede crecer, teniendo como tope el
<font color = "#fae48b">
flex-basis.
</font>
 </br>
**Por ejemplo**, si todos los hijos tienen 
<font color ="#54d398"> 
1
</font>
y el primero tiene
<font color ="#54d398"> 
2,
</font>
el primero va a crecer hasta ocupar el doble de espacio **en blanco** que el resto.
</br>
Básicamente se suman todos los flex-grow y cada elemento tiene tantas partes del total como indique el atributo.

<font color = "#fae48b"><b>

flex-shrink.
</b></font>
Determina cuánto se pueden encoger los elementos.
<font color ="#54d398"> 
0
</font>
es que no se encogen. En cuanto al resto es igual que 
<font color = "#fae48b">
flex-grow.
</font>

<font color = "#fae48b"><b>

flex-basis.
</b></font>
Es el tamaño base del elemento en la dirección en la que apunta. Si la ventana reduce el elemento a menos de este tamaño empieza a aplicar las políticas del 
<font color = "#fae48b">
flex-shrink
</font>
y si la ventana se agranda a más de este tamaño aplica las del 
<font color = "#fae48b">
flex-grow.
</font>
**Es necesario definirlo para que funcionen los anteriores.**

El [shorthand](#Shorthand) para estas tres en ese orden es 
<font color = "#fae48b">
flex.
</font>

<font color = "#fae48b"><b>

align-self.
</b></font>
Overridea el 
<font color = "#fae48b">
align-items
</font>
del padre. (No funciona con 
<font color = "#fae48b">
align-content</font>)

</font>
</font>
<h2 id="grid">Grid</h2>

<font color ="#a0c2f0">V

Al igual que flexbox, es modelo de cajas, en este caso tenemos una grid que tiene filas y columnas (dos direcciones). Por tanto, usaríamos **flexbox** cuando el layout esté pensado para algo vertical u horizontal, pero usaremos **grid** cuando el layout tenga forma de "tabla", es decir, tanto filas como columnas. 

Si vamos a hacer **mails** en HTML, **NO** está soportado. Usar [tablas](#tables)en su lugar.

Tenemos un **Grid container** que tendrá varios hijos, los **Grid items.**, que pueden ocupar una o más **Grid cells** de la cuadrícula. Además, tenemos las **líneas de la cuadrícula**, que se definen como bordes. Por otra parte, tenemos los **Grid tracks**, que son cada una de las filas o cada una de las columnas. Los **Grid cells** son las celdas, el espacio real de la cuadrícula. Finalmente tenemos los **Grid area**, que son celdas individuales o conjuntos de celdas delimitidas por cuatro líneas y que usamos para colocar elementos de forma más eficiente en la cuadrícula.

Para crear un grid le damos a la propiedad
<font color = "#fae48b">
display
</font> 
del contenedor el valor
<font color ="#54d398"> 
grid.
</font>
Entonces, cada hijo pasará a ser una fila.
En Grid **NO hay [margin collapse](#maco).**

</font>

<h3>Propiedades del contenedor</h3>

<font color ="#a0c2f0">

<font color = "#fae48b">

**grid-template-columns.**
</font>
Cuánto ocupa cada una de las columnas. Mientras más valores le pongamos más columnas

<font color = "#fae48b">

**grid-template-rows.**
</font>
Cuánto ocupa cada una de las filas. Mientras más valores le pongamos más filas añade.

Podemos tener **más filas y columnas que contenido** de forma que según se vaya añadiendo contenido, se irán dibujando, aunque el espacio se reserva.
</br></br>
Si le damos el valor 
<font color ="#54d398"> 
auto
</font>
 a alguna de las filas o columnas, el espacio reservado será hasta ocupar todo el ancho restante de la pantalla, pero si le damos un **tamaño menor al elemento**, visualmente éste será más pequeño aunque tenga reservado todo el espacio. **Básicamente** calcula el espacio mínimo que ocupa cada fila o columna **teniendo en cuenta el contenido** de las mismas, y el espacio sobrante lo reparte entre cada una de los que tenga auto.
</br></br>
Si usamos la unidad 
<font color ="#54d398"> 
fr
</font>
calcula el espacio mínimo que ocupa cada fila o columna **sin tener en cuenta el contenido** de las mismas y el espacio sobrante lo reparte entre cada una. **Si no cabe el contenido de alguna de las filas o columnas**, adapta esa en concreto para que quepa dándole más espacio. Es **más usado** que auto.
</br></br>
El valor
<font color ="#54d398"> 
min-content
</font>
hace que ocupe lo justo para que quepa el contenido.
</br></br>
El valor
<font color ="#54d398"> 
subgrid
</font>
hace que si hacemos que algún hijo tenga una grid dentro, ésta forme parte de la grid principal, **evitando errores**.
</br></br>
La función
<font color = "#88a12c">
**minmax(**
</font>
<font color ="#e6c925">
**min max**
</font>
<font color = "#88a12c">
**)**
</font>  hace que una fila o columna tenga como mínimo
<font color ="#e6c925">
min
</font>
píxeles y como máximo
<font color ="#e6c925">
max
</font>
píxeles.
</br></br>
La función
<font color = "#88a12c">
**repeat(**
<font color ="#e6c925">
**times expression**
</font>
</font>
<font color = "#88a12c">
**)**
</font>
repite, separado por espacios,
<font color ="#e6c925">
times
</font> 
veces la expresión
<font color ="#e6c925">
expression
</font>.
</br>
En lugar de
<font color ="#e6c925">
times
</font>
podemos darle el valor
<font color ="#54d398"> 
auto-fit
</font>
o
<font color ="#54d398"> 
auto-fill.
</font>

Esto, unido al uso de 
<font color = "#88a12c">minmax
</font>, (que podemos darle un tamaño fijo en píxeles como mínimo y en fr como máximo para que ocupe un mínimo de espacio determinado) hace que según cambia la resolución, va metiendo columnas o filas nuevas cuando van cabiendo.
minmax
La diferencia entre ambos es que si tenemos menos elementos que filas y columnas, 
<font color ="#54d398"> 
auto-fill
</font> va a meter nuevas, mientras que 
<font color ="#54d398"> 
auto-fill
</font>
va a ajustar el tamaño de las filas o columnas que ya haya. 

Un ejemplo sería 
<font color ="#fae48b"> 
**repeat(**</font><font color ="#54d398">**auto-fit**
</font>**,**<font color = "#88a12c">**minmax(<font color ="#fae48b">200px, 1fr</font>)</font>**.

Esto lo que hace es que con <font color ="#fae48b">**repeat(**</font><font color ="#54d398">**auto-fit**
</font> le decimos que ponga tantas columnas/filas como haga falta para ocupar todo el espacio y con <font color = "#88a12c">**minmax(<font color ="#fae48b">200px, 1fr</font>)</font>** le decimos que cada elemento tiene que tener **mínimo 200px** se ancho/alto y **máximo 1fr**.

<font color = "#fae48b">

**grid-auto-columns / grid-auto-rows.**
</font>
Igual que las propiedades anteriores pero para las filas y columnas implícitas, es decir, las que tenga que crear porque hay más elementos definidos en HTML que filas y columnas en CSS.

<font color = "#fae48b">

**grid-auto-flow.**
</font>
Puede ser 
<font color ="#54d398"> 
row
</font>
o
<font color ="#54d398"> 
column.
</font>
Dicta qué añade automáticamente cuando hay más elementos que filas y columnas definidas. Por defecto añade **filas.**
</br>
También puede ser
<font color ="#54d398"> 
dense, 
</font>
que es para cuando algún elemento ocupa más de una celda, pues esto genera **huecos entre elementos**, así que este valor se encarga de rellenar los huecos, aunque **no respete el orden** de los elementos que son más grandes y por tanto no caben.
<font color = "#fae48b">

**row-gap / column-gap.**
</font>
Espacio entre filas y columnas, evitando así el problema del [margin collapse](#maco).
</br>
El [shorthand](#Shorthand) para estas propiedades es 
<font color = "#fae48b">
gap.
</font>

<font color = "#fae48b">

**grid-column-start / grid-column-end /grid-row-start / grid-row-end.**
</font>
Las grid tienen filas y columnas numeradas del 1 al n +1. Estas propiedades dicen en qué fila y columna empieza y termina un elemento.
</br>
A las end podemos añadirle delante del número 
<font color ="#54d398"> 
span
</font> y le dice que ocupe x filas o columnas más en lugar del número en el que termina.
</br>
El [shorthand](#Shorthand) para esto es 
<font color = "#fae48b">
**grid-column**
</font>
(o
<font color = "#fae48b">
**grid-row**
</font>)
y se separa el start y el end por una /.

<font color = "#fae48b">

**grid-area.**
</font>
Define áreas, sería como un [shorthand](#Shorthand) para la propiedad anterior.

Otra opción es usar esta propiedad junto con
<font color = "#fae48b">
grid-template-area.
</font>
Para ello, esta propiedad le da nombre (no hacen falta las comillas de los strings) a los elementos y en la otra se fija la distribución.

<font color = "#fae48b">

**grid-template-area**.
</font>
Define la distribución de las áreas, usada en conjunto con 
grid-area.
En un string por columna escribimos la misma. Si un elemento ocupa varias celdas lo escribimos todas las veces. Un ejemplo sería:
</br>
![alt text](imgs/areas.png)

<font id="ji" color = "#fae48b">

**justify-items**.
</font>
Alinea los elementos hijos dentro de sus celdas en el eje horizontal. Los valores que puede tomar son:
<font color ="#54d398"> 

stretch.
</font>
Estira el elemento.
<font color ="#54d398"> 

start.
</font>
Alinea al principio según dirección de escritura.
<font color ="#54d398"> 

self-start.
</font>
Alinea al principio según dirección de escritura **teniendo en cuenta la dirección de los hijos.**
Es decir, si a un hijo le cambiamos la 
<font color = "#fae48b">
direction
</font>
de 
<font color ="#54d398"> 
ltr
</font>
a 
<font color ="#54d398"> 
rtl,
</font>
ese hijo se alinea al contrario.
<font id ="gjc" color = "#fae48b">

**justify-content**.
</font>
Es igual que el de [flex](#jc) pero mueves la celda entera.
<font color = "#fae48b">

**align-items.** 
</font>
Igual que el [justify-items](#ji) pero en el eje vertical.

<font color = "#fae48b">

**align-content.**
</font>
Igual que el [justify-content](#gjc) pero en el eje vertical.
<font color = "#fae48b">

**place-content.**
</font>
Es un [shorthand](#Shorthand) para
<font color = "#fae48b">
align-content
</font>
y
<font color = "#fae48b">
justify-content.
</font>
Se usa bastante para **centrar los elementos**.
</font>
<h3>Propiedades de los hijos</h3>
<font color ="#a0c2f0">
<font color = "#fae48b">

**justify-self.**
</font>
Alinea uno de los hijos en concreto en horizontal. Mismas opciones que [justify-items](#ji).

<font color = "#fae48b">

**align-self.**
</font>
Alinea uno de los hijos en concreto en vertical. Mismas opciones que [align-items](#ai).
</font>
<h2>Media Queries</h2>

<font color ="#a0c2f0">

La sintaxis en **CSS** es la siguiente:
</br>
<font color ="#ccc">
<font color="#AE8ECD">
@media
</font>
not|only mediatype
<font color="#AE8ECD">
and
</font>
(expressions){
</br>
<font color="#AE8ECD">
CSS-code;</br>}
</font>
</br>
</font>
<font color ="#ccc">
media
</font>
es la regla que inicia la query,
<font color ="#ccc">
not y only
</font>
son operadores opcionales. El primero descarta dispositivos y el otro es para que los navegadores antiguos que no soportan media queries no le haga caso a la query,
<font color ="#ccc">
mediatype
</font>
es sobre lo que queremos actuar (e.g 
<font color ="#54d398"> 
print
</font>
o
<font color ="#54d398"> 
screen
</font>
).

<font color ="#54d398"> 

print
</font>
serviría para dar estilos de cara a dispositivos de impresión. 

<font color ="#54d398"> 

screen
</font>
es para dar estilos en pantalla.

Se utiliza bastante para adaptar ciertas cosas a dispositivos móviles, haciendo una query sobre el ancho de la pantalla y reorganizando los flexbox en columnas, por ejemplo.

</font>
<h3>Expresiones comunes</h3>
<font color ="#a0c2f0">

<font color ="#9081db">

**prefers-reduced-motion**.
</font>
Cuando tiene el valor
<font color ="#9081db">
reduce,
</font>
está pensado para personas epilépticas o con enfermedades que se dan al ver muchas animaciones o parpadeos rápidos. Lo que pongamos aquí debería tener pocas animaciones **Y** lentas.
</font>
<h2>Container Queries</h2>

<font color ="#a0c2f0">

Para usarlas, hay que usar la propiedad
<font color = "#fae48b">
container-type
</font>
(lo cual crea un container context) sobre el elemento que queremos que actúe como contenedor. Puede tomar los siguientes valores:


inline-size.
</font>
Modificamos las propiedades en base al ancho del contenedor, sólo tiene en cuenta las propiedades en línea.

<font color ="#54d398"> 

size.
</font>
Modificamos las propiedades en base a las propiedades en bloque y en línea.

También podemos darle un 
<font color = "#fae48b">
container-name
</font>

La sintaxis de una query sería la siguiente:

<font color="#AE8ECD">

@container nombre-del-contenedor (condición) {
  </br>
</font>
código CSS.
</br>
}
</font>
<h1>Workflow</h1>

<font color ="#a0c2f0">

Los scripts que sean **muy importantes** y/o que queramos **que se ejecuten nada más el usuario entre** en la página se ponen en el 
<font color="#b61187">
**< head>**
</font>, ya que de contrario, podría no ejecutarse el script hasta que se cargue la página.

Para <b>crear un menú navegable </b>creamos una lista sin orden y en cada elemento ponemos un enlace a la página que deseemos.
</br>
</br>

Para crear <b>fondos con colores superpuestos a imágenes</b>, hacemos un 
<font color="#b61187">
<b>div</b>
</font>
con una clase,por ejemplo 
<font color ="#3ef7f7"> 
A
</font> 
y otro 
<font color="#b61187">
<b>div</b>
</font>
con otra clase, por ejemplo 
<font color ="#3ef7f7"> 
B
</font> 
.
En el Css, para 
<font color ="#3ef7f7"> 
A
</font> 
ponemos
<font color = "#fae48b"><b>
background-image
</b></font>
y para 
<font color ="#3ef7f7"> 
B
</font> 
ponemos 
<font color = "#fae48b"><b>
background-color
</b></font> 
con un color con alpha.

<b>Para vincular fuentes de google</b>, nos vamos a google fonts, seleccionamos las que queramos y nos aparece el código html para ponerlo en el head.

Para <b> configurar nuestras propias fuentes</b> creamos otro archivo css en el que definimos la propiedad <b>@font-face</b>, a la cual hay que darle un nombre, el <b>font-family</b> y un <b>src</b>, que sería utilizar la función <b>url</b> con la ruta a la fuente en cuestión y, para que el navegador la cargue más rápido, le decimos el formato con la función <b>format</b>. Si queremos configurar variantes de la misma fuente, cramos diferentes <b>@font-face</b> con la misma family y distintas propiedades.

 Ejemplo:

<img src ="imgs/fonts.png" title="Configuración de una fuente">

</font>

## Debuggear
<font color ="#a0c2f0">

En inspeccionar elementos, en la pestaña **elements** podemos, con click derecho sobre un elemento:

- Copiar selectores.

- Forzar estados. Es decir, que el objeto esté active o hover permanentemente.

- Si seleccionamos un elemento, está disponible en consola con **$0**. 
<br>
Por ejemplo, en consola podemos poner **console.dir($0)** y nos aparecerán todas las variables del elemento seleccionado.

- Si pulsamos Ctrl + F en el panel, podemos buscar por texto, etiquetas, etc.

En la pestaña **Resources/Sources** podemos trabajar con los archivos de la página. En él, podemos

- Editar y guardar el html o css desde el navegador.

- En la subpestaña **snippets** podemos guardar un pedazo de código javascript y ejecutarlo en cualquier momento con **ctrl + Enter.**

En la pestaña **Network** podemos:

- Ver los tiempos de carga de cada recurso en una timeline.

- Ver información de cada recurso, como quién lo inicializa (Initiator), el tamaño, etc.

- En la parte de abajo vemos cuánto tiempo total ha tardado en cargar, el peso de los recursos, el peso de lo que se transfiere, etc.

- Si hacemos click derecho en los elementos podemos copiar **requests a esos elementos** en distintos frameworks como powershell o **Node.js.**

En la pestaña **Performance/Timeline** podemos:

 - Grabarnos interactuando y analizar el tiempo y el tamaño de los recursos que usa la web.

 Con ctrl + shift + P podemos **ejecutar comandos** como:

 - Show performance monitor.

</font>
<h2>

Integrar librerías de iconos</h2>
<font color ="#a0c2f0">

Buscamos la librería que queramos y copiamos el tag < link> que tenga y lo pegamos en el html. Después, le daremos a un texto la clase que nos diga la documentación y pondremos el texto que representa al icono. En el caso de usar los de google, pondremos la clase 
<font color ="#54d398"> 
**material-symbols-outlined**
</font>
 o
<font color ="#54d398"> 
**material-icons.**
</font>
</font>
<h2> 

controlar los canales de las variables de color</h2>
<font color ="#a0c2f0">

Para ello se puede usar la función 
<font color = "#88a12c">
**rgba( <font color ="#e6c925">from variable r g b / alpha</font>).**
</font>
Podemos intercambiar los canales o hacer operaciones con ellos. Antes del color hay que poner
<font color ="#e6c925">
from
</font>
y el alpha se pone siempre detrás de un 
<font color ="#e6c925">/.
</font>
</font>
<h2 id = "esconder">Ocultar al clickar</h2>
<font color ="#a0c2f0">

Después de nuestro elemento,pondremos un checkbox y un <font color ="#b61187">
label,
</font>
que será nuestra barra que cierra.
En un 
<font color ="#b61187">span
</font>
 le pondremos el icono de apertura y en otro con una clase para cerrar pondremos el icono de cierre.

En el CSS, mostraremos en 
<font color = "#fae48b">
display
</font>
<font color ="#54d398"> 
flex
</font>
la clase de cierre y ocultaremos el primer span del label.

Seleccionaremos el primer span cuando el checkbox esté marcado de la siguiente manera:
<font color ="#e6c925">
input[type="checkbox"]:checked
</font>
le pondremos
<font color = "#fae48b">
display
</font>
en 
<font color ="#54d398"> 
flex.
</font>
Seleccionamos de la misma manera el span de la clase de cierre y lo ocultamos con
<font color = "#fae48b">
display
</font>
<font color ="#54d398"> 
none.
</font>
Seleccionamos nuestro elemento cuando está checkeado el checkbox también y le ponemos el 
<font color = "#fae48b">
width
</font>
en
<font color ="#54d398"> 
</font>
</font>
<h2>Sidebar que se esconde</h2>
<font color ="#a0c2f0">

Crearemos un contenedor que será 
<font color ="#54d398"> 
flex.
</font>
En él, pondremos nuestro 
<font color ="#b61187">
aside
</font> con el sidebar y el
<font color ="#b61187"> main
</font>
 con el contenido principal, el cual tendrá un
<font color = "#fae48b">
margin
</font>
<font color ="#54d398"> 
0 auto
</font>
para que se adapte cuando se esconda.
El sidebar tendrá dentro un label en el que usaremos la técnica de [esconder](#esconder). El sidebar tendrá
<font color = "#fae48b">
position
</font>
<font color ="#54d398"> 
sticky
</font>
y 
<font color = "#fae48b">
top
</font>
<font color ="#54d398"> 
0
</font>
para que se pegue pero siga ocupando espacio en la página y afecte al contenido.
</font>

## Quitar sombra a un solo lado
<font color ="#a0c2f0">

Metemos el elemento en cuestión en un 
<font color ="#b61187">
**div**
</font>
con 
<font color = "#fae48b">
overflow
</font>
<font color ="#54d398"> 
hidden
</font>
y hacemos que el lado en el que queremos quitar la sombra se salga del 
<font color ="#b61187">
**div**
</font>.
</font>
<h2>Redondeado interno</h2>

![alt text](imgs/red.png)
<font color ="#a0c2f0">

En el 
del <font color = "#fae48b">
::before 
</font>
y el
del <font color = "#fae48b">
::after
</font>
del elemento le ponemos un contenido y les ponemos 
del <font color = "#fae48b">
position
</font>
en 
<font color ="#54d398"> 
absolute
</font>
(el elemento en sí debe estar en 
<font color ="#54d398"> 
relative
</font>
).Ponemos uno de los dos encima con un color transparente, el borde de abajo a la derecha redondeado y le damos una **sombra** desplazada a la derecha y abajo con el color del fondo e intensidad 0, pero con un valor de grosor.

Hacemos lo mismo con el otro pero lo ponemos abajo, redondeamos el otro borde y desplazamos la sombra arriba. 
</font>
<h2>Botones animados al hovear</h2>
<h3>Fondo wave</h3>
<font color ="#a0c2f0">

en el 
<font color = "#fae48b">
::before
</font>
del botón le ponemos un 
<font color = "#fae48b">
background-color
</font>
y le damos dimensiones y
<font color = "#fae48b">
content =''
</font>.
Le damos un 
<font color = "#fae48b">
z-index
</font> negativo para que aparezca por debajo del texto
y
<font color = "#fae48b">
position
</font>
<font color ="#54d398"> 
absolute
</font>
para desplazar el 
<font color = "#fae48b">
top
</font>
y el 
<font color = "#fae48b">
left
</font>
fuera del botón. **Usamos valores porcentuales.**.
Podemos redondear incluso el 
<font color = "#fae48b">
::before.
</font>

En el botón le damos
<font color = "#fae48b">
overflow
</font>
<font color ="#54d398"> 
hidden
</font>
y <font color = "#fae48b">
position
</font>
<font color ="#54d398"> 
relative
</font> para que el before calcule su posición a partir de él.

En el <font color = "#fae48b">
:hover
</font> 
del <font color = "#fae48b">
::before
</font>
ponemos los márgenes de forma que tape el botón.

En el 
<font color = "#fae48b">
::before
</font>
configuramos la transición para el
<font color = "#fae48b">
**top**
</font>
y el 
<font color = "#fae48b">
**left.**
</font>
</font>
<h3> Neón</h3>
<font color ="#a0c2f0">

Animamos alternativamente el color, las sombras y el borde entre colores apagados y colores brillantes de forma que parpadee. (Por ejemplo, 10% apagado 25% encendido 28% apagado 33% encendido, etc).

Añadimos el filtro drop-shadow varias veces con distintas intensidades al contenedor.

Además, podemos añadir líneas en el
<font color = "#fae48b">
::after
</font>
y el 
<font color = "#fae48b">
::before,
</font>
en las cuales podemos hacer transiciones del
<font color = "#fae48b">
top, width y opacity
</font>
y animar el 
<font color = "#fae48b">
background-color
</font>
y el 
<font color = "#fae48b">
box-shadow.
</font>
</font>
<h2>Typewriting effect</h2>
<font color ="#a0c2f0">

Animamos el 
<font color = "#fae48b">
width
</font>
de un 
<font color ="#54d398"> 
0%
</font>
a un
<font color ="#54d398"> 
100%.
</font>
Ponemos el 
<font color = "#fae48b">
overflow
</font>
en
<font color ="#54d398"> 
hidden
</font>
y la 
<font color = "#fae48b">
position
</font>
en
<font color ="#54d398"> 
relative
</font>
para posteriormente modificar el
<font color = "#fae48b">
::after.
</font>

Le damos un pequeño ancho y un alto del 100%, le damos un
<font color = "#fae48b">
right
</font>
de 
<font color ="#54d398"> 
0.
</font>
y un
<font color = "#fae48b">
position
</font>
<font color ="#54d398"> 
absolute
</font>
para que se coloque al final usando como referencia el texto que está en 
<font color ="#54d398"> 
relative.
</font>

Animamos entonces el 
<font color = "#fae48b">
opacity
</font>
de
<font color ="#54d398"> 
0
</font>
a
<font color ="#54d398"> 
1.
</font>

</font>
<h2>Metodología BEM</h2>
<font color ="#a0c2f0">

Se componne de tres elementos: bloque, elemento y modificador.

Un **bloque** es un componente independiente y reutilizable que no depende de nadie para existir, por ejemplo, una barra de navegación, una tarjeta de presentación, etc.
Podríamos compararlo con las **clases de POO**.

Los bloques se nombran en base a la **función que cumple**, por ejemplo, lista o navbar.

Un **elmento** es una parte de un bloque que por sí solo no tiene sentido pero lo toma al formar parte del bloque. Por ejemplo un icono dentro de un menú de navegación, ya que solo tendrá sentido en el menú de navegación.

Los elementos se nombran con el nombre del bloque, dos guiones bajos y el nombre del elemento. P. ejm: lista__item.

Un **modificador** es una forma de modificar un bloque o un elemento.

Los modificadores serían clases adicionales para los elementos o bloques y se nombran con el nombre del elemento, dos guiones y el nombre del modificador.
</font>

<h1>Atajos VSCode</h1>
<font color ="#a0c2f0"> <font color ="#b61187"><u><b>html:5</u></b>
</font> Autocompleta la estructura básica de una página web. </font>

<font color ="#b61187"><u><b>

meta:
</u></b></font>
<font color ="#a0c2f0">
Da opciones para los meta tags.
</font>

<font color ="#b61187"><u><b>a + enter</u></b></font>
<font color ="#a0c2f0">Autocompleta un enlace.</font>
<font color ="#a0c2f0">

<font color ="#b61187"><u><b>
ctrl + alt + flechas
</u></b></font>
Cursor múltiple.

<font color ="#b61187"><u><b>

Windows + Ctrl + Enter.
</u></b></font>
En el navegador, activa las funciones de accesibilidad.

<font color ="#b61187"><u><b>

Alt + L Alt +O.
</u></b></font>
Abre el html en el navegador en live server.
</font>
<h2> Snippets</h2>
<font color ="#a0c2f0">

En File->Preferences podemos editar los snippets. Además, podemos crear **snippets para un proyecto concreto** si en la carpeta .vscode creamos un archivo con la extensión **.code-snippets** en lugar de Json.

En los snippets, usamos **$0** para situar el cursor después del snippet y el resto de números para autocompletar. También podemos ponerle una opción por defecto al autocompletar de esta forma:

**${1:Lo que sea}**
</font>
<h2>Emmet</h2>

<font color ="#a0c2f0">
<font color ="#b61187"><b>

\> 
</b></font>
Tags dentro de otros tags. 

<font color ="#b61187"><b>

\*
</b></font>
Tantos tags como el número que pongamos después del asterisco.


<font color ="#b61187"><b>

()
</b></font>
Agrupa para que otros operadores afecten a múltiples elementos.

<font color ="#b61187"><b>

[=]
</b></font>
Le da el atributo que pongamos entre los brackets y, si usamos el =, le da ese valor.

<font color ="#b61187"><b>

.
</b></font>
Seguido de un texto, le da el atributo 
<font color ="#dd9b37">
class
</font> con el valor del texto al tag. Es un caso particular del anterior.

<font color ="#b61187"><b>

\#
</b></font>
Igual que el anterior pero con el 
<font color ="#dd9b37">
id.
</font>

<font color ="#b61187"><b>

{}
</b></font>
Le da contenido a los tags, es decir lo que va entre el tag y el cierre del tag.

<font color ="#b61187"><b>

\$
</b></font>
Usado junto con 
<font color ="#b61187">
\* 
</b></font>
y el anterior, es el número del elemento actual, como si fuera la i dentro de un for.

En CSS, los atributos y las unidades tienen abreviaciones, así que podemos hacer lo siguiente:

<font color ="#b61187"><b>

atributoValorUnidad
</b></font>
Podemos separar los distintos valores con -
</br>
En cuanto a las unidades, 
<font color ="#b61187">
p
</font>
es para **porcentajes**,
<font color ="#b61187">
e
</font>
es para **em**.

</font>

<h1>HTML</h1>
<font color ="#b61187"><u><b>
< html 
<font color = "#dd9b37">
lang
</font>>
</font></u></b>.
<font color ="#a0c2f0">
Es el principal, le decimos el lenguaje con un language code.
</font>
</br>
<font color ="#b61187"><u><b>< h1></u></b></font>
<font color ="#a0c2f0"> Los h son los títulos. Son importantes porque a nivel de SEO, Google le va a dar más importancia a los h1 que a los h2 y así sucesivamente. Solo se debe utilizar un h1</font>

<font color ="#b61187"><u><b>< head></u></b></font>
<font color ="#a0c2f0">Es el header, lo que contiene la información invisible que caracteriza la página.</font>
</br>
<font color ="#b61187"><u><b>
< link 
<font color ="#dd9b37"> 
rel href type
</font> >
</u></b></font>
<font color ="#a0c2f0">
Se coloca en el head y sirve para enlazar archivos a la página para que los use.
</br>
<font color ="#dd9b37">
rel 
</font>
sería la relación que mantiene el archivo con la página. </br></br>
Para enlazar un CSS le damos el valor

<font color ="#54d398"> 

stylesheet
</font>.
<font color ="#54d398"> 
icon
</font>
es para ponerle el [icono](#icon).

</br>
<font color ="#dd9b37">
href
</font>
es la ruta al archivo.

</br>
<font color ="#dd9b37">
type
</font>
es el tipo del recurso. Es <b>MUY</b> recomendable ponerlo por compatibilidad. Ejemplos son:

</br>
<font color ="#54d398"> 
image/png
</font>
</font>
</br>
<font color ="#b61187"><u><b>< title></u></b></font>
<font color ="#a0c2f0"> Va en un head. Es lo que le da el nombre a la pestaña.</font>
</br><font color ="#b61187"><u><b>< body></u></b></font>
<font color ="#a0c2f0"> Aquí va el contenido de la página.</font>
</br>Una página se empieza con el tag html y se divide en head y body de esta forma:</br>
<img src="imgs/est.png"></img>
</br><<font color ="#b61187"><u><b>< p></u></b></font>
<font color ="#a0c2f0">Párrafo. </font>
</br>
<font color ="#b61187"><u><b> < strong>
</b></u></font>
<font color ="#a0c2f0">
 Usar para las negritas, pues el SEO se va a fijar en esta etiqueta antes que en 
 </font>
 <font color ="#b61187"><u><b> 
 < b>.
 </b></u></font>
<font color ="#b61187"><u><b> 

< em>
</b></u></font>
<font color ="#a0c2f0">
Se utiliza para hacer énfasis en algo o para citar. Pone la letra en cursiva.
</font>

<font color ="#b61187"><u><b> 
< del>
</b></u></font>

<font color ="#a0c2f0">
Se usa para tachar contenido erróneo.
</font>
<font color ="#b61187"><u><b> 

< header>
</b></u></font>
<font color ="#a0c2f0">
Se usa para encabezados. No confundir con 
<font color ="#b61187">
< head>
</font>
<font color ="#b61187"><u> 

**< i>**
</u></font>.Icono.
<font color ="#b61187"><u><b>

< nav>
</b></u></font>
<font color ="#a0c2f0">
Se usa para marcar semánticamente navegables. Un ejemplo sería un menú navegable.
</font>

<font color ="#b61187"><u><b> 
< section>
</b></u></font>
<font color ="#a0c2f0">
Se usa semánticamente para marcar una sección de contenido. Por ejemplo en una página de recetas, la sección ingredientes, la sección preparación, etc.
</font>

<font color ="#b61187"><u><b> 
< main>
</b></u></font>
<font color ="#a0c2f0">
Marca el contenido principal de la página.
</font>

<font color ="#b61187"><u><b> 
< aside>
</b></u></font>
<font color ="#a0c2f0">
Se utiliza para marcar contenido más bien secundario pero de alguna forma relacionado con la página. Un ejemplo sería la sección "Otras noticias" de muchas páginas de noticias.
</font>

<font color ="#b61187"><u><b> 
< footer>
</b></u></font>
<font color ="#a0c2f0">
Se usa para marcar semánticamente un pie de página. En él se suelen encontrar elementos como el copyright o la información de contacto.
</font>

<font color ="#b61187"><u><b> 
< code>
</b></u></font>
<font color ="#a0c2f0">
Se usa para escribir snippets de código.
</font>
</br><font color ="#b61187"><u><b>< ol></u></b></font>
<font color ="#a0c2f0">Lista ordenada. </font>
</br><font color ="#b61187"><u><b>< ul></u></b></font>
<font color ="#a0c2f0">Lista sin orden. Se pueden usar para hacer menús navegables </font></br>
<font color ="#b61187"><u><b>
< li></u></b></font>
<font color ="#a0c2f0">Dentro de una lista, pone un item. </font></br>
<font color ="#b61187"><u><b>< a <font color ="#dd9b37">href  target rel download</font>></u></b></font> 
<font color ="#a0c2f0">Enlace. 

<font color ="#dd9b37">href </font> es el recurso al que lleva el enlace, puede ser una imagen, otra página, etc.<b> Lo va a buscar en local, por lo que si es una página externa hay que añadirle https://</b> Si bien pdemos poner solo //, por motivos de SEO <b>NO</b> se recomienda.

Podemos enlazar con una sección de la página a través del atributo 
<font color ="#dd9b37">
id
</font>
de su propiedad con un # de esta forma:
</font>
<font color ="#54d398">
href ="#id-al-que-enlazamos"

</font>

<font color ="#a0c2f0">
También podemos hacer que se mande un mail desde poniendo
<font color ="#54d398">
href ="mailto:correo@correo.com"
</font>
 o que llame a un teléfono con 
<font color ="#54d398">
 tel. 
 </font>
</br>
 <font color ="#dd9b37">
 rel
 </font> dicta qué se puede hacer con esa página:

</br>
<font color ="#54d398">

Noopener
</font> bloquea el Window.Opener de Javascript, mientras que

<font color ="#54d398">
noreferrer
</font> 
además bloquea los header, lo que imposibilita a la página de destino saber desde qué página se accedió.

<font color ="#54d398">
nofollow
</font>
hace que el motor de búsqueda no indexe la página. Se puede usar para hacer que si la gente pone enlaces en nuestra página (porque permite comentarios, por ejemplo), Google no los indexe y <b>nosotros no tengamos
la responsabilidad de lo que suceda con ese enlace.</b>

</br>
 <font color ="#dd9b37">target</font> es la pestaña en la que se abre, <font color ="#54d398">_self</font> es en la misma pestaña, <font color ="#54d398">_blank</font> es una nueva pestaña o ventana, dependiendo de la configuración del navegador. <b>Se recomienda añadir el atributo <font color ="#54d398">

rel="noreferrer"
</font>
o bien
<font color ="#54d398">
rel ="noopener"
</font>
 en estos casos para evitar que un hacker abuse de la API para abrir pestañas.</b> 
 Esto además mejora el rendimiento y evita <b>phising</b>.

<font color ="#dd9b37"> 
download
</font> se pone si queremos que el archivo al que se enlaza se descargue.
</font>

<font color ="#b61187"><u><b>

< dialog 
<font color ="#dd9b37"> 
open
</font>>
</u></b></font>
Da la semántica de una [ventana modal](#modal), de un diálogo. Por defecto está cerrada, a no ser que le pongamos el atributo
<font color ="#dd9b37"> 
open.
</font>
</br>
Viene configurado por defecto con el **position en absolute.**

<font color ="#b61187"><u><b>
</br>
< img 
<font color ="#dd9b37"> 
src alt</font>>
</u></b></font>
<font color ="#a0c2f0">
Imagen. 

<font color ="#dd9b37"> 
src</font>
es la ruta de la imagen.
<font color ="#dd9b37"> 
</br>alt</font>
es lo que se muestra cuando no carga. Es importante que describa bien la imagen por motivos de SEO.
</font>

</br>
<font color ="#b61187"><u><b>
< video
<font color ="#dd9b37"> 
src autoplay controls loop muted
</font>>
</font></u></b>
<font color ="#a0c2f0">
Crea el video alojado en 
<font color ="#dd9b37"> 
src
</font>
.
Por cuestiones de seguridad, los videos no se pueden reproducir con sonido automáticamente si el usuario no quiere, así que para que se reproduzca hay que darle el control al usuario o que esté muteado.
</br>
Por otra parte, si el navegador <b>no soporta el vídeo</b> por alguna razón (no es lo mismo que no lo cargue), podemos <b>escribir un mensaje</b> entre la etiqueta de apertura y de cierre.

</br>
<font color ="#dd9b37"> 

autoplay
</font>
es para darle la posibilidad de que se reproduzca automáticamente al interactuar con él.
</br>
<font color ="#dd9b37"> 
controls
</font>
es para darle la barra con los controles de pausa, volumen, fullscreen, etc.
</br>
<font color ="#dd9b37"> 
muted
</font>
hace que el video empiece muteado al recargar la página, pero que si tiene el autoplay se reproduzca automáticamente.
</br>
<font color ="#dd9b37">
loop
</font> Hace que se reproduzca en bucle.

<font color ="#b61187"><u><b>
< track
<font color ="#dd9b37">
src default kind srclang label
</font>>
</font></u></b>
Carga un archivo .vtt con subtítulos para el video.
</br>
<font color ="#dd9b37">
default
</font>
</br>
hace que aparezcan por defecto.
<font color ="#dd9b37">
</br> 
kind
</font>
es el tipo de subtítulo. Puede ser 
<font color ="#54d398">
captions, subtitles, chapters, descriptions
</font>
. La diferencia entre captions y subtitles es que semánticamente subtitles se utiliza para traducir texto y
captions para traducir audio.

Los chapters es para dividr el video en secciones.

<font color ="#dd9b37">
srclang
</font>
es el idioma de los subtítulos que se muestra en el selector.

<font color ="#dd9b37">
label
</font>
es el texto que aparece para identificar el idioma en base al srclang. Podemos poner lo que queramos.

</br>
<font color ="#b61187"><u><b>
< audio>
</font></u></b>
Funciona igual que video con los mismos atributos.
</font>

<font color ="#b61187"><u><b></br>
< form
<font color ="#dd9b37"> 
method autocomplete
</font>>
</font></u></b>
<font color ="#a0c2f0">
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

Adicionalmente, existe el valor
<font color ="#54d398">
dialog
</font>
,que lo que hace es que si está dentro de un 
<font color ="#b61187">
< dialog>
</font>
y **el form** tiene un 
<font color ="#b61187">
< button>
</font>
dentro, cierra el diálogo.


<font color ="#dd9b37"> 

autocomplete
</font>
puede ser 
<font color ="#54d398">
on
</font>u 
<font color ="#54d398">
off.</font>

<font color ="#b61187"><u><b>
</br>< input
<font color ="#dd9b37"> 
type value list required name placeholder value minlength maxlength
</font>
>
</font></u></b>
<font color ="#a0c2f0">
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
list
</font> lo vincula con un tag
<font color ="#b61187">
data list.
</font></br>
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
</br>

<font color ="#b61187"><u><b>
< label
<font color ="#dd9b37">
for
</font>>
</font></u></b>
Sirven para introducir al input, es decir, sería como el "nombre" del campo a rellenar y, además, lo leen los lectores de pantalla de las perosnas ciegas. De hecho, <b>al clickar en el label, se focusea el input</b> cuyo
<font color ="#dd9b37"> 
id
</font>
coincida con el 
<font color ="#dd9b37"> 
for
</font>.
</br>
Otra forma de enlazar 
<font color ="#b61187">
inputs 
</font>
con 
<font color ="#b61187">
labels
</font>
es meter el 
tag del 
<font color ="#b61187">
input
</font>
dentro del del 
<font color ="#b61187">
label.
</font></br>

<font color ="#b61187"><u><b>
< textarea
<font color ="#dd9b37">
readonly disabled maxlength rows
</font>>.
</font></u></b>
Crea un input de texto multilínea cuyas dimensiones son editables.
Si ponemos el 
<font color ="#dd9b37">
readonly
</font>
no será editable, y si ponemos 
<font color ="#dd9b37">
disabled
</font> no se le podrá hacer focus y, además, no se enviará a la aplicación web que construyamos por debajo.</br>
<font color ="#dd9b37">
rows
</font>
es el número de líneas antes de que ponga una barra de scroll.</br>
<b>Tiene su propia tipografía</b>, así que hay que cambiarla explícitamente en lugar de tomar la del padre.</br>
Tiene propiedades específicas en CSS, que son:

<font color ="#dd9b37">
min-width, max-width, min-height, max-height
</font>


<font color ="#dd9b37">
resize. 
</font>
<font color ="#54d398">
horizonta, vertical, both o none.
</font>
</br>
<font color ="#dd9b37">
form-sizing
</font>
.Si le damos el valor
<font color ="#54d398">
content
</font> el tamaño del texto se ajustará al tamaño del text area.

</br>
<font color ="#b61187"><u><b>
< select 
<font color ="#dd9b37">
name
</font>>
</font></u></b>
Lista desplegable con varias opciones, que se definen con el tag 
<font color ="#b61187">
option
</font>.
El 
<font color ="#dd9b37">
name
</font> lo identifica para javascript.
</br>Prácticamente <b>NO te deja modificarlo en CSS</b> (aparte del <b>background-color</b>, que no puede ser transparente), aunque se puede hacer desde javascript, pero no es algo común.

<font color ="#b61187"><u><b>
< option
<font color ="#dd9b37">
value
</font>>
</font></u></b>
Cada una de las opciones del tag
<font color ="#b61187">
select.
</font>
El 
<font color ="#dd9b37">
value
</font> lo identifica para javascript.

<font color ="#b61187"><u><b>
< datalist
<font color ="#dd9b37">
name id
</font>>
</font></u></b>
.Crea una lista desplegable de opciones que se pueden buscar por texto.
</br> Cada opción es un tag
<font color ="#b61187">
option.
</font>
El texto que haya entre la apertura y cierre
de estos lo usará como descripción del
<font color ="#dd9b37">
value.
</font> 
</br>El
<font color ="#dd9b37">
id
</font>
lo vincula con el tag 
<font color ="#b61187">
input.</font>
</br>

<font color ="#b61187"><u><b>
< fieldset>
</font></u></b>
Recuadro que agrupa distintos inputs.</br>
En CSS se modifica con la propiedad
<font color ="#dd9b37">
border.
</font>

<font color ="#b61187"><u><b>
< legend>
</font></u></b>
Texto explicativo del 
<font color ="#b61187">
fieldset.
</font>

<font color ="#b61187"><u><b>
< details>
</font></u></b>
En conjunto con un 
<font color ="#b61187">
summary
</font>
, crea una sección desplegable que se puede ocultar y mostrar. En el 
<font color ="#b61187">
details
</font>
 se pone la parte oculta.

 <font color ="#b61187"><u><b>
< summary>.
</font></u></b>
Junto con 
<font color ="#b61187">
details
</font>
crea una sección desplegable que se puede mostrar u ocultar. Aquí se pone la parte visible.
En <b>CSS</b> podemos modificarlo cuando está abierto con 
<font color ="#dd9b37">
details[open]
</font>.

<font id="tables" color ="#b61187"><u><b>
< table>
</font></u></b>
Crea una tabla. Para formar la tabla tenemos varias etiquetas que podemos poner dentro:

<font color ="#b61187"><u><b>
< tr>
</font></u></b>
Para crear tablas, crea una fila. <b>NO</b> es necesario que todas las filas tengan el mismo número de elementos.

<font color ="#b61187"><u><b>
< td 
<font color ="#dd9b37">
colspan
</font>>
</font></u></b>
Para crear tablas, crea una celda para una fila.

<font color ="#dd9b37">
Colspan
</font>
es cuántas columnas ocupa la fila. Por defecto es 1.

</br>

<font color ="#b61187"><u><b>
< th>
</font></u></b>
Dentro de una fila, crea un header para la tabla, es decir, los títulos de cada columna.

Además, las tablas hay que separarlas semánticamente con:

<font color ="#b61187"><u><b>
< thead>
</font></u></b>para los encabezados, osea, los 
<font color ="#b61187">
th
</font>, 
<font color ="#b61187"><u><b>
< tbody>
</font></u></b> para el cuerpo de la tabla, y 
<font color ="#b61187"><u><b>
< tfoot>
</font></u></b>
para los pie de tabla.


<font color ="#b61187"><u><b>
< meta 
<font color ="#dd9b37">
charset
</font>>
</font></u></b>
.Le dice la codificación de caracteres. La más utilizada es 
<font color ="#54d398">
UTF-8.
</font>

</br>
<font color ="#b61187"><u><b>
< meta
<font color ="#dd9b37">
name content
</font>>
</font></u></b>
Le da valor a ciertas propiedades.
<font color ="#dd9b37">
name
</font>
sería la propiedad y 
<font color ="#dd9b37">
content
</font>
el valor.
Ejemplos:

</br>
<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"viewport"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"width = device-width, initial-scale = 1.0"
</font>

Esto ajusta el viewport a la anchura del dispositivo y le pone el zoom al 100%.

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"description"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo"
</font>

Le da una descripción a la web. Importante darle unos 100 caracteres para SEO.

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"keywords"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo, algo2"
</font>

Palabras clave separadas por comas a la hora de buscar en el navegador.

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"author"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Alguien"
</font>

El nombre del autor.

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"robots"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"valores"
</font>

Algunos valores que le podemos dar son:
<ul>
<font color ="#54d398">
<li>
nofollow.
<font color ="#a0c2f0">
Le dice al navegador que no muestre la página en los motores de búsqueda.
</font>
</li>
</br>
<li>
nosnippet.
<font color ="#a0c2f0">
Los navegadores modernos muestran una preview de las primeras páginas al buscar. Este valor hace que  cierta parte del contenido no la muestre en esta preview.
</li>
</font>
</br>
<li>
noarchive.
<font color ="#a0c2f0">
Impide que el navegador almacene una copia de nuestra web en caché. Se suele usar <b>si nuestra web tiene cambios constantes o depende de cambios</b> como, por ejemplo, una página web que muestra los cambios de divisa.
</font>
</li>
</br>
<li>
noimageindex.
<font color ="#a0c2f0">
Hace que las imágenes no aparezcan en los motores de búsqueda.
</font>
</li>
</ul>
</font>
<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"title"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo"

</font>
El título de la página. Casi no se usa ya.

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"OG:TITLE"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo"
</font>

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"OG:IMAGE"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo"
</font>

<font color ="#dd9b37">
name =
</font>
<font color ="#54d398">
"OG:DESCRIPTION"
</font>
<font color ="#dd9b37">
content =
</font>
<font color ="#54d398">
"Algo"
</font>

Conforman la preview de la página cuando se enlaza en redes sociales. Se pueden generar usando la página <a href = "https://metatags.io">metatags.io</a>
</font>

<font color ="#b61187"><u><b>

< picture>
</font></u></b>
. Sirve para especificar distintas fuentes para una imagen. Dentro irían tanto las etiquetas 
<font color ="#b61187">
**< source>**
</font>
como la etiqueta
<font color ="#b61187">
**< img>.**
</font>
Seleccionará cuál aplica en base a las [media queries](#mq) que tengamos en la propiedad
<font color ="#dd9b37">
media
</font> del source.
<font color ="#b61187"><u><b>

< source
<font color ="#dd9b37">
media type srcset
</font>>.
</font></u></b>
En 
<font color ="#dd9b37">
media
</font>
ponemos la condición que se tiene que cumplir para que se elija como una [media-query](#mq) o elije un tipo de imagen preferente si el navegador lo soporta con
<font color ="#dd9b37">
type
</font>
, por ejemplo, si le ponemos
<font color ="#54d398">
type/webp
</font>
y el navegador soporta webp, elegirá esa imagen.
</br>
El
<font color ="#dd9b37">
srcset
</font>
es la imagen a elegir.

</font><h2>Atributos importantes</h2>

<font color ="#dd9b37">
<b>title</b>
</font>
<font color ="#a0c2f0">
 crea un recuadro al pasar el ratón por el elemento y muestra el texto que le pongas como valor al atributo. <b>Se suele poner en las imágenes para describirlas y en los enlaces para decir a dónde llevan. También en los campos de los formularios y en los botones.</b>
</br></br>
<font color ="#dd9b37">
<b>class</b>
</font>
le dice al tag que pertenece a una clase de CSS.


<font color ="#dd9b37"><b>

id
</b></font> 
identifica a la propiedad de cara a <b>Javascript</b> o <b>enlaces</b>.

<font color ="#dd9b37"><b>
loading
</b></font>
le dice al recurso cómo cargarlo.
Puede ser
<font color ="#5dffd4">
lazy 
<font color ="#a0c2f0">
o
</font>
 eager.
</font>

<font color ="#dd9b37"><b>
aria-label
</b></font>
es lo que leerá el navegador para ciegos al pulsar sobre el elemento, incluso pudiendo cambiar el texto, aunque principalmente lo usaremos para imágenes, enlaces, etc. <B>TAMBIÉN sirve para formularios</b>

<font color ="#dd9b37"><b>
role
</b></font>
Le informa del rol que cumple el elemento, más que nada de cara a accesibilidad. <a href=https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles>Aquí están todos</a> (obviamente, hay que poner explícitamente aquellos para los que no haya etiqueta).

<font color ="#dd9b37"><b>
aria-valuenow, aria-valuemin, aria-valuemax
</b></font>
indican de cara a la accesibilidad en algo con un role que implique varios elementos, el elemento mínimo, el máximo y el actual (de forma numérica).
</font>

<h2>Tags HTML para referenciar CSS</h2>
<font color ="#a0c2f0">

<font color ="#b61187"><u><b>

< span>
</u></b></font>
Se utiliza para seleccionar partes concretas de nuestro código.

<font color ="#b61187"><u><b>

< div>
</b></u></font>
 Crea un elemento (o un box) vacío. No tiene ningún tipo de semántica.
</font>
</font>

<h1>Listas</h1>

Hay listas ordenadas y sin orden. Se pueden utilizar para menús navegables

<h1>Reglas del buen programador</h1>

<font color ="#a0c2f0">

**Antes** de hacer una página, hacer un [wireframe](#wire). Después, seleccionar una **paleta de colores adecuada.**

Como naming convention, se utiliza una similar a snake case, pero en lugar de barra baja, se utiliza el guión.
</br>

Una web <b>debería ser navegable</b> usando la tecla TAB  y la tecla ENTER de la misma forma que si usáramos ratón por motivos de accesibilidad.

Para <b>comprobar que la web es accesible</b> click derecho -> inspeccionar -> En las pestañas de debug está lighthouse, que se encarga de analizar <b>performance, accesibilidad, mejores prácticas y SEO.</b>
</font>

<font color ="#a0c2f0"> En HTML trabajamos de forma semántica y en CSS de forma estética. Es importante que a nivel de SEO nuestro HTML tenga cada tag cumpliendo el rol que se supone que cumple. Un ejemplo de esto es que premia usar < strong> en lugar de < b> y que no se suele usar < u>, sino que se subraya desde CSS.</font>

<font color ="#a0c2f0">

Cuando pongamos un link en 
<font color ="#54d398">
target = "_blank"
</font> hay que poner también
<font color ="#54d398">
rel = "noopener"
</font>
.Esto bloquea la API de Javascript para Window.Opener, lo que <b>mejora el rendimiento y evita el phishing</b>.
</br>
También se puede usar
<font color ="#54d398">
rel ="noreferrer"
</font>
,que además bloquea los header, es decir, el sitio que se abre no sabe de qué página vino.
</font>

<font color ="#a0c2f0"> Cada párrafo debe describir algo, por ejemplo, en un blog sobre salud un párrafo puede describir los beneficios del ejercicio físico y otro puede hablar de salud mental.

Por tanto, se deben escribir las páginas con la estructura y la semántica en mente. Un ejemplo es esto:
</br>
<img src="imgs/Sin título-1.png"></img>

El atributo 
<font color ="#dd9b37">
title </font> es muy recomendable usarlo para las <b>personas ciegas</b>, pues las páginas leen esta información en voz alta.

En CSS, hay que tener en cuenta que los enlaces deben ser <b>muy reconocibles</b>.

Además, los inputs suelen tener atributos height y width porcentuales para que se adapten al contenedor.

Es importante <b>añadir algo de padding</b> a los elementos por motivos estéticos.

Las <b>sombras</b> son importantes porque añaden realismo, profundidad, crean una <b>jerarquía, destacando elementos</b> y mejoran la legibilidad separando contenido de fondo.

<b>NO </b>usar videos para meter audios en la web, ya que es ineficiente, pues tiene que cargar todo el video para usar solo el audio. Transformar el video en audio externamente mejor.

Si nuestra web tiene que cargar muchos recursos, usar <b>lazy loading</b>.

Si vamos a usar una característica experimental, es **MUY buena práctica** usar una [feature query](#fq).

</font>
<h2>Patrones de diseño</h2>

<font color ="#a0c2f0">

El usuario no debería tener la zona para leer que ocupe toda la pantalla porque cansa a la vista, es mejor tener una zona concreta de pantalla relativamente pequeña (aunque lo suficientemente grande para que se lea bien) y centrada.

</font>

<h3>Holy Grail</h3>

<font color ="#a0c2f0">

Se compone de tres etapas: un menú principal de navegación en el header, una sección main con el contenido de la web y dos columnas en los laterales. Una puede ser por ejemplo otro menú y la otra otras secciones de interés. Abajo tendremos el footer.

El contenido principal está separado por dos barras principales e **idealmente tanto él como las columnas estarán centradas para permitir al usuario una zona pequeña para leer**.

</font>

<h3> Mobile First</h3>

<font color ="#a0c2f0">

Es una forma de pensar las webs en las que priorizamos que el diseño funcione correctamente en móviles y **después** nos centramos en resoluciones más grandes.

Básicamente usamos [media-queries](#mq) para la min-width (en contraposición a **Desktop First**), que se utiliza la max-dith.

Lo bueno que tiene es que nos da el reto de representar todo el contenido en resoluciones pequeñas.

Es el enfoque principal hoy en día para webs generales, pero para webs específicas (por ejemplo, una web para que los médicos gestionen los medicamentes) se hace **Desktop First** porque se presupone que se va a trabajar desde un ordenador.

</font>
<h2>SEO</h2>

<font color ="#a0c2f0">

Es importante que <b>los tags que utilicemos cumplan el propósito para el que están pensados</b>, es decir, que usemos h2 para subtítulos y no para párrafos, etc.

Hay que poner una <b> descripción</b> como metadatos de unos 100 caracteres.

Usar <b>bien las keywords </b>para que se encuentre en los motores de búsqueda.

Poner el <b>nombre del autor (o propietario)</b> en la meta información da confiabilidad.

Usar correctamente las <b>[metatags OG](#meta)</b> para crear previews para las <b>redes sociales</b> ayuda bastante.

Por página web <b>solo se utiliza un h1</b> debe ser lo más descriptivo posible. Se le da importancia a los h2 más que a los h3, etc.

</br>
Usar 
<font color ="#b61187">
<b>< strong></b>
</font>
en lugar de 
<font color ="#b61187">
<b>
b
</b>
</font>.

</br>
En los <b>enlaces</b> poner siempre <b>https://</b> en lugar de <b> solo //</b>.

</br>
En las <b>imágenes</b> que 
<font color ="#dd9b37">
alt
</font>
sea <b>lo más descriptivo posible</b>.

</br>
En las <b>tablas</b> es importante hacer un buen uso de los 
<font color ="#b61187">
< th>
</font>
y separarlas en 
<font color ="#b61187"><u><b>
< thead>
</font></u></b>para los encabezados, osea, los 
<font color ="#b61187">
th
</font>, 
<font color ="#b61187"><u><b>
< tbody>
</font></u></b> para el cuerpo de la tabla, y 
<font color ="#b61187"><u><b>
< tfoot>
</font></u></b>
para los pie de tabla.
</font>
<h2>Accesibilidad</h2>
<font color ="#a0c2f0">

El flujo de una página web es el código HTML lo interpreta el navegador, este crea un DOM (Document Object Model), que es un árbol con las etiquetas HTML (se puede jugar con él en JS) y luego eso se traduce a lo visual.


En cambio, para personas que necesitan accesibilidad, se crea una copia del DOM que interpretan las tecnologías de accesibilidad antes de mostrarse el contenido.
</br>
Para <b>activar las funciones de accesibilidad en el navegador</b> Windows + Ctrl + Enter.

Es importante que para que todo esto funcione correctamente, la página esté diseñada para poder ser usable usando únicamente las teclas TAB y ENTER.

Si modificamos el **scroll**, no se recomienda hacerlo thin, pero si se hace, que sea de un color más llamativo de lo normal.

Para <b>imágenes</b> tendríamos que usar el atributo
<font color ="#dd9b37">
alt
</font>.

Para <b>enlaces</b>, el atributo
<font color ="#dd9b37">
aria-label.
</font>

Si vamos a modificar el **outline**, que sea en **:focus-visible en lugar de en :focus**.
</font>
<h2>Colores</h2>
<font color ="#a0c2f0">

<b>NO</b> se suele usar el negro puro como color.

Los colores pastel se caracterizan por tener <b>poca saturación</b> y <b>mucha iluminación</b>.


Los colores que usemos de <b>fondo</b> tienen que <b>contrastar</b> con los que usemos de <b>letra</b> para que se vea bien la letra. Por ejemplo, un color claro de fondo con uno oscuro de letra. **ESTO ES ESPECIALMENTE IMPORTANTE SI CAMBIAMOS EL SCROLL**, ya que si ponemos el mismo color que el scroll pero desaturado, un daltónico podría no distinguirlo.

Una forma de hacer esto es elegir el mismo color para fondo y letra y hacer uno de los dos más claro o más oscuro para que mantengan el mismo tema.

Otra forma bastante común es usar <b>gradientes</b> con uno de los colores en transparent, pues son bastante utilizados para dar <b>sombreado</b>. 
</br>
Ejemplo: </br>
<img src="imgs/shad.png"></img>
</br>
<b>Para ayudarnos</b> a elegir los colores, podemos buscar un 
<font color ="#54d398">
generador de paletas de colores.
</font>

</br>Una sombra bastante utilizada en diseño es la que tiene 0 de vertical y horizontal, bastante blur, como unos 40px, 0 de longitud y algo de transparencia.
</font>

<h2>Fonts</h2>
<font color ="#a0c2f0">
La tipología 
 <font color = "#fae48b"><b>
sans-serif
</b></font>
es buena para ver los cambios, se notan bastante.
</font>
<h2>Unidades</h2>
<font color ="#a0c2f0">
Las <b>unidades fijas</b> son aquellas que tienen un tamaño determinado que no cambia en función de las dimensiones de la página, por lo que <b>no son adecuadas para diseños responsive, es decir, que se puedan ver en distintos dispositivos</b>.

</br>

Son ideales cuando necesitamos 
<font color ="#5dffd4">
ser precisos.
</font>
Por ejemplo, maquetación de elementos muy específicos o imágenes que tienen que tener un tamaño fijo.

</br>
Los 
<font color ="#54d398">
píxeles
</font>
 se suelen usar para las dimensiones de  
<font color ="#5dffd4">
imágenes, margins y paddings, textos
</font>
.

</br>
Los
<font color ="#54d398">
pt y unidades métricas (cm, etc)
</font>
se usan para diseños pensados para 
<font color ="#5dffd4">
ser impresos
</font>
.</br> Los últimos también se utilizan para 
<font color ="#5dffd4">
apps táctiles
</font>
.

</br>
Las <b>unidades relativas</b> son aquellas que dependen de otro valor. 

</br>Son importantísimas para el 
<font color ="#5dffd4">
[responsive design](#responsive).
</font>

La más común es el 
<font color ="#54d398">
porcentaje
</font>
,que depende del 
<font color ="#5dffd4">
tamaño del contenedor.
</font>
<font color =#ee2727>
</br>
<b>NO</b>
</font> 
se suele usar para 
<font color =#ee2727>
texto
</font>
, ya que usa el porcentaje no lo aplica sobre el tamaño 
del contenedor, sino sobre 
<font color =#ee2727>
el font size del contenedor.
</br>
</font>
<font color =#ee2727><b>
TAMPOCO
</b></font> 
se suele usar en 
<font color =#ee2727>
margins, padding, etc.
</font>

Una bastante utilizada es el 
<font color ="#54d398">
em
</font>, que es el 
<font color =#5dffd4>
el font size del contenedor.
</font>
Si este lo tiene definido, busca recursivamente en los padres.
</br>

El
<font color ="#54d398">
rem
</font>
es el 
<font color ="#5dffd4">
font size del elemento raíz, es decir, del tag html.
</font>

<font color ="#54d398">

vh 
</font>
y
<font color ="#54d398">
vw 
</font> son el 
<font color ="#5dffd4">
porcentaje de la altura y anchura del viewport disponible,
</font>
respectivamente. 
</br>
Se usa bastante para [ventanas modales](#modal), es decir, que ocupan toda la pantalla.

En **dispositivos móviles pueden dar problemas**, ya que no tienen en cuenta menús desplegables del sistema, barras de búsqueda, teclados desplegables, etc. Por lo que se debe usar 
<font color ="#54d398">
**dvh**
</font> o
<font color ="#54d398">
 **dvw,**
 </font>
ya que para PC son indistinguibles y en móviles nos arreglan el problema.

<font color ="#54d398">
vmax 
</font>
y
<font color ="#54d398">
vmin
</font>
son el 
<font color ="#5dffd4">
máximo y mínimo
</font>
entre vh y vw, respectivamente.
</font>

<h2 id ="responsive">Responsive Design</h2>
<font color ="#a0c2f0">

**NO** suele ser buena idea dar valores de 
<font color = "#fae48b">
**height**
</font>
**o** 
<font color = "#fae48b">
**width**
</font>
**fijos.** En su lugar, **se recomienda** dar un 
<font color = "#fae48b">
**max-height**
</font>
**o**
<font color = "#fae48b">
**max-width.**
</font>
De esta forma, al hacer más pequeña la ventana se adaptará a la resolución en lugar de poner un scroll.

Con 
<font color = "#fae48b">
**min-width**
</font>
decimos a partir de qué tamaño **ponemos scroll.**

Usar **flexbox** ayuda mucho a la responsiveness.

Podemos darle un
<font color = "#fae48b">
max-width
</font>
al **flexbox** en lugar de a los elementos para dejar que estos crezcan pero el bloque en sí ocupe un cierto espacio.

Para imágenes pasa algo similar, lo ideal es darle un
<font color = "#fae48b">
max-width
</font>
del **100%** para que cuando haya mucho ancho disponible no ocupe toda la pantalla haciéndose demasiado grande, sino que ocupe toda la pantalla **cuando haya poco espacio.** El 
<font color = "#fae48b">
height
</font>
se suele poner en 
<font color ="#5dffd4">
auto.
</font>

Podemos hacer **LODS** con el atributo
<font color = "#fae48b">
srcset
</font>,
el cual recibe las imágenes a cargar y la resolución a la que se aplica cada imagen. Cada set se separa por comas. Un ejemplo de set pudede ser
<font color ="#5dffd4">
imagen.png 300w
</font>
,que significa que nos va a cargar la imagen cuando el ancho sea menor de 300 píxeles. 

Complementariamente, podemos usar el atributo
<font color = "#fae48b">
sizes
</font>, que es una [media-query](#mq) que le dice cuántos píxeles de ancho tiene que tener la imagen dependiendo de la
<font color = "#fae48b">
max-width
</font>.
Un ejemplo de la sintaxis es el siguiente:
</br>
<font color ="#5dffd4">
(max-width: 400px) 300px, (max-width:600px) 500px, 900px
</font>
</br>
Esto hace que en pantallas de hasta 400 píxeles de ancho, carga la imagen con un ancho más cercano a 300 píxeles, para pantallas de hasta 600, la imagen de 500 y para el resto la de 900.

**Una alternativa a todo esto es usar** 
<font color ="#b61187">
**< picture>**
</font>
**y**
<font color ="#b61187">
**< source>.**
</font>

Para **vídeos**, se meten en un conenedor al que se le da la propiedad
<font color = "#fae48b">
aspect-ratio
</font>
con un valor de<font color ="#5dffd4">
16/9.
</font>
y un
<font color = "#fae48b">
max-width
</font>
del 100%.
</br>
Al video se le puede dar un 
<font color = "#fae48b">
width
</font>
o un
<font color = "#fae48b">
max-width
</font>
del 100%.


</font>
<h1> Hosting</h1>
<font color ="#a0c2f0">
Se trata de reservar espacio en la web para nuestra página.
</font>
<h2>Tipos de hosting</h2>
<h3>Hosting compartido</h3>
<font color ="#a0c2f0">

Un solo servidor tiene muchas páginas web distintas y comparten todos los recursos, por lo que **el rendimiento depende** del resto de webs alojadas, por lo que **puede haber fluctuaciones en el rendimiento**. Suelen incluir un panel de control para gestionar el sitio web y el sistema de correo institucional entre otras cosas. **Salvo por esto, está gestionado por el proveedor.**

Es la opción más **económica**, por lo que es ideal para tiendas pequeñas, páginas personales o en general **páginas con poco tráfico.**
</font>
<h3>VPS</h3>
<font color ="#a0c2f0">

Virtual Private Server. El servidor se divide para cada página web de forma similar a las máquinas virtuales. Si bien comparten el mismo hardware, actúan como servidores diferentes. Cada uno tiene unos recursos fijos, por lo que **el rendimiento NO depende del resto de webs alojadas.**

Es **algo más caro**, por lo que es ideal para empresas medianas, con algo más de tráfico o que requieran ejecutar aplicaciones un poco más específicas.

</font>
<h3>Hosting dedicado</h3>
<font color ="#a0c2f0">

Un servidor exclusivo para una página web, por lo que dispone de todos los recursos del mismo.

Es la **opción más cara**, pero es necesario para empresas grandes con mucho tráfico y que requieran mucho mantenimiento.
</font>

<h3>Cloud hosting</h3>
<font color ="#a0c2f0">

Distribuye el tráfico a través de una red de servidores, lo que hace que sea más **escalable y flexible.**

Ideal para cosas que no se sabe bien el tráfico porque tiene épocas en las que aumenta mucho, como tiendas con eventos como el black friday.
</font>
<h3>Hosting especializado</h3>
<font color ="#a0c2f0">

Optimizado para cosas específicas.
</font>
<h2>Qué tener en cuenta a la hora de contratar un servicio</h2>
<font color ="#a0c2f0">

Suelen tener un [**dominio**](#dominio) gratuito, pero además, debemos buscar:
<ul>

  <li>
  
  **Soporte 24/7**. Que tenga un equipo que se encargue de solucionar nuestros problemas.
  </li>
  <li>

  **Alto rendimiento.** Con centros de datos alrededor del mundo, con buen tiempo de carga.
  </li>
  <li>

  **Confiabilidad.** Que sepamos que nuestra página web vaya a estar disponible la mayoría del tiempo (que no les salgan demasiados errores 500)
  </li>
  <li>

  **Almacenamiento en estado sólido.** Es más rápido y dura más que los tradicionales. **NMVe es más rápido que SSD.**
  </li>

  <li>

  **Diversidad de planes y flexibilidad.** Que podamos elegir e ir escalando y desescalando fácilmente.
  </li>

  <li>

  **Posibilidad de backups automáticos.** 
  </li>
  <li>

  **Fácil de usar.**
  </li>
</ul>

Hostinger puede ser una buena opción, pues además tiene correos institucionales gratis, [certificado SSL](#SSL) ilimitado y garantía de devolución.

El hecho de que tenga una IP dedicada es bueno si queremos desarrollar APIs, pues se suelen conectar a través de IPs, por lo que si va cambiando todo el tiempo no es fácil de mantener.

Otra ventaja de esto es que si tenemos una IP que se comparte con varios desconocidos, si éstos hacen spam, los correos que mandemos nosotros a través del host compartido los va a meter también en la carpeta de spam de nuestros potenciales clientes.
</font>
<h2>FTP</h2>
<font color ="#a0c2f0">

Para gestionar archivos nos descargamos el cliente de **Filezilla.** (Con la primera opción es suficiente.)

En la parte de arriba rellenamos los datos del servidor, nombre, etc, que suelen estar en un apartado de nuestro proveedor de host y nos conectamos.
</font>
