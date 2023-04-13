import { AxiosResponse } from 'axios';
import { Conversation } from 'types/converation.type';
import { UserPaginate } from 'types/user-paginate.type';
import http from 'utils/http';

export const getConversations = async (): Promise<
  AxiosResponse<Conversation, any>
> => {
  return await http.get('/conversations');
};

export const searchUserWantAddJoinClassRoom = async (
  body: string
): Promise<AxiosResponse<UserPaginate, any>> => {
  if (
    body.length === 10 &&
    body.includes('0') &&
    !body.includes('@gmail.com')
  ) {
    return await http.get('/users/paginate', {
      params: {
        phone: body,
      },
    });
  }
  return await http.get('/users/paginate', {
    params: {
      email: body,
    },
  });
};
