const express = require('express'); 
const { registeredUsers } = require('./form');

const userRouter = express.Router();


userRouter.get('/', (req, res) => {
  res.render('home', { users: registeredUsers });
});

module.exports = userRouter;
