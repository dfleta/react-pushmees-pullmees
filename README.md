
# Express

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment


## 1. Setting up a Node development environment


El código de esta parte del tutorial está en el directorio: `node_project_setup`

### Instalar Node

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Testing your Nodejs and NPM installation

```
> node -v
v16.13.0

> npm -v
8.1.0
```

Copy the following text into a file named hellonode.js. This uses pure Node features (nothing from Express) and some ES6 syntax:

```js
//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```


Start the server by navigating into the same directory as your hellonode.js file in your command prompt. Navigate to the URL http://127.0.0.1:3000 

```
>node hellonode.js
Server running at http://127.0.0.1:3000/
```

### Using NPM - installing Express

Use the npm init command to create a package.json file for your application.
The initial entry point file (by default this is index.js)

package.json

```js
{
  "name": "pushmees_pullmees",
  "version": "1.0.0",
  "description": "students project to learn Express",
  "main": "index.js",                                   <======= entrypoint
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dfleta/pushmees_pullmees.git"
  },
  "keywords": [
    "Express",
    "node",
    "API",
    "REST"
  ],
  "author": "David Gelpi",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/dfleta/pushmees_pullmees/issues"
  },
  "homepage": "https://github.com/dfleta/pushmees_pullmees#readme"
}
```

```
> npm install express

  "dependencies": {
    "express": "^4.17.1"        <====  
  },  
```

Creamos el entrypoint `index.js`

y copiamos este código:

```js
const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
```

