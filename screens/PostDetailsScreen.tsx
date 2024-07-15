import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import CommentCard from '../components/CommentCard';
import { getComments } from '../services/api';
import { RouteProp } from '@react-navigation/native';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  post_id: number;
  name: string;
  body: string;
}

type PostDetailsScreenRouteProp = RouteProp<
  {
    Post: { post: Post };
  },
  'Post'
>;

interface PostDetailsScreenProps {
  route: PostDetailsScreenRouteProp;
}

const StyledView = styled(View);
const StyledText = styled(Text);

const PostDetailsScreen: React.FC<PostDetailsScreenProps> = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getComments(post.id)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        setComments([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [post.id]);

  if (loading) {
    return (
      <StyledView className="flex-1 items-center justify-center bg-gray-100 p-4">
        <ActivityIndicator size="large" color="#3498db" />
      </StyledView>
    );
  }

  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <StyledView>
          <StyledView className="bg-white p-4 rounded-lg shadow-lg mb-5">
            <StyledText className="text-3xl font-bold text-gray-900 mb-2">
              {post.title}
            </StyledText>
            <StyledText className="text-lg text-gray-700 mb-4">
              {post.body}
            </StyledText>
          </StyledView>
          <StyledText className="text-xl font-semibold text-gray-900 mb-3">
            Comments:
          </StyledText>
        </StyledView>
      }
      renderItem={({ item }) => <CommentCard comment={item} />}
      ListEmptyComponent={
        <StyledView className="flex-1 items-center justify-center p-4">
          <StyledText className="text-gray-600">
            No comments available.
          </StyledText>
        </StyledView>
      }
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default PostDetailsScreen;
