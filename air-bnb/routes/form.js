const express = require('express');
const formRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathutil');

formRouter.get("/form", (req, res) => {
   res.render('forms', {pagetitle:'room booking'});
});

const registeredUsers = [];

formRouter.post("/form", (req, res) => {
  console.log(req.body);
  res.render('formsucess', {pagetitle:'form success'});
  registeredUsers.push({name: req.body.name, room: req.body.room, price: req.body.price});
});


exports.formRouter = formRouter;
exports.registeredUsers = registeredUsers;