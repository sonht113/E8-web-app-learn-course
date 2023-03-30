import http from 'utils/http';

export const getBlogs = () => {
  return http.get('/posts');
};
