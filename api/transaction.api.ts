import { TransactionBody } from 'types/transaction.type';
import http from 'utils/http';

export const createTransaction = async (body: Partial<TransactionBody>) =>
  await http.post('/transactions', body);
