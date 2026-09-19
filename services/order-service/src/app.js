require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./config/database')
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Server UP' ,
    server : 'Order-Management-Platform'
  });
});

connectToDatabase();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 