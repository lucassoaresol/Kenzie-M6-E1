import { Router } from 'express';
import { updateEmailController } from '../controllers/email.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import { emailSerializer } from '../serializers/email.serializes';

const emailRouter = Router();

emailRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  updateEmailController,
);

export default emailRouter;
