import React from 'react';
import { View, Image } from 'react-native';
import { styled } from 'nativewind';

interface UserAvatarProps {
  userId: number;
}

const StyledView = styled(View);
const StyledImage = styled(Image);

const UserAvatar: React.FC<UserAvatarProps> = ({ userId }) => {
  return (
    <StyledView className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
      <StyledImage
        source={{ uri: `https://robohash.org/${userId}.png` }}
        className="w-full h-full"
      />
    </StyledView>
  );
};

export default UserAvatar;
