import { compareSync, hashSync } from 'bcryptjs';
import AppError from '../../errors/AppError';
import { IUserUpdatePasswordRequest } from '../../interfaces/users.interfaces';
import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const updateUserPasswordService = async (
  userData: IUserUpdatePasswordRequest,
  userId: string,
) => {
  const userFind = await prisma.user.findUnique({
    where: { id: userId },
  });

  const passwordMatch = compareSync(userData.oldPassword, userFind.password);

  if (!passwordMatch) {
    throw new AppError('incorrect password', 404);
  }
  delete userData.oldPassword;

  userData.password = hashSync(userData.password, 10);

  const user = await prisma.user.update({
    where: { id: userId },
    data: userData,
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default updateUserPasswordService;
