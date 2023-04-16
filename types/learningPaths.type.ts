export type LearningPath = {
  title: string;
  description: string;
  thumbnail: string;
  results: LearningPathInfo[];
};

export type LearningPathInfo = {
  id: string;
  desc: string;
  position: number;
  thumbnail: string;
  title: string;
  isParent: boolean;
};
