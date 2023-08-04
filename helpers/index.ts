import data from "../data/data.json";
import { CommentType } from "../types";

export const getCurrentUser = () => {
  return data.currentUser;
};

export const STORAGE_KEY = "COMMENTS";

export const getInitialComments: () => CommentType[] = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
    const comments = JSON.parse(storedData) as CommentType[];

    return comments;
  } else {
    const comments = data.comments;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));

    return comments;
  }
};

export const saveData = (comments: CommentType[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
};
