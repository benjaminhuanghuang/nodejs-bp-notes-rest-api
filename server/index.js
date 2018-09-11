import express from 'express';

import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';

//
import { BPRecordRoutes, UserRoutes } from './modules';

const PORT = process.env.PORT || 8964;

dbConfig();

const app = express();
middlewareConfig(app);

app.use('/api', [BPRecordRoutes, UserRoutes]);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});