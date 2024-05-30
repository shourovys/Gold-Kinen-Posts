import { Skeleton } from '../ui/skeleton';

const PostSkeleton = () => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 space-y-3'>
      <Skeleton className='h-7' />
      <Skeleton className='h-4 w-60' />
      <div className='space-y-2'>
        <Skeleton className='h-4' />
        <Skeleton className='h-4' />
        <Skeleton className='h-4' />
        <Skeleton className='h-4 w-10/12' />
      </div>
    </div>
  );
};

const PostSkeletons = () => {
  return (
    <div className='space-y-4'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
};

export default PostSkeletons;
