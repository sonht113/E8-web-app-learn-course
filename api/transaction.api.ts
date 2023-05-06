import { AxiosResponse } from 'axios';
import { Transaction } from 'types/transaction.type';
import http from 'utils/http';

export const createTransaction = async (
  body: Partial<Transaction>
): Promise<AxiosResponse<any, any>> => await http.post('/transactions', body);

export const upgradeToTeacherAPI = async (body: Transaction) => {
  return await http.post('/transactions/upgrade-to-teacher', body);
};

export const buyCourseAPI = async (body: Transaction) => {
  return await http.post('/transactions/buy-course', body);
};

export const registerForClassOnlineAPI = async (body: Transaction) => {
  return await http.post('/transactions/join-class', body);
};
