import mongoose from 'mongoose';
import dbConfig from '../config/db';

before(done => {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbConfig.DB_DEV_URL, { useNewUrlParser: true });

  mongoose.connection
    .once('open', () => { console.log('Connected to mongodb'); })
    .on('err', err => console.error(err));
});

// clean collection before each test
beforeEach(done => {
  const { albums, artists } = mongoose.connection.collections;
  // This approach does not work when album doesn't exist
  // albums.drop().then(() => {
  //     artists.drop()
  //       .then(() => done())
  //       .catch(() => done());
  //   })
  //   .catch(() => done());
  albums.drop(() => {
    artists.drop(() => {
      done();
    });
  });
});
