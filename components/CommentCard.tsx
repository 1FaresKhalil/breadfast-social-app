import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import UserAvatar from './UserAvatar';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface Comment {
  id: number;
  post_id: number;
  name: string;
  body: string;
}

interface CommentCardProps {
  comment: Comment;
}

const StyledView = styled(View);
const StyledText = styled(Text);

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={{
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        transform: [{ scale: 1 }],
      }}
    >
      <StyledView className="flex-row items-center mb-2">
        <UserAvatar userId={comment.post_id} />
        <StyledView className="ml-3">
          <StyledText className="font-bold text-lg text-gray-900">
            {comment.name}
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledText className="text-gray-700 leading-relaxed">
        {comment.body}
      </StyledText>
    </Animated.View>
  );
};

export default CommentCard;
