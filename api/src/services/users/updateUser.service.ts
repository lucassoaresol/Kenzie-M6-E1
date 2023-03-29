import AppError from '../../errors/AppError';
import { IUserUpdateRequest } from '../../interfaces/users.interfaces';
import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string,
) => {
  if (userData.username) {
    const username = await prisma.user.findUnique({
      where: { username: userData.username },
    });
    if (username) {
      throw new AppError('username already exists', 409);
    }
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: userData,
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default updateUserService;
