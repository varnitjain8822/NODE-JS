const express = require('express'); 
const { registeredUsers } = require('./form');

const userRouter = express.Router();
const { getHome } = require('../controllers/home');
userRouter.get('/', getHome);


module.exports = userRouter;
