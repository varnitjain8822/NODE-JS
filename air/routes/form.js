const express = require('express');
const formRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathutil');

formRouter.get("/form", (req, res) => {
  res.sendFile(path.join (rootDir, 'views', 'forms.html'));
});


formRouter.post("/form", (req, res) => {
  res.send(`
    <h1>Form submitted successfully</h1>
  `);
});

module.exports = formRouter;
