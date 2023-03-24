import { Router } from 'express';
import {
  deletePhoneController,
  updatePhoneController,
} from '../controllers/phone.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import { phoneSerializer } from '../serializers/phone.serializes';

const phoneRouter = Router();

phoneRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(phoneSerializer),
  updatePhoneController,
);
phoneRouter.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deletePhoneController,
);

export default phoneRouter;
