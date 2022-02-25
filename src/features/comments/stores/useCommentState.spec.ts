import { act, renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';

import { Comment } from '../models';

import { useCommentStore } from '.';

describe('useCommentState', () => {
  it('add and remove comment', () => {
    const { result } = renderHook(() => useCommentStore(), {
      wrapper: RecoilRoot,
    });

    const comment = Comment.of();

    act(() => {
      result.current.add(comment);
    });

    expect(result.current.comments).toStrictEqual([comment]);

    act(() => {
      result.current.remove(comment);
    });

    expect(result.current.comments).toStrictEqual([]);
  });
});
