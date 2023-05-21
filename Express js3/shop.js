const express = require('express');
const router = express.Router();

// Define your shop routes here
router.get('/products', (req, res) => {
  res.send('Shop Products');
});

router.get('/orders', (req, res) => {
  res.send('Shop Orders');
});

module.exports = router;
