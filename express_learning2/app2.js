const express = require('express');
const app = express();

const create = require('./first');

const port = 3000;

app.get("/",(req,res,next) => {
    console.log('First Middleware');
    next();
});


app.use("/xyz",(req,res,next) => {
    console.log('Second Middleware');
    next();
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
