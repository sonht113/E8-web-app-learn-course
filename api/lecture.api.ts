import http from 'utils/http';

export const getLecture = async (id: string) =>
  await http.get(`/lectures/${id}`);
