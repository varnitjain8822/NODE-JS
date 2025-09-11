const registeredUsers = [];
const hmome = require('../models/model');

exports.formController = (req, res) => {
  res.render('form', { pagetitle: 'room booking' });
}

exports.formSuccessController = (req, res) =>{
  res.render('formsucess', {pagetitle:'form success'});
  const hmodel = new hmome(req.body.housename, req.body.location, req.body.price, req.body.imageUrl);
  hmodel.save();
}
exports.registeredUsers = registeredUsers;