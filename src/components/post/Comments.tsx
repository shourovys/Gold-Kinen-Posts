import { IComment } from '@/types';
import React, { useEffect, useState } from 'react';
import { fetchComments } from '../../services/api';
import CommentSkeleton from '../skeleton/CommentSkeleton';
import { CardContent } from '../ui/card';
import Comment from './Comment';

const Comments: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching comments starts
    fetchComments(postId)
      .then((response) => setComments(response))
      .catch((error) => console.error('Error fetching comments:', error))
      .finally(() => setLoading(false)); // Set loading to false when fetching comments completes
  }, [postId]);

  return (
    <CardContent>
      <h2 className='text-xl font-semibold'>Comments:</h2>
      <div className='divide-y'>
        {loading && [1, 2, 3, 4, 5].map((i) => <CommentSkeleton key={i} />)}
        {comments.map((comment: IComment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </CardContent>
  );
};

export default Comments;
