const express  = require("express");
const app      = express();
const { MongoClient } = require("mongodb");

const PORT = 8080;


app.get("/", (req, res, next) => {
    res.send("🏡 home");
});

async function main() {
        const URI = "mongodb+srv://USER:PASSWORD@cluster0.06ptj.mongodb.net/?retryWrites=true&w=majority";
    const mongo_client = new MongoClient(URI);
    try {
        await mongo_client.connect();
        await listDatabases(mongo_client);
    } catch (err) {
        console.error(err);
    }
    finally {
        await mongo_client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` \u2022 ${db.name}`));
};
 

main().catch(console.error);


app.listen(PORT);
