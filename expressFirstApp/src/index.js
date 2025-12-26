const express = require('express');
const app = express();
const PORT = 3000;
function m1(req, res, next) {
  console.log('isnide middleware m1');
  next();
  console.log('after calling m1');
}
function m2(req, res, next) {
  console.log('isnide middleware m2');
  next();
  console.log('after calling m2');
}
app.get('/home', m1, m2, (req, res) => {
  console.log('home called');
  return res.json({ message: 'home page' });
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
