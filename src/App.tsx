import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ErrorAlert from './components/common/ErrorAlert';
import Layout from './components/layout';
import Post from './components/post/Post';
import PostSkeletons from './components/skeleton/PostSkeletons';
import { Alert } from './components/ui/alert';
import useFetchPosts from './hooks/useFetchPosts';
import { fetchUsers } from './services/api';
import { IUser } from './types';

const App: React.FC = () => {
  const { posts, hasMore, loadMorePosts, error } = useFetchPosts(1, 10);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchAllUsers();
  }, []);

  const getUserName = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  return (
    <Layout>
      {error && <ErrorAlert message={error.message} />}
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<PostSkeletons />}
        endMessage={
          <Alert className='text-center'>No more posts to display</Alert>
        }
      >
        <section className='space-y-4 mb-4'>
          {posts.map((post) => (
            <Post key={post.id} {...post} userName={getUserName(post.userId)} />
          ))}
        </section>
      </InfiniteScroll>
    </Layout>
  );
};

export default App;
