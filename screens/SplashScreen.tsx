import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { styled } from 'nativewind';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withDelay,
} from 'react-native-reanimated';

const StyledView = styled(View);

const SplashScreen = () => {
  const navigation = useNavigation();
  const animationConfig = {
    duration: 700,
    easing: Easing.out(Easing.exp),
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  const letters = 'Breadfast Social App'.split('');

  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <View style={{ flexDirection: 'row' }}>
        {letters.map((letter, index) => {
          const offset = index * 100;
          const translateY = useSharedValue(-50);
          const opacity = useSharedValue(0);

          useEffect(() => {
            translateY.value = withDelay(
              offset,
              withTiming(0, animationConfig)
            );
            opacity.value = withDelay(offset, withTiming(1, animationConfig));
          }, [translateY, opacity, offset]);

          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [{ translateY: translateY.value }],
              opacity: opacity.value,
            };
          });

          return (
            <Animated.Text
              key={`${letter}-${index}`}
              style={[
                animatedStyle,
                { fontSize: 40, fontWeight: 'bold', color: '#aa0082' },
              ]}
            >
              {letter}
            </Animated.Text>
          );
        })}
      </View>
    </StyledView>
  );
};

export default SplashScreen;
