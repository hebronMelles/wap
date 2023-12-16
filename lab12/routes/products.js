const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('GET request for /products');
});


router.post('/', (req, res) => {
  const newProduct = req.body;
  res.send('POST request for /products');
});

module.exports = router;
