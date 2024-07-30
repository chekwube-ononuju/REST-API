// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to manage environment variables
dotenv.config();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route to demonstrate functionality
app.get('/api/message', (req, res) => {
  res.json({ message: 'This is a message from the API' });
});

// Route to demonstrate a parameterized API call
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Hello, user with ID: ${userId}` });
});

// Route to create a new item (using POST method)
app.post('/api/item', (req, res) => {
  const newItem = req.body.item;
  res.json({ message: `Item received: ${newItem}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
