import express from 'express';

const app = express();
let x=10;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000');
});