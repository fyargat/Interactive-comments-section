import { Comment, CommentId, User } from "@/types";
import { nanoid } from "nanoid";

export const findCommentById = (comments: Comment[], id: CommentId) => {
  let result = null;

  for (const comment of comments) {
    if (comment.id === id) {
      result = comment;
      break;
    }

    if (comment.replies?.length) {
      for (const reply of comment.replies) {
        if (reply.id === id) {
          result = reply;
          break;
        }
      }
    }
  }

  return result;
};

export const findParentCommentById = (comments: Comment[], id: CommentId) => {
  let result = null;

  for (const comment of comments) {
    if (comment.id === id) {
      result = comment;
      break;
    }

    if (comment.replies?.length) {
      for (const reply of comment.replies) {
        if (reply.id === id) {
          result = comment;
          break;
        }
      }
    }
  }

  return result;
};

export const createComment = (content: string, user: User) => {
  const comment: Comment = {
    id: nanoid(),
    content,
    createdAt: Date.now(),
    score: 0,
    user: user,
    replies: [],
  };

  return comment;
};

export const createReply = (
  content: string,
  user: User,
  replyingTo: string
) => {
  const reply: Comment = {
    id: nanoid(),
    content,
    createdAt: Date.now(),
    score: 0,
    user: user,
    replyingTo,
  };

  return reply;
};
