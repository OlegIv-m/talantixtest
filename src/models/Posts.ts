export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  userName?: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};
