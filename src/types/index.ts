export interface Data {
  currentUser: User;
  comments: Comment[];
}
export type CommentId = string;

export interface Comment {
  id: CommentId;
  content: string;
  createdAt: number;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}

export interface User {
  image: Image;
  username: string;
}

export interface Image {
  png: string;
  webp: string;
}
