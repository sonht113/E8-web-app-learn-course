import http from 'utils/http';

export const getChapters = (id) =>
  http.get(`/chapters/paginate?idCourse=${id}&populate=lectures`);
