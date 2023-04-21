export type TransactionBody = {
  idUser: string;
  idCourse: string | string[];
  type: string | string[];
  method: string;
  status: string;
  title: string;
  image: string;
  content: string;
  email: string;
  phone: number;
};
