const ServerConfig = require('./config/index');
const express = require('express');
const apiRoutes = require('./routes');
const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`successfully started server at port ${ServerConfig.PORT}`);
});
