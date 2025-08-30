const express = require('express');
const userRouter = require('./routes/userrouter');
const formRouter = require('./routes/form');

const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(formRouter);
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
