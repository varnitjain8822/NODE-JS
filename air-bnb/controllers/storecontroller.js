const Home = require('../models/model'); // class import

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


exports.getfavourite = (req, res) => {
    res.render('store/favourite', { 
      title: 'my-favourite', 
      currentpage: 'my-favourite'  
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
