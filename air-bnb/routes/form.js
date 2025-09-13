const express = require('express');
const formRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathutil');
const  {formController, formSuccessController} = require('../controllers/form');

const registeredUsers = [];

formRouter.get('/form', formController);
formRouter.post("/form", formSuccessController);


exports.formRouter = formRouter;
exports.registeredUsers = registeredUsers;
