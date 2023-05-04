export type TransactionBody = {
  idUser: string;
  idCourse: string | string[];
  type: TypeTransation;
  method: string;
  status: TransactionStatusEnum;
  title: string;
  image: string;
  content: string;
  email: string;
  phone: number;
};

export enum TypeTransation {
  COURSE_PAYMENT = 'COURSE_PAYMENT',
  UPGRADE_TO_TEACHER = 'UPGRADE_TO_TEACHER',
}

export enum TransactionStatusEnum {
  CHECKING = 'CHECKING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
