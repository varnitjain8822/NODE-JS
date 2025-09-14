const Home = require('../models/model');

// rendering home page
exports.gethomepage = (req, res) => {
  Home.fetchAll((registeredUsers) => {
    res.render('host/host-home-list', { 
      users: registeredUsers, 
      title: 'Home-page', 
      currentpage: 'home-page'  
    });
  }); 
};

exports.edithome = (req, res) => {
  const homeid = req.params.userid;     
  const query = req.query.editing === 'true';       
  Home.findbyid (homeid , home =>{
    if(!home)
    console.log("home not found "); 
    else 
    {
    console.log(home);
    res.render('host/edit-home', { 
    pagetitle: 'Editing the page',
    home : home,
    editing: query
    });
  }
  });

};


exports.postedithome = (req , res) =>{
  const {id , housename , location , price , imageurl } = req.body;
  const home = new  Home (housename, location, price, imageurl);
  home.id = id;
  home.save();
  Home.fetchAll((registeredUsers) => {
    res.render('host/host-home-list', { 
      users: registeredUsers, 
      title: 'Home-page', 
      currentpage: 'home-page'  
    });
  }); 
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log('Error while deleting ', error);
    }
    res.redirect("/host/host-home-list");
  })
};


