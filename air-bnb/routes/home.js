const express = require('express');
const userRouter = express.Router();
const { getHome } = require('../controllers/home');

userRouter.get('/', getHome); // ✅ no parentheses

module.exports = userRouter;
