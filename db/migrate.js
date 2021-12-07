/**
 * Script para realizar el setup de
 * las dos colecciones:
 *  boxes
 *  meeseeks
 * de la bbdd para los tests:
 *  pushmees_pullmess_test
 */

const { MongoClient } = require("mongodb");

// colecciones como array de docs json
const meeseeksCollection = require('./meeseeksCollection');
const boxesCollection = require('./boxesCollection');

const uri =
    `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0-ud3ms.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db('pushmees_pullmess_test');
        const boxes = database.collection('boxes');
        const meeseeks = database.collection('meeseeks');

        let numBoxesDocs = await boxes.estimatedDocumentCount();
        if (numBoxesDocs > 0) {
            await boxes.drop().then((successMessage) => {
                console.log("Droped boxes " + successMessage);
            })
        }

        let numMeeseeksDocs = await meeseeks.estimatedDocumentCount();
        if (numMeeseeksDocs > 0) {
            await meeseeks.drop().then((successMessage) => {
                console.log("Droped meeseeks " + successMessage);
            })
        }

        let result = await meeseeks.insertMany(meeseeksCollection);
        console.log(`${result.insertedCount} == 20 meeseeks inserted into reality`);

        result = await boxes.insertMany(boxesCollection);
        console.log(`${result.insertedCount} == 3 boxes created`);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);