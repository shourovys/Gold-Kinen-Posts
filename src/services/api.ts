import axios from 'axios';
import { IComment, IPost, IUser } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchPosts = async (
  page: number,
  limit: number,
  sortBy = 'id',
  order: 'asc' | 'desc' = 'desc'
) => {
  try {
    const response = await api.get<IPost[]>(`/posts`, {
      params: {
        _page: page,
        _limit: limit,
        _sort: sortBy,
        _order: order,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await api.get<IUser[]>(`/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchComments = async (postId: number) => {
  try {
    const response = await api.get<IComment[]>(`/comments`, {
      params: { postId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};
