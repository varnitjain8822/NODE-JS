const express = require('express');
const storeRouter = express.Router(); // single router for all store routes

const storeController = require('../controllers/storecontroller');

// Home pages
storeRouter.get('/', storeController.gethomepage);  
storeRouter.get('/homepage', storeController.gethomepage);  
storeRouter.get('/homelist', storeController.gethomelist);  
storeRouter.get('/booking', storeController.getbooking);  
storeRouter.get('/favourite', storeController.getfavourite);

// Form page
storeRouter.get('/form', storeController.formController);
storeRouter.post('/form', storeController.formSuccessController);

module.exports = storeRouter;
