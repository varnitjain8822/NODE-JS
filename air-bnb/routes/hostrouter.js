const express = require('express');
const hostrouter = express.Router(); // single router for all store routes

const hostcontroller = require('../controllers/hostcontroller');

// Home pages
hostrouter.get('/hosthomes', hostcontroller.gethomepage);  
module.exports = hostrouter;
