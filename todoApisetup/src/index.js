const express = require('express');
const { PORT } = require('./config/server.config');
const { homeController } = require('./controllers/home.controller');
const router = require('./routes');
const app = express();
app.use('/', router);
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
