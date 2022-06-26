import mongoose from 'mongoose';

import fs from 'fs';
import path from 'path';
const filePath = path.resolve('.', 'certificate/ca.crt');

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
      authMechanism: 'DEFAULT',
      tlsCAFile: filePath,
    })
    .then((con) => console.log('connected to DB'))
    .catch((err) => console.log(err));
};

export default connectDB;
