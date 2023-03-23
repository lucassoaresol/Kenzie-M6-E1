import prisma from '../../prisma';

const deleteUserService = async (userId: string) => {
  await prisma.user.delete({
    where: { id: userId },
  });
};

export default deleteUserService;
