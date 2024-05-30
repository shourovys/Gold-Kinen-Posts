import { CircleUserRound } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Comments from './Comments';

interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  userName: string;
}

const Post: React.FC<IPostProps> = ({ userId, id, title, body, userName }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className='capitalize'>
      <CardHeader className='space-y-2'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='flex items-center gap-1'>
          <CircleUserRound className='h-6 aspect-square' />
          Posted by - {userName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body} </p>
      </CardContent>
      <CardFooter>
        <Button size={'sm'} onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
      </CardFooter>
      {showComments && <Comments postId={id} />}
    </Card>
  );
};

export default Post;
