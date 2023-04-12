import { AxiosResponse } from 'axios';
import { Conversation } from 'types/converation.type';
import http from 'utils/http';

export const getConversations = async (): Promise<
  AxiosResponse<Conversation, any>
> => {
  return await http.get('/conversations');
};
