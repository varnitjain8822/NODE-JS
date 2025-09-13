const home = require('../models/model');
const { fetchAll } = require('../models/model');

exports.getHome = (req, res) => {
  const registeredUsers = home.fetchAll((registeredUsers) => {
    res.render('home', { users: registeredUsers, title: 'Home' , currentpage : 'home'  });
  }); 
  
};
