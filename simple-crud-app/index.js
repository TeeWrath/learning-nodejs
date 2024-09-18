const express = require('express')
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send("Response sent from subbu's API");
})

mongoose.connect("mongodb+srv://subroto2003:eo0uD2JDuHu5BnDH@backenddb.sgeaf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected DB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
}).catch(() => {
    console.log("Connection failed");
})