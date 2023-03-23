import express from 'express';
import 'express-async-errors';
import handleError from './errors/handleError';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(handleError);

export default app;
