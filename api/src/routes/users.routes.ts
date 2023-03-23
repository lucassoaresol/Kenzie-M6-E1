import { Router } from 'express';
import {
  createEmailController,
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from '../controllers/users.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import { emailSerializer } from '../serializers/email.serializes';
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
userRouter.post(
  '/email',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(emailSerializer),
  createEmailController,
);

export default userRouter;
