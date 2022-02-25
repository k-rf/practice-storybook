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
    add: useCallback(
      (comment: Comment) => {
        setComments((old) => old.concat(comment));
      },
      [setComments]
    ),
    remove: useCallback(
      (comment: Comment) => {
        setComments((old) => old.filter((o) => !o.equals(comment)));
      },
      [setComments]
    ),
  };
};
