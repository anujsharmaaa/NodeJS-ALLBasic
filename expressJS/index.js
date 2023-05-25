const express = require("express");
const myApp  = express();

myApp.get( "/" , (req, res) => {
    res.send("hey I am Anuj");
});

myApp.listen(8000 , () => {
    console.log("listening the port at localhost:8000");
});
