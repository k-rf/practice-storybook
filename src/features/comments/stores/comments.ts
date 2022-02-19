import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

import { Comment } from '../models';

const commentState = atom<Comment[]>({
  key: 'commentState',
  default: [],
});

export const useCommentStore = () => {
  const [comments, setComments] = useRecoilState(commentState);

  return {
    comments,
    addComment: useCallback(
      (comment: Comment) => {
        setComments((old) => ({
          ...old,
          comments: old.concat(comment),
        }));
      },
      [setComments]
    ),
    removeComment: useCallback(
      (comment: Comment) => {
        setComments((old) => old.filter((o) => !o.equals(comment)));
      },
      [setComments]
    ),
  };
};
