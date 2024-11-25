import express from 'express';

const PORT = 7777;
const app = express();

app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, () => console.log('Server OK'));
  } catch (e) {
    console.log(e);
  }
};

start();
