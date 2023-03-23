import prisma from '../../prisma';

const deleteEmailService = async (emailId: string) => {
  await prisma.listEmail.delete({
    where: { id: emailId },
  });
};

export default deleteEmailService;
