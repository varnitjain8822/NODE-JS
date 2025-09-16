const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

const rootDir = require('./utils/pathutil');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routers
const storerouter = require('./routes/storerouter');
const hostrouter= require('./routes/hostrouter');
const mongoConnect = require('../air-bnb/utils/databaseutil');


// Use routers
app.use(storerouter);  
app.use(hostrouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { pagetitle: '404 Not Found' });
});

// Start server

const port = 3000;
mongoConnect((client) => {
  console.log(client);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});


