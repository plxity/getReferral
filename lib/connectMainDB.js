

import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(
      'mongodb://linroot:LSBKeiMASAmYgXni@lin-4270-9094.servers.linodedb.net/?authMechanism=DEFAULT&tls=true&tlsCAFile=%2FUsers%2Fapoorvtaneja%2FDownloads%2Freferme-ca-certificate.crt',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => console.log('connected to DB'))
    .catch((err) => console.log(err));
};

export default connectDB;
