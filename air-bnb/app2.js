const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path'); 
const rootDir = require('./utils/pathutil');

const userRouter = require('./routes/userrouterr');   
const {formRouter} = require('./routes/form');  
const port = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRouter);     
app.use(formRouter);


app.use((req, res) => {
  res.status(404).render('404', { pagetitle: '404 Not Found' });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
