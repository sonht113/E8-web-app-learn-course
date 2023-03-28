import http from 'utils/http';

export const getBanners = () => {
  return http.get('/banners');
};
