import { hashSync } from 'bcryptjs';
import { IUserUpdateRequest } from '../../interfaces/users.interfaces';
import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string,
) => {
  if (userData.password) {
    userData.password = hashSync(userData.password, 10);
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
