import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Post: { post: { id: number; title: string; body: string } };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
