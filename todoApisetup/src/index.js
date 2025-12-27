const express = require('express');
const { PORT } = require('./config/server.config');
const app = express();
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
