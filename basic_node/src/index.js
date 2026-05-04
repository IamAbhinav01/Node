const { ServerConfig } = require('./config/');
const { Logger } = require('./config/');
const express = require('express');
const apiRoutes = require('./routes');
const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`successfully started server at port ${ServerConfig.PORT}`);
  Logger.info('successfully started node express application');
});
