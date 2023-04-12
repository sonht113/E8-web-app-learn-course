import { AxiosResponse } from 'axios';
import http from 'utils/http';

type Upload = {
  files: string[];
};

export const uploadFilesAPI = async (
  body: any
): Promise<AxiosResponse<Upload, any>> => {
  return await http.post('/uploads', body);
};

export const confirmUploadAPI = async (
  body: Upload
): Promise<AxiosResponse<Upload[], any>> => {
  return await http.post('/uploads/local-tmp', body);
};

export const uploadVideosAPI = async (
  body: any
): Promise<AxiosResponse<Upload, any>> => {
  return await http.post('/uploads/videos', body);
};
