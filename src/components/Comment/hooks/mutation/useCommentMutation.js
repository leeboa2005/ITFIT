import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment, insertComment, updateComment } from '../../../../supabase/api/comments';

const useCommentMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createComment } = useMutation({
    mutationFn: ({ userId, nickname, comment, jobPosition }) => insertComment(userId, nickname, comment, jobPosition),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  const { mutateAsync: editComment } = useMutation({
    mutationFn: ({ id, comment }) => updateComment(id, comment),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  const { mutateAsync: removeComment } = useMutation({
    mutationFn: ({ id }) => deleteComment(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  return { createComment, editComment, removeComment };
};

export default useCommentMutation;
