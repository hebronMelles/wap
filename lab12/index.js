const express = require('express');
const app = express();
const port = 3002;


app.use(express.json());
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
