
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

describe("Box Routes", () => {

    afterAll( async () => {
        // cierro la conexión a mongo
        // await app.get('db').close();
        db.disconnect();
    })

    // testing de codigo asincrono con promesas
    test("Test getBox /box/:owner /", () => {
        // sintaxis alternativa con supertest
        // Uso la de jest con codigo asincrono con promesas
        let owner = 'jerry';
        return request(app)
                .get(`/box/${owner}`)
                .then(res => {
                    // Received: "application/json; charset=utf-8"
                    expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveProperty('_id', 'name', 'mrMeeseeks');
                    expect(res.body.name).toEqual(expect.stringMatching('jerry'));
                    expect(res.body._id).not.toBeFalsy();
                    expect(res.body.mrMeeseeks).not.toBeFalsy();
                    expect(res.body.mrMeeseeks).toBe('61ad67901dddd599e1d31e9d');
                })
    });

    test("Test getAllBoxes /box/", () => {
          return request(app)
                .get('/box/')
                .then(res => {
                    expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveLength(3);
                    expect(res.body[0]).toHaveProperty('_id', 'name', 'mrMeeseeks');
                    expect(res.body[0]._id).not.toBeFalsy();
                    expect(res.body[0].mrMeeseeks).not.toBeFalsy();
                });
    });

    test("Test pressButton /box/pressbutton", () => {
        return request(app)
              .get('/box/pressbutton')
              .then(res => {
                  expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                  expect(res.statusCode).toEqual(200);
                  expect(res.body).toHaveProperty('_id', 'messageOnCreate', 'messageOnRequest');
                  expect(res.body._id).not.toBeFalsy();
                  expect(res.body.messageOnRequest).toHaveLength(3);
                  expect(res.body.messageOnRequest[0]).toEqual(expect.stringMatching('Oooh yeah! Can do!'))
              });
    });

    test("Test delete box /box/delete/:owner", () => {
        let owner = "summer";
        return request(app)
              .get(`/box/delete/${owner}`)
              .then(res => {
                  expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
                  expect(res.statusCode).toEqual(200);
                  expect(res.body).toHaveProperty('_id', 'messageOnCreate', 'messageOnRequest');
                  expect(res.body._id).toBe('61b0f62a88d0be4b41bc1003');
                  expect(res.body.mrMeeseeks).toBe('61aeab0c01ea7ea815ca8259');
              });
    }, 10000); // setTimeOut
});