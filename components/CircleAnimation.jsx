import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const CircleAnimation = ({ children, selected }) => {
  const rotate = useSharedValue(0);
  const numBalls = 5; // Number of balls to display
  const circleRadius = 40; // Radius of the circle

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    rotate.value = withTiming(
      1,
      {
        duration: 5000,
        easing: Easing.linear,
      },
      () => {
        rotate.value = 0; // Reset the rotation value
        startAnimation(); // Restart the animation
      }
    );
  };

  const animatedStyle1 = useAnimatedStyle(() => {
    const rotation = interpolate(
      rotate.value,
      [0, 1],
      [0, 2 * Math.PI],
      Extrapolate.CLAMP
    );
    const positionX = circleRadius * Math.cos((0 / numBalls) * 2 * Math.PI + rotation);
    const positionY = circleRadius * Math.sin((0 / numBalls) * 2 * Math.PI + rotation);

    return {
      transform: [{ translateX: positionX }, { translateY: positionY }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const rotation = interpolate(
      rotate.value,
      [0, 1],
      [0, 2 * Math.PI],
      Extrapolate.CLAMP
    );


    const positionX = circleRadius * Math.cos((1 / numBalls) * 2 * Math.PI + rotation);
    const positionY = circleRadius * Math.sin((1 / numBalls) * 2 * Math.PI + rotation);

    return {
      transform: [{ translateX: positionX }, { translateY: positionY }],
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    const rotation = interpolate(
      rotate.value,
      [0, 1],
      [0, 2 * Math.PI],
      Extrapolate.CLAMP
    );


    const positionX = circleRadius * Math.cos((2 / numBalls) * 2 * Math.PI + rotation);
    const positionY = circleRadius * Math.sin((2 / numBalls) * 2 * Math.PI + rotation);

    return {
      transform: [{ translateX: positionX }, { translateY: positionY }],
    };
  });

  const animatedStyle4 = useAnimatedStyle(() => {
    const rotation = interpolate(
      rotate.value,
      [0, 1],
      [0, 2 * Math.PI],
      Extrapolate.CLAMP
    );


    const positionX = circleRadius * Math.cos((3 / numBalls) * 2 * Math.PI + rotation);
    const positionY = circleRadius * Math.sin((3 / numBalls) * 2 * Math.PI + rotation);

    return {
      transform: [{ translateX: positionX }, { translateY: positionY }],
    };
  });

  const animatedStyle5 = useAnimatedStyle(() => {
    const rotation = interpolate(
      rotate.value,
      [0, 1],
      [0, 2 * Math.PI],
      Extrapolate.CLAMP
    );


    const positionX = circleRadius * Math.cos((4 / numBalls) * 2 * Math.PI + rotation);
    const positionY = circleRadius * Math.sin((4 / numBalls) * 2 * Math.PI + rotation);

    return {
      transform: [{ translateX: positionX }, { translateY: positionY }],
    };
  });
  if (!selected) {
    return children;
  }
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle1]} />
      <Animated.View style={[styles.circle, animatedStyle2]} />
      <Animated.View style={[styles.circle, animatedStyle3]} />
      <Animated.View style={[styles.circle, animatedStyle4]} />
      <Animated.View style={[styles.circle, animatedStyle5]} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 25,
    backgroundColor: '#12f39c',
    position: 'absolute',
  },
});

export default CircleAnimation;