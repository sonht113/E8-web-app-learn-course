export type Blog = {
  id?: string;
  author: Author;
  title?: string;
  content?: string;
  thumbnail?: string;
  totalViews?: string | number;
  totalLikes?: string | number;
  tags: string[];
  likes: string[]; // [idUsers]
};

export type BlogViewHome = Pick<Blog, 'id' | 'author' | 'title' | 'thumbnail'>;

type Author = {
  avatar: string;
  name: string;
};
