const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse request bodies as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const adminRoutes = require('.routes');
const shopRoutes = require('.shop');

// Middleware to handle /admin routes
app.use('/admin', adminRoutes);

// Middleware to handle /shop routes
app.use('/shop', shopRoutes);

// 404 Route
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
