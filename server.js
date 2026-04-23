import express from 'express';

const app = express();
let x=10;
let y=20;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/x', (req, res) => { 
  res.send(`The value of x is: ${x}`);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000');
});