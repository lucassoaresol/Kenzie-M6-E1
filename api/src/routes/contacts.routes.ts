import { Router } from 'express';
import {
  createContactController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.controllers';
import {
  createEmailContactController,
  updateEmailContactController,
  deleteEmailContactController,
} from '../controllers/email.controllers';
import {
  createPhoneContactController,
  updatePhoneContactController,
  deletePhoneContactController,
} from '../controllers/phone.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import {
  contactSerializer,
  contactUpdateSerializer,
} from '../serializers/contact.serializes';
import { emailSerializer } from '../serializers/email.serializes';
import { phoneSerializer } from '../serializers/phone.serializes';

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
  ensureDataIsValidMiddleware(contactUpdateSerializer),
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
  createEmailContactController,
);
contactRouter.patch(
  '/:contactId/email/:emailId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  updateEmailContactController,
);
contactRouter.delete(
  '/:contactId/email/:emailId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteEmailContactController,
);

contactRouter.post(
  '/:id/phone',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(phoneSerializer),
  createPhoneContactController,
);
contactRouter.patch(
  '/:contactId/phone/:phoneId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(phoneSerializer),
  updatePhoneContactController,
);
contactRouter.delete(
  '/:contactId/phone/:phoneId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deletePhoneContactController,
);

export default contactRouter;
