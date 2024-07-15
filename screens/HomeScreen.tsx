import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { styled } from 'nativewind';
import PostCard from '../components/PostCard';
import { getPosts } from '../services/api';

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

const StyledView = styled(View);

const HomeScreen = ({ navigation }: any) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('Post', { post: item })}
          />
        )}
      />
    </StyledView>
  );
};

export default HomeScreen;
