const Favourite = require('../models/favourites');
const Home = require('../models/model'); 

// rendering home page
exports.gethomepage = (req, res) => {
  Home.fetchAll((registeredUsers) => {
    res.render('store/home-page', { 
      users: registeredUsers, 
      title: 'Home-page', 
      currentpage: 'home-page'  
    });
  }); 
};


exports.getdetails = (req, res) => {
 const user = req.params.userid;
 Home.findbyid(user, home =>  {
     if(!home)
     res.redirect('/homelist')
     else{
     res.render('store/home-detail', {
          home : home , 
          title: 'Home-page', 
          currentpage: 'home-page'  
     });}
 });
};
 


exports.postAddToFavourite = (req, res, next) => {
  console.log("POST /favourite route hit");
  console.log("req.body:", req.body);

  const homeId = req.body.id;

  Favourite.addToFavourite(homeId, (error) => {
    if (error) {
      console.error("Error while marking favourite:", error);
      return res.status(500).send("Could not add to favourites");
    }
  });
};




exports.getfavourite = (req, res) => {
  Favourite.getFavourites((favouriteIds) => {
    Home.fetchAll((allHomes) => {
      const favHomes = allHomes.filter(home => favouriteIds.includes(home.id.toString()));

      res.render('store/favourite', { 
        title: 'My Favourites', 
        currentpage: 'my-favourite',
        homes: favHomes
      });
    });
  });
};



exports.gethomelist = (req, res) => {
  Home.fetchAll((registeredUsers) => {
    res.render('store/home-list', { 
      users: registeredUsers, 
      title: 'Home-list', 
      currentpage: 'home-list'  
    });
  }); 
};





exports.getbooking = (req, res) => {
    res.render('store/bookings', { 
      title: 'my-bookings', 
      currentpage: 'my-bookings'  
    });
};






// rendering form page
exports.formController = (req, res) => {
  res.render('store/form', { pagetitle: 'room booking' });
};

// saving form data
exports.formSuccessController = (req, res) => {
  const hmodel = new Home(
    req.body.housename,
    req.body.location,
    req.body.price,
    req.body.imageUrl
  );
  hmodel.save();
  res.render('store/formsucess', { pagetitle: 'form success' });
};




