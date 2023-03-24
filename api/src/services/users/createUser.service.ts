import { hashSync } from 'bcryptjs';
import AppError from '../../errors/AppError';
import { IUserRequest } from '../../interfaces/users.interfaces';
import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const createUserService = async ({
  fullName,
  username,
  password,
  listEmail,
  listPhoneNumber,
}: IUserRequest) => {
  let user = await prisma.user.findUnique({ where: { username: username } });
  if (user) {
    throw new AppError('user already exists', 409);
  }
  password = hashSync(password, 10);
  user = await prisma.user.create({
    data: {
      fullName,
      username,
      password,
      listEmail: { createMany: { data: listEmail } },
      listPhoneNumber: { createMany: { data: listPhoneNumber } },
    },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default createUserService;
