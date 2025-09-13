const hmome = require('../models/model');

// rendering form page
exports.formController = (req, res) => {
  res.render('form', { pagetitle: 'room booking' });
}


// saving form data to json file and rendering success page
exports.formSuccessController = (req, res) =>{
  const hmodel = new hmome(req.body.housename, req.body.location, req.body.price, req.body.imageUrl);
  hmodel.save();
  res.render('formsucess', {pagetitle:'form success'});
  
}
