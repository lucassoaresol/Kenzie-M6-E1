import { Router } from 'express';
import { listContactsController } from '../controllers/contacts.controllers';
import {
  createEmailUserController,
  updateEmailUserController,
  deleteEmailUserController,
} from '../controllers/email.controllers';
import {
  createPhoneUserController,
  updatePhoneUserController,
  deletePhoneUserController,
} from '../controllers/phone.controllers';
import {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
} from '../controllers/users.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import { emailSerializer } from '../serializers/email.serializes';
import { phoneSerializer } from '../serializers/phone.serializes';
import {
  userSerializer,
  userUpdateSerializer,
} from '../serializers/user.serializes';

const userRouter = Router();

userRouter.post(
  '',
  ensureDataIsValidMiddleware(userSerializer),
  createUserController,
);
userRouter.get(
  '',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  retrieveUserController,
);
userRouter.patch(
  '',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(userUpdateSerializer),
  updateUserController,
);
userRouter.delete(
  '',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteUserController,
);
userRouter.get(
  '/contacts',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  listContactsController,
);

userRouter.post(
  '/email',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  createEmailUserController,
);
userRouter.patch(
  '/email/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  updateEmailUserController,
);
userRouter.delete(
  '/email/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteEmailUserController,
);

userRouter.post(
  '/phone',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(phoneSerializer),
  createPhoneUserController,
);
userRouter.patch(
  '/phone/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(phoneSerializer),
  updatePhoneUserController,
);
userRouter.delete(
  '/phone/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deletePhoneUserController,
);

export default userRouter;
