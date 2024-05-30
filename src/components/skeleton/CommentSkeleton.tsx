import { Skeleton } from '../../components/ui/skeleton';

const CommentSkeleton = () => {
  return (
    <div className='bg-white py-4 space-y-2'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-3/5' />
      <Skeleton className='h-3 w-2/4' />
    </div>
  );
};

export default CommentSkeleton;
