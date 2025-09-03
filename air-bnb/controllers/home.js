exports.gethome=(req, res) => {
  res.render('home', { users: registeredUsers ,title: 'Home'});
}