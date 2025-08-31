const express = require('express');
const app = express();

const userRouter = require('./routes/userrouterr');   
const formRouter = require('./routes/form');  
const port = 3000;
const path = require('path');
const rootDir = require('./utils/pathutil');      

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);     
app.use(formRouter);
app.use(express.static(path.join(rootDir, 'public')));


app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
