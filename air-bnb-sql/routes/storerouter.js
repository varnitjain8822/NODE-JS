const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storecontroller');

// Home pages
storeRouter.get('/', storeController.gethomepage);  
storeRouter.get('/homepage', storeController.gethomepage);  
storeRouter.get('/homelist', storeController.gethomelist);  
storeRouter.get('/booking', storeController.getbooking);  
storeRouter.get('/details/:userid', storeController.getdetails);

// Favourite routes
storeRouter.post('/favourite', storeController.postAddToFavourite);  // Add to favourites
storeRouter.get('/favourite', storeController.getfavourite);         // Show favourites page

// Form page
storeRouter.get('/form', storeController.formController);
storeRouter.post('/form', storeController.formSuccessController);

module.exports = storeRouter;
