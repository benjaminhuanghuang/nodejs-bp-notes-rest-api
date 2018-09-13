
import mongoose from 'mongoose';
//
import config from './config';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGO_URI || config.MONGO_URI_DEV, { useNewUrlParser: true });
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => { console.log('Connected to mongodb'); })
    .on('err', err => console.error(err));
};
