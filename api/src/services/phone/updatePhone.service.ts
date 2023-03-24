import { ListPhoneNumber } from '@prisma/client';
import AppError from '../../errors/AppError';
import { IPhoneRequest } from '../../interfaces/phone.interfaces';
import prisma from '../../prisma';
import { phoneResponserSerializer } from '../../serializers/phone.serializes';

const updatePhoneService = async (
  phoneData: IPhoneRequest,
  phoneId: string,
  userId: string,
  contactId?: string,
) => {
  try {
    let phone: ListPhoneNumber;
    if (contactId) {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          contacts: {
            update: {
              where: { id: contactId },
              data: {
                listPhoneNumber: {
                  update: { where: { id: phoneId }, data: { ...phoneData } },
                },
              },
            },
          },
        },
        include: { contacts: { include: { listPhoneNumber: true } } },
      });
      phone = user.contacts[0].listPhoneNumber.at(-1);
    } else {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          listPhoneNumber: {
            update: { where: { id: phoneId }, data: { ...phoneData } },
          },
        },
        include: { listPhoneNumber: true },
      });
      phone = user.listPhoneNumber.at(-1);
    }

    return await phoneResponserSerializer.validate(phone, {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('phone not found', 404);
  }
};

export default updatePhoneService;
