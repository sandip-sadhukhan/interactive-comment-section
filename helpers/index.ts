import data from "../data/data.json";
import { CommentType } from "../types";

export const getCurrentUser = () => {
  return data.currentUser;
};

export const getInitialComments: () => CommentType[] = () => {
  return data.comments;
};
