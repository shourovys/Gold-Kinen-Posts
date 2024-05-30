import React from 'react';

interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<CommentProps> = ({ name, email, body }) => (
  <div className='bg-white py-4'>
    <p className='text-gray-700 mb-2'>{body}</p>
    <small className='text-gray-500'>
      Commented by - {name} ({email})
    </small>
  </div>
);

export default Comment;
