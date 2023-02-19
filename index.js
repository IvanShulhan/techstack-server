import mongoose from 'mongoose';
import express from 'express';
import config from 'config';
import cors from 'cors';

import { router as apartmentRouter } from './routes/apartment.router.js';

const PORT = config.get('port') || 5005;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/apartments', apartmentRouter);

(async function() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.get('mongoURL'));

    app.listen(PORT, () => {
      console.log(`Server is working in port: ${PORT}`);
    })
  } catch(err) {
    console.error('Server Error', err.message);
    process.exit(1);
  }
})()
