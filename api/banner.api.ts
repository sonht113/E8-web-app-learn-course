import { AxiosResponse } from 'axios';
import { BannerRes } from 'types/banner.type';
import http from 'utils/http';

export const getBanners = (): Promise<AxiosResponse<BannerRes, any>> => {
  return http.get('/banners');
};
