const Favourite = require('../models/favourites');
const Home = require('../models/model'); 

// Rendering home page
exports.gethomepage = (req, res) => {
  Home.fetchAll((registeredUsers) => {
    res.render('store/home-page', { 
      users: registeredUsers, 
      title: 'Home-page', 
      currentpage: 'home-page'  
    });
  }); 
};

// Show details of a single home
exports.getdetails = (req, res) => {
  const userId = req.params.userid;
  Home.findbyid(userId, (home) => {
    if (!home) {
      return res.redirect('/homelist');
    }
    res.render('store/home-detail', {
      home: home, 
      title: 'Home Details', 
      currentpage: 'home-detail'  
    });
  });
};

// Add to favourites
exports.postAddToFavourite = (req, res) => {
  console.log("POST /favourite route hit");
  console.log("req.body:", req.body);

  const homeId = req.body.id;

  Favourite.addToFavourite(homeId, (error) => {
    if (error) {
      console.error("Error while marking favourite:", error);
      return res.status(500).send("Could not add to favourites");
    }
    // redirect back to favourites page after adding
    res.redirect('/favourite');
  });
};

// Get favourites
exports.getfavourite = (req, res) => {
  Favourite.getFavourites((favouriteIds) => {
    console.log("Favourite IDs:", favouriteIds);

    Home.fetchAll((allHomes) => {
      console.log("All Homes IDs:", allHomes.map(h => h.id));

      const favHomes = allHomes.filter(
        (home) => home.id && favouriteIds.includes(home.id.toString())
      );

      console.log("Matched Fav Homes:", favHomes);

      res.render('store/favourite', { 
        title: 'My Favourites', 
        currentpage: 'my-favourite',
        homes: favHomes
      });
    });
  });
};


// Home list
exports.gethomelist = (req, res) => {
  Home.fetchAll((registeredUsers) => {
    res.render('store/home-list', { 
      users: registeredUsers, 
      title: 'Home-list', 
      currentpage: 'home-list'  
    });
  }); 
};

// Bookings
exports.getbooking = (req, res) => {
  res.render('store/bookings', { 
    title: 'My Bookings', 
    currentpage: 'my-bookings'  
  });
};

// Rendering form page
exports.formController = (req, res) => {
  res.render('store/form', { pagetitle: 'Room Booking' });
};

// Saving form data
exports.formSuccessController = (req, res) => {
  const hmodel = new Home(
    req.body.housename,
    req.body.location,
    req.body.price,
    req.body.imageUrl
  );
  hmodel.save();
  res.render('store/formsucess', { pagetitle: 'Form Success' });
};
