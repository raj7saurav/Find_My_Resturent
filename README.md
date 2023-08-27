const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Restaurant = require('./restaurant.model'); // Import restaurant model

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

API routes and endpoints
Implement CRUD operations for restaurants here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
