APP REACT
=========

## Web pública

https://pushmees-pullmees.herokuapp.com/ 


Instrucciones en:

https://pushmees-pullmees.herokuapp.com/api


 - `pressButton` trae un meeseeks a la existencia al DOM y a MongoAtlas.
 - Evento `onClick` sobre un mr meeseeks se lo lleva del DOM y de la base de datos.


Se trata de programar este caso de uso:

[![Cómo invocar a un Mr Meeseeks](./mrmeeseeks_sequence.png)](https://www.youtube.com/watch?v=qUYvIAP3qQk&t=3s)


## Componentes react

[components](./client/src/components/)


## Objetivos

### 1. Inclusión de una api externa a decidir, aunque pueden ser ficheros json estáticos (strapi)

Ha añadido una app react a una API REST que ya tenía construida y dockerizada en node + express. 

Para desplegar la app react más la API REST en express he desplegado el proyecto en Heroku.

En este repo no está la configuración final con el setup particular para el despliegue en Heroku. Aquí se presenta la configuración para ejecutar la app react (puerto 3000) atacando la aplicación node corriendo en `localhost:5000/`.

### 2. Segmentada en componentes reutilizables + al menos 3 componentes que interactúen entre si + el uso de un state management a nivel de aplicación.

El componente react `APP` consume el componente `Box` que a su vez presenta el componente `Reality` al que se añaden los componentes `Meeseeks`.

El componente `Box` se crea a partir de un `fetch GET` al endpoint `/box/jerry`) de la API REST que devuelve la caja de Jerry almacenada en la base de datos en MongoAtlas.

El componente `Box` con el evento `onClick` en el boton `pressButton` crea un nuevo meeseeks en la base de datos con un `fetch` al endpoint `/box/pressButton`. La API REST le devuelve el meeseeks creado y el componente `Box` lo añade al estado del hook.

Finalmente, `Box` le pasa al componente react `Reality` **su estado** `meeseeks` con todos los meeseeks añadidos, mediante el paso de parámetros `value` de los hooks /componentes.

`Reality` se encarga de actualizar con los componentes react `Meeseeks` añadidos o eliminados, mediante un `map` sobre el parámetro `props` de los hooks /componentes.

El componente `Meeseeks` con el evento `onClick` elimina el meeseek de la base de datos a través del endpoint `/reality/explode/${_id}` obteniendo el **id del estado del componente vía hook**.

El componente `Meeseeks` haciendo uso de su propiedad de estado `deleted` decide si se pinta o no y el componente `Reality` actualiza el DOM.


### 3. Minimizando el uso de librerías externas.

He usado la api `fetch` de Javascript, ni siquiera axios u otra similar.

### 4. Desplegada en la nube, ya sea en github pages, en vercel o en netlify.

Desplegado en Heroku.

En este repo no está la configuración final con el setup particular para el despliegue en Heroku.

Aquí se presenta la configuración para ejecutar la app react (puerto 3000) atacando la aplicación node corriendo en `localhost:5000/`.


### 5. Con framework css a elección propia.

Para hacer un mísero `flexbox` ;) no he incluido una dependencia más al proyecto. 

Iba a usar Tailwind y estuve aprendiendo a usarla, pero he decidido reutilizar los estilos para `flexbox` que proporciona el _boilerplate_ de React ;)
