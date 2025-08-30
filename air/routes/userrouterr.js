const express = require('express');
const userRouter = express.Router();


userRouter.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to homepage</h1>
    <a href="/form">click to submit the form</a>
  `);
});

module.exports = userRouter;