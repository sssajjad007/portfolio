import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import CircleAnimation from "./CircleAnimation";
import OnboardModal from "./Modal";
import { Portal } from "@gorhom/portal";
import { useWebMediaQueries } from "./useWebMediaQueries";
import { Content } from "./Content";

const VIEW_SIZE = 56;

const Circle = ({
  user,
  left,
  top,
  open,
  index,
  uri,
  radius,
  onGestureEvent,
  rotate,
  selected,
  selectCard,
}) => {
  const LeftValue = useSharedValue(0);
  const topValue = useSharedValue(0);
  const showName = useSharedValue(0);
  const [openOnboardModal, setOpenOnboardModal] = useState(false);
  const [openSignModal, setOpenSignModal] = useState(false);
  const circleAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = Math.ceil(rotate.value);
    const value = Math.sign(rotateValue);

    const halfRadius = radius / 2;

    let leftInterpolateValue = interpolate(
      LeftValue.value,
      [0, 1, 2],
      [left, halfRadius * 2, 200 - (open ? 100 : 0)]
    );

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
  const { isMobile } = useWebMediaQueries();

  useEffect(() => {
    if (open) {
      openedModal();
    } else {
      closedModal();
    }
  }, [open]);

  return (
    <>
      {/* {isMobile && selected && (
        <Portal>
          <OnboardModal
            openModal={openOnboardModal}
            openSignModal={openSignModal}
            setOpenModal={setOpenOnboardModal}
            setOpenSignModal={setOpenSignModal}
          />
        </Portal>
      )} */}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <TouchableOpacity
          // disabled={!open}
          onPress={() => {
            if (open) {
              selectCard(user.id);
            }
          }}
          activeOpacity={1}
        >
          <Animated.View style={[styles.userContainer, circleAnimatedStyle]}>
            <CircleAnimation selected={selected}>
              <Animated.Image
                style={styles.personImg}
                source={uri}
                resizeMode="contain"
              />
            </CircleAnimation>
            <View style={styles.applicationData}>
              <Animated.Text
                numberOfLines={1}
                style={[styles.userNameStyle, nameAnimatedStyle]}
              >
                {user.name}
              </Animated.Text>
              <Animated.Text style={[styles.userExperience, nameAnimatedStyle]}>
                {user.role}
              </Animated.Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </PanGestureHandler>
      {!isMobile && selected && <Content showName={showName} user={user} />}
    </>
  );
};

export default Circle;

const styles = StyleSheet.create({
  userContainer: {
    width: VIEW_SIZE,
    height: VIEW_SIZE,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    borderRadius: VIEW_SIZE,
    backgroundColor: "#212D30",
  },
  personImg: {
    width: VIEW_SIZE,
    height: VIEW_SIZE,
    borderRadius: VIEW_SIZE,
  },
  userNameStyle: {
    color: "#fff",
    fontFamily: "MontserratSemiBold",
  },
  userExperience: {
    color: "#fff",
    fontFamily: "MontserratRegular",
  },
  applicationData: {
    width: 200,
    left: 70,
    top: 0,
    bottom: 0,
    paddingVertical: 8,
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
