const express = require('express');
const hostrouter = express.Router();

const hostcontroller = require('../controllers/hostcontroller');

// Home page route
hostrouter.get('/hosthomes', hostcontroller.gethomepage);
hostrouter.get('/host/edit/:userid',hostcontroller.edithome);
hostrouter.post('/host/editing',hostcontroller.postedithome); 
hostrouter.post('/host/delete-home/:homeId',hostcontroller.postDeleteHome);


module.exports = hostrouter;
