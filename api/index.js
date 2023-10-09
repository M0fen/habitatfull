import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Conectado a Mongodivi');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('El servidor está escuchando desde el puerto 3k!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist ')));

app.get('*',(req, res) => {
res.send(path.join(__dirname, 'client/dist,index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
