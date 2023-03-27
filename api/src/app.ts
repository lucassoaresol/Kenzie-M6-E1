import express from 'express';
import 'express-async-errors';
import handleError from './errors/handleError';
import contactRouter from './routes/contacts.routes';
import loginRouter from './routes/login.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/contacts', contactRouter);

app.use(handleError);

export default app;
