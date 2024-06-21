import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCommentsByJobPosition } from '../../../../supabase/api/comments';

const useCommentQuery = () => {
  const { position } = useParams();

  const { data: comments } = useQuery({
    queryKey: ['comments', position],
    queryFn: () => getCommentsByJobPosition(position),
    initialData: []
  });

  return comments;
};

export default useCommentQuery;
