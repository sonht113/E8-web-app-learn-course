import { Axios, AxiosResponse } from 'axios';
import {
  Conversation,
  ConversationCreate,
  ConversationUpdate,
} from 'types/converation.type';
import { Message } from 'types/message.type';
import { UserPaginate } from 'types/user-paginate.type';
import http from 'utils/http';

export const getConversations = async (): Promise<
  AxiosResponse<Conversation[], any>
> => {
  return await http.get('/conversations');
};

export const getConversationDetail = async (
  id: string
): Promise<AxiosResponse<Conversation, any>> => {
  return await http.get(`/conversations/${id}`);
};

export const getMessages = async (idConversation: string, sender: string) => {
  return await http.get('/messages', {
    params: {
      idConversation: idConversation,
      sender: sender,
    },
  });
};

export const createConversationApi = async (
  body: ConversationCreate
): Promise<AxiosResponse<Conversation, any>> => {
  return await http.post('/conversations', body);
};

export const createMessagesApi = async (body: Message) => {
  return await http.post(`/messages`, body);
};

export const updateConversation = async (body: {
  id: string;
  data: ConversationUpdate;
}): Promise<AxiosResponse<Conversation, any>> => {
  return await http.put(`/conversations/${body.id}`, body.data);
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
