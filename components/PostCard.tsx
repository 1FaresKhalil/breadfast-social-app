import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import UserAvatar from './UserAvatar';

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
  onPress: () => void;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

const PostCard: React.FC<PostCardProps> = ({ post, onPress }) => {
  return (
    <StyledTouchableOpacity
      className="bg-white p-4 mb-4 rounded-lg shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
      onPress={onPress}
    >
      <StyledView className="flex-row items-center mb-2 p-2">
        <UserAvatar userId={post.user_id} />
        <StyledView className="ml-3">
          <StyledText className="font-bold text-lg text-gray-900">
            {post.title}
          </StyledText>
          <StyledText className="text-sm text-gray-500">
            by User {post.user_id}
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledText className="text-gray-700 leading-relaxed">
        {post.body}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default PostCard;
