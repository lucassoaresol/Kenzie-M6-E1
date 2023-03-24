import { Router } from 'express';
import {
  createContactController,
  createEmailController,
  deleteContactController,
  retrieveContactController,
  updateContactController,
} from '../controllers/contacts.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import { contactSerializer } from '../serializers/contact.serializes';
import { emailSerializer } from '../serializers/email.serializes';

const contactRouter = Router();

contactRouter.post(
  '',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  createContactController,
);
contactRouter.get(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  retrieveContactController,
);
contactRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  updateContactController,
);
contactRouter.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteContactController,
);
contactRouter.post(
  '/:id/email',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  createEmailController,
);

export default contactRouter;
