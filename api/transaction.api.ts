import { AxiosResponse } from 'axios';
import { TransactionBody } from 'types/transaction.type';
import http from 'utils/http';

export const createTransaction = async (
  body: Partial<TransactionBody>
): Promise<AxiosResponse<any, any>> => await http.post('/transactions', body);
