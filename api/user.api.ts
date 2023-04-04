import { User } from 'types/user.type';
import http from 'utils/http';

export const getMe = async (populate: string, fields: string) => {
  return await http.get<User>('/users/me', {
    params: {
      populate: populate,
      fields: fields,
    },
  });
};
