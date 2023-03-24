import prisma from '../../prisma';

const deletePhoneService = async (phoneId: string) => {
  await prisma.listPhoneNumber.delete({
    where: { id: phoneId },
  });
};

export default deletePhoneService;
