const express  = require("express");
const app      = express();
const { MongoClient } = require("mongodb");

const PORT = 8080;


app.get("/", (req, res, next) => {
    res.send("🏡 home");
});

async function main() {
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




/*
const express  = require("express");
const app      = express();
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = 8080;


app.get("/", (req, res, next) => {
    res.send("🏡 home");
});

// const PW  = "";
// Connect to MongoDB
// const connection_str = `mongodb+srv://kenny:${PW}@cluster0.06ptj.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Connected to MongoDB!")
);


app.listen(PORT);
*/
