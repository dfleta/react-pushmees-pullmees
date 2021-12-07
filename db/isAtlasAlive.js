/**
 * Ejecutar en terminal:
 * $ node ./db/isAtlasAlive.js
 * 
 * Deben observarse las dos queries
 */

const { MongoClient } = require("mongodb");

const uri =
    `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0-ud3ms.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db('pushmees_pullmess_test');
        const boxes = database.collection('boxes');
        const meeseeks = database.collection('meeseeks');

        // Query de la box de jerry
        const query = {
            'name': 'jerry\'s box'
        }
        const box = await boxes.findOne(query);
        // query de un meeseeks
        const mrmees = await meeseeks.findOne();

        console.log("I still alive!!")
        console.log(JSON.stringify(box, null, 2));
        console.log(JSON.stringify(mrmees, null, 2));

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);