const API_URL = 'https://gorest.co.in/public/v2';

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const getComments = async (postId: number) => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
  return response.json();
};
