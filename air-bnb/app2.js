const express = require('express');
const path = require('path');
const app = express();

const rootDir = require('./utils/pathutil');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routers
const storerouter = require('./routes/storerouter');
const hostrouter= require('./routes/hostrouter');

const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));

// Use routers
app.use(storerouter);  
app.use(hostrouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { pagetitle: '404 Not Found' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