Lanzamos la app y navigate to the URL (http://127.0.0.1:8000/):

```
> node index.js
Example app listening on port 8000
```

#### Development dependencies

If a dependency is only used during development, you should instead save it as a "development dependency" (so that your package users don't have to install it in production). 

> npm install eslint --save-dev

```js
  "devDependencies": {
    "eslint": "^8.3.0"
  }
```

#### Running tasks

You can define named scripts in your package.json files and call NPM to execute them with the run-script command. This approach is commonly used to automate running tests and parts of the development or build toolchain.

to define a script to run the eslint development dependency that we specified in the previous section

```js
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

```
npm run-script lint
# OR (using the alias)
npm run lint
```


### Installing the Express Application Generator

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

**Es necesario crear un nuevo directorio donde situar el projecto.**

Directorio `pushmees_pullmees`

The Express Application Generator tool generates an Express application "skeleton". Install the generator using NPM as shown.

You may need to prefix this line with sudo on Ubuntu or macOS. The -g flag installs the tool globally so that you can call it from anywhere (aun o disponemos de package.json en este proyecto)

> npm install express-generator -g

Si es necesario actualizar npm por las vulnerabilidades de la versión anterior:

> npm install -g npm@8.1.4


If you're using NodeJS version > 8.2.0 or latest, you can skip the installation and run express-generator with npx:

> npx express-generator helloworld


Comprobamos:

> express --version
4.16.1

Leer las opciones para configurar el proyecto

```
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
  ```


The Express Application Generator allows you to configure a number of popular view/templating engines, including EJS, Hbs, Pug (Jade), Twig, and Vash, although it chooses Jade by default if you don't specify a view option.

```
> express pushmees_pullmees --view=pug

   create : pushmees_pullmees/
   create : pushmees_pullmees/public/
   create : pushmees_pullmees/public/javascripts/
   create : pushmees_pullmees/public/images/
   create : pushmees_pullmees/public/stylesheets/
   create : pushmees_pullmees/public/stylesheets/style.css
   create : pushmees_pullmees/routes/
   create : pushmees_pullmees/routes/index.js
   create : pushmees_pullmees/routes/users.js
   create : pushmees_pullmees/views/
   create : pushmees_pullmees/views/error.pug
   create : pushmees_pullmees/views/index.pug
   create : pushmees_pullmees/views/layout.pug
   create : pushmees_pullmees/app.js
   create : pushmees_pullmees/package.json
   create : pushmees_pullmees/bin/
   create : pushmees_pullmees/bin/www

   change directory:
     $ cd pushmees_pullmees

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=pushmees-pullmees:* npm start
```

Crea el directorio pushmess_pullmess y el proyecto dentro.

### Running the skeleton website

Instalamos las dependencias del proyecto indicadas en el package.json:

```js
"dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  }
```

```
cd express-locallibrary-tutorial
npm install
```

Recibimos varios avisos severos de vulnerabilidades (la de pug la más alta) y las corregimos ejecutando tantes veces como sea necesario el comando `npm audit` para actualizar a las versiones adecuadas:

> npm audit fix --force


Run the app

    On macOS or Linux, use this command:

    DEBUG=express-locallibrary-tutorial:* npm start

    On the Windows CMD prompt, use this command:

    SET DEBUG=express-locallibrary-tutorial:* & npm start

    On Windows Powershell, use this command:

    $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start


Si el puerto 3000 estuviese ocupado:

https://code-examples.net/es/q/8e9ca3

```
$ lsof -t -i:3000
4587
18798
$ sudo kill -9 18798
```

```
$ DEBUG=pushmees_pullmees:* npm start

> pushmees-pullmees@0.0.0 start
> node ./bin/www
```

En http://localhost:3000/ está la app.


Specifying the DEBUG variable as shown enables console logging/debugging. Al visitar el sitio, en consola recibo:

    GET / 200 239.662 ms - 170
    GET /stylesheets/style.css 200 10.206 ms - 111


Ahora invocaremos arrancar la app con debugging desde los scripts de npm. 

### Enable server restart on file changes

A convenient tool for this purpose is nodemon. This is usually installed globally (as it is a "tool"), but here we'll install and use it locally as a developer dependency, so that any developers working with the project get it automatically when they install the application. Use the following command in the root directory for the skeleton project:

> npm install --save-dev nodemon

Y en el `package.json`
```js
"devDependencies": {
    "nodemon": "^2.0.15"    <== añadida dependencia desarrollo
}
```

Because the tool isn't installed globally we can't launch it from the command line (unless we add it to the path) but we can call it from an NPM script because NPM knows all about the installed packages.

The devstart and serverstart scripts can be used to start the same ./bin/www file with nodemon rather than node:

```js
"scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=pushmees_pullmeesh:* npm run devstart"  <== invocamos otro script npm
},
```

    > npm run serverstart

    pushmees-pullmees@0.0.0 serverstart
    DEBUG=pushmees_pullmeesh:* npm run devstart


    pushmees-pullmees@0.0.0 devstart
    nodemon ./bin/www

    [nodemon] 2.0.15
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node ./bin/www`         <=== invocando al script npm devstart => nodemon


### The generated project


Aquí el repo del proyecto ejemplo de Mozilla MZDN:

https://github.com/mdn/express-locallibrary-tutorial 


#### Directory structure

 The package.json file defines the application dependencies and other information. It also defines a startup script that will call the application **entry point**, the JavaScript file /bin/www. This sets up some of the application error handling and then **loads app.js** to do the rest of the work. The **app routes are stored in separate modules under the routes/ directory**. The **templates** are stored under the /views directory. 
 

    express-locallibrary-tutorial
        app.js
        /bin
            www
        package.json
        package-lock.json
        /node_modules
            [about 6700 subdirectories and files]
        /public
            /images
            /javascripts
            /stylesheets
                style.css
        /routes
            index.js
            users.js
        /views
            error.pug
            index.pug
            layout.pug

#### www file

The file /bin/www is the application entry point! 
The very first thing this does is require() the "real" application entry point (app.js, in the project root) that sets up and returns the express() application object.

```js
    #!/usr/bin/env node

    /**
      * Module dependencies.
    */

    var app = require('../app');
```

The remainder of the code in this file sets up a node HTTP server with app set to a specific port (defined in an environment variable or 3000 if the variable isn't defined), and starts listening and reporting server errors and connections. 

#### app.js

This file creates an express application object (named app, by convention), sets up the application with various settings and middleware, and then exports the app from the module. 

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

Back in the www entry point file above, it is this module.exports object that is supplied to the caller when this file is imported.

#### Routes directory

Then we require() modules from our routes directory. These modules/files contain code for handling particular sets of related "routes" (URL paths)

```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```

#### Views Engine

Next, we create the app object using our imported express module, and then use it to set up the view (template) engine. There are two parts to setting up the engine. First, we set the 'views' value to specify the folder where the templates will be stored (in this case the subfolder /views). Then we set the 'view engine' value to specify the template library (in this case "pug").

```js
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

#### MIDDLEWARE

The next set of functions call app.use() to add the middleware libraries into the request handling chain. In addition to the 3rd party libraries we imported previously, we use the express.static middleware to get Express to serve all the static files in the /public directory in the project root. 

```js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
```

Now that all the other middleware is set up, we add our (previously imported) route-handling code to the request handling chain. The imported code will define particular routes for the different parts of the site:

```js
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

Note: The paths specified above ('/' and '/users') are treated as a prefix to routes defined in the imported files. So for example, if the imported users module defines a route for /profile, you would access that route at /users/profile. We'll talk more about routes in a later article.

...

#### Routes

The route file /routes/users.js is shown below (route files share a similar structure, so we don't need to also show index.js). 
First, it loads the express module and uses it to get an express.Router object. Then it specifies a route on that object and lastly exports the router from the module (this is what allows the file to be imported into app.js).

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

### Control de versiones

El "oficial" de github:

https://github.com/github/gitignore/blob/master/Node.gitignore

El directorio `node_modules` es el que obviamente queda sin seguimiento.


## Conexión a BBDD

### Install Mongoose

Install Mongoose (and its dependencies) and add it to your `package.json` file:

> npm install mongoose

Open `/app.js` (in the root of your project) and copy the following text below where you declare the Express application object (after the line var app = express();). 

Esta sintaxis es de Node.

    //Set up mongoose connection
    var mongoose = require('mongoose');
    var mongoDB = 'insert_your_database_url_here';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));


### Defining the Schema(s)

We will define a separate module for each model. 
Start by creating a folder for our models in the project root (/models) and then create separate files for each of the models. Example:

/express-locallibrary-tutorial  //the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js

Definimos el schema de mrmeeseeks. 

Echarle un ojo a los **tipos** de los schemas:

https://mongoosejs.com/docs/schematypes.html 

Aquí los **validators** para validar los datos definidos en el schema:

https://mongoosejs.com/docs/validation.html

Validation is middleware. Mongoose registers validation as a pre('save') hook on every schema by default.

Sólo hay built-in validators para `Number` y `String`

## Seguridad

EnvironmentVariables in Ubuntu:

https://help.ubuntu.com/community/EnvironmentVariables

How to read environment variables from Node.js

https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs

template literals:

https://novatfe.com/es/evento/20-que-es-la-impresion-en-3d-y-sus-aplicaciones

Encrypted password in `.env` or environment variables: 

https://stackoverflow.com/questions/65564126/encrypt-passwords-stored-in-environment-variables

### Solución I

> $ sudo pico /etc/profile.d/development_env.sh
> export ATLAS_USER="user"
> export ATLAS_PASSWORD="password"

Cerrar la sesión y volver a entrar para forzar la carga de las variables de entorno.

Usar el paquete `process` de `node` para acceder al entorno y leer las variables en `app.js`

> var mongoDB = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0-ud3ms.mongodb.net/pushmees_pullmees?retryWrites=true&w=majority`;

De este modo, al menos puedo compartir con el alumnado el proyecto para que cambien 3 parámetros y a correr, y evito gestionar 2 ramas en el repo sólo para este fin.

### Solucion II

Fichero local .env con user y password encriptado. Sólo para desarrollo local. Si alguien accede al repo, lee la clave de encriptación... así que no se gana nada.


> require('dotenv').config()

> var CryptoJS = require("crypto-js");
> var data = "password";
>var encrypted = CryptoJS.AES.encrypt(data, "my-secret");
> console.log(encrypted.toString());


Aquí soluciones para la vida real:

https://stackoverflow.com/questions/65564126/encrypt-passwords-stored-in-environment-variables


## Testing

supertest

https://www.npmjs.com/package/supertest
 
testing express framework with jest 

https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

> npm install jest supertest --save-dev


testing asyncronous code with promises

https://jestjs.io/docs/asynchronous


Testing con Jest y supertest, artículo y repo con ejemplos:

https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

https://github.com/nedssoft/sequelize-with-postgres-tutorial/blob/master/tests/routes.test.js


Vídeo: How to test MongoDB related functionality with Jest in TypeScript

https://www.youtube.com/watch?v=4U1DXyZUw34


Connect to a MongoDB Database Using Node.js

https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

Instalar cross-env para desde linea de comandos npm fijar la variable de entorno `NODE_ENV` en `package.json`:

> "test": "cross-env NODE_ENV=test jest --runInBand --detectOpenHandles"

NODE_ENV=development
NODE_ENV=production
NODE_ENV=test

> npm install cross-env --save-dev


Al correr los test ejecutar la opción de `jest --detectOpenHandles` para averiguar si hay conexiones o tareas asíncronas por manejar que impidan la salida de los tests:

> "test": "cross-env NODE_ENV=test jest --runInBand --detectOpenHandles


### Setup de la bbdd MongoDB

https://docs.mongodb.com/drivers/node/current/quick-start/

 lo guay seria tener dos bases de datos
 una para prod y otra para test como en quarkus
 y arrancar segun var env
 sequelize tiene un script para migrar 
 y resetear la bbdd
 mongo tb?
 en teoria eso lo deberia hacer mongoose
 que no tiene una cli como sequelize y por tanto
 no puedo lanzarl con npm script pretest y migrate

## GraphQL


https://dev.to/nedsoft/build-api-with-graphql-node-js-and-sequelize-5e8e


## Docker

Dockerfile

```Dockerfile
FROM node:lts-alpine
ENV NODE_ENV=production
ENV ATLAS_USER="ollivanders"
ENV ATLAS_PASSWORD="ollivanders"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
```

Creo la imagen:

`$ docker build -t push_mees .`

Creo el contenedor y ejecutarlo:

`$ docker run -dp 3000:3000 push_mees:latest`

Compruebo si `COPY` y `dockerignore` han hecho su trabajo y copiado sólo los componentes de la app:

```sh
$ docker exec -it optimistic_kapitsa sh
/usr/src/app $ ls
app.js             controllers        domain             package-lock.json  public             views
bin                db                 models             package.json       routes
```

Para el contenedor:

`$ docker stop name` 

Ponlo en marcha:

`$ docker stop name`
