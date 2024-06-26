export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: string;
  tags: string[];
  reactions: number;
};

export type PostsType = PostType[];
