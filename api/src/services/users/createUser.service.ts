import { hashSync } from 'bcryptjs';
import { IUserRequest } from '../../interfaces/users.interfaces';
import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const createUserService = async (userData: IUserRequest) => {
  userData.password = hashSync(userData.password, 10);

  const user = await prisma.user.create({ data: userData });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default createUserService;
