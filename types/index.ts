export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
  replyingTo?: string;
  replies?: CommentType[];
}
