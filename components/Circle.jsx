import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
   useSharedValue,
   useAnimatedStyle,
   withSpring,
   interpolate,
   withDelay,
   withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import CircleAnimation from './CircleAnimation';

const VIEW_SIZE = 56;
const USER_IMG_WIDTH = 40;

const Circle = ({ user, left, top, open, index, uri, radius, onGestureEvent, rotate, selected, selectCard }) => {
   const LeftValue = useSharedValue(0);
   const topValue = useSharedValue(0);
   const showName = useSharedValue(0);
   const circleAnimatedStyle = useAnimatedStyle(() => {
      const rotateValue = Math.ceil(rotate.value);
      const value = Math.sign(rotateValue);

      const halfRadius = radius / 2;

      let leftInterpolateValue = interpolate(LeftValue.value, [0, 1, 2], [left, halfRadius * 2, 200]);

      let topInterpolateValue = interpolate(
         topValue.value,
         [0, 1, 2],
         [top, halfRadius + 100, (index + 1) * 95]
      );

      return {
         left: leftInterpolateValue,
         top: topInterpolateValue,
         transform:
            value === -1 || value === 0
               ? [{ rotate: `${Math.abs(rotateValue)}deg` }]
               : [{ rotate: `-${rotateValue}deg` }],
      };
   });

   const nameAnimatedStyle = useAnimatedStyle(() => {
      let opacity = interpolate(showName.value, [0, 1], [0, 1]);
      return {
         opacity,
      };
   });
   const contentAnimatedStyle = useAnimatedStyle(() => {
      let opacity = interpolate(showName.value, [0, 1], [0, 1]);
      return {
         opacity,
      };
   });
   const openedModal = () => {
      const withSpringOpt = { mass: 2, stiffness: 80, damping: index + 1 * 15 };
      const withSpring2Opt = { stiffness: 100, mass: 3 };

      LeftValue.value = withDelay(
         50,
         withSpring(1, withSpringOpt, () => {
            LeftValue.value = withDelay(200, withSpring(2, withSpring2Opt));
         })
      );

      topValue.value = withDelay(
         20,
         withSpring(1, withSpringOpt, () => {
            topValue.value = withDelay(200, withSpring(2, withSpring2Opt));
         })
      );

      showName.value = withDelay(2000, withTiming(1, { duration: 1000 }));
   };

   const closedModal = () => {
      const withSpringOpt = {
         stiffness: 100,
      };

      LeftValue.value = withSpring(0, withSpringOpt);
      topValue.value = withSpring(0, withSpringOpt);
      showName.value = withTiming(0, { duration: 100 });
   };

   useEffect(() => {
      if (open) {
         openedModal();
      } else {
         closedModal();
      }
   }, [open]);
   return (
      <PanGestureHandler onGestureEvent={onGestureEvent}>
         <TouchableOpacity onPress={() => selectCard(user.id)} activeOpacity={1}>
            <Animated.View style={[styles.userContainer, circleAnimatedStyle]}>
               <CircleAnimation selected={selected} >
                  <Animated.Image style={styles.personImg} source={uri} />
               </CircleAnimation>
               <View style={styles.applicationData}>
                  <Animated.Text numberOfLines={1} style={[styles.userNameStyle, nameAnimatedStyle]}>
                     {user.name}
                  </Animated.Text>
                  <Animated.Text style={[styles.userExperience, nameAnimatedStyle]}>{user.role}</Animated.Text>
               </View>
            </Animated.View>
            {selected && <Animated.View style={[styles.contentContainer, contentAnimatedStyle]} pointerEvents={'none'}>
               <Animated.Text style={[styles.userExperience, nameAnimatedStyle]}>{user.role}</Animated.Text>

            </Animated.View>}
         </TouchableOpacity>
      </PanGestureHandler >
   );
};

export default Circle;

const styles = StyleSheet.create({
   userContainer: {
      width: VIEW_SIZE,
      height: VIEW_SIZE,
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      borderRadius: VIEW_SIZE,
      backgroundColor: '#212D30',
   },
   personImg: {
      width: USER_IMG_WIDTH,
      height: USER_IMG_WIDTH,
   },
   userNameStyle: {
      color: '#fff',
      fontFamily: 'MontserratSemiBold',
   },
   userExperience: {
      color: '#fff',
      fontFamily: 'MontserratRegular',
   },
   applicationData: {
      width: 200,
      left: 66,
      top: 0,
      bottom: 0,
      paddingVertical: 8,
      position: 'absolute',
      justifyContent: 'space-between',
      flexDirection: 'row',
   },
   contentContainer: {
      width: '60%',
      height: Dimensions.get('window').height - 100,
      position: "absolute",
      top: 100,
      left: 266 * 2,
      backgroundColor: "pink",
      borderRadius: 20,
      padding: 20,
   },
});
