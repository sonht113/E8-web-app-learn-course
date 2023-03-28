export type BannerType = {
  id?: string | number;
  image: string;
  title: string;
  description: string;
  button: string;
  colorFrom: string;
  colorTo: string;
};

export type BannerRes = {
  id: string;
  link: string;
  isShow: boolean;
  position: number;
  image: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};
