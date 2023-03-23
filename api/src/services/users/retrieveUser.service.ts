import prisma from '../../prisma';
import { userResponserSerializer } from '../../serializers/user.serializes';

const retrieveUserService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { listEmail: true },
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default retrieveUserService;
