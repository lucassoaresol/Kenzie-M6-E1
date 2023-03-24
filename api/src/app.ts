import express from 'express';
import 'express-async-errors';
import handleError from './errors/handleError';
import contactRouter from './routes/contacts.routes';
import emailRouter from './routes/email.routes';
import loginRouter from './routes/login.routes';
import phoneRouter from './routes/phone.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/email', emailRouter);
app.use('/phone', phoneRouter);
app.use('/contacts', contactRouter);

app.use(handleError);

export default app;
