
const Home = require('../models/model'); // class import
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
