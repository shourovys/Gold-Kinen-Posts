import { IPost } from '@/types';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';

const useFetchPosts = (initialPage: number, limit: number) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const newPosts = await fetchPosts(page, limit);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
      if (newPosts.length === 0) {
        setHasMore(false);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMorePosts();
  }, []);

  return { posts, hasMore, loadMorePosts, loading, error };
};

export default useFetchPosts;
