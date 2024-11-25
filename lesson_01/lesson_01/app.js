import express from 'express';
import connectToDatabase from './helpers.js';

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

const startServer = async () => {
  await connectToDatabase();
  console.log('Connected to the database');

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
