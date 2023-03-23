import { Router } from 'express';
import { createLoginController } from '../controllers/login.controllers';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { loginSerializer } from '../serializers/login.serializes';

const loginRouter = Router();

loginRouter.post(
  '',
  ensureDataIsValidMiddleware(loginSerializer),
  createLoginController,
);

export default loginRouter;
