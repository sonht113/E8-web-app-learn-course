export type Transaction = {
  idUser?: string;
  idCourse?: string;
  idClassRoom?: string;
  type?: TypeTransation;
  method?: string;
  status?: TransactionStatusEnum;
  title?: string;
  image?: string;
  content?: string;
  email?: string;
  phone?: string;
};

export enum TypeTransation {
  COURSE_PAYMENT = 'COURSE_PAYMENT',
  UPGRADE_TO_TEACHER = 'UPGRADE_TO_TEACHER',
  JOINS_CLASS = 'JOINS_CLASS',
}

export enum TransactionStatusEnum {
  CHECKING = 'CHECKING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
