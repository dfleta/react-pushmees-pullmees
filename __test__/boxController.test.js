
/**
 * Ejecutar los test desde terminal
 * de Linux, por aquello de las 
 * variables de entorno
 */

const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

const db = require('../db/mongoConfig');

/**
 * SCOPING
 * 
 * SETUP y TEARDOWN
 */ 

describe("Box Controller", () => {

    afterAll( async () => {
        // cierro la conexión a mongo
        // await app.get('db').close();
        db.disconnect();
    })

    // testing de codigo asincrono con promesas
    test("Test getBox /box/:owner /", () => {
        let owner = 'jerry';

        // sintaxis alternativa tipo supertest https://www.npmjs.com/package/supertest
        // uso la de jest con codigo asincrono con promesas
        return request(app)
                .get(`/box/${owner}`)
                .then(res => {
                    // Received: "application/json; charset=utf-8"
                    expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveProperty('_id', 'name', 'mrMeeseeks');
                    expect(res.body.name).toEqual(expect.stringMatching("jerry"));
                    expect(res.body._id).not.toBeFalsy();
                    expect(res.body.mrMeeseeks).not.toBeFalsy();
                })
    });

    test("Test getAllBoxes /box/", () => {
          return request(app)
                .get('/box/')
                .then(res => {
                    expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveLength(1);
                    expect(res.body[0]).toHaveProperty('_id', 'name', 'mrMeeseeks');
                    expect(res.body[0]._id).not.toBeFalsy();
                    expect(res.body[0].mrMeeseeks).not.toBeFalsy();
                });
    });

      // lo guay seria tener dos bases de datos
      // una para prod y otra para test como en quarkus
      // y arrancar segun var env
      // sequelize tiene un script para migrar 
      // y resetear la bbdd
      // mongo tb?
      // en teoria eso lo deberia hacer mongoose
      // que no tiene una cli como sequelize y por tanto
      // no puedo lanzarl con npm script pretest y migrate

});