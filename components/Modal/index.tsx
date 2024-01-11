import React, { useEffect, useRef } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { height } from "../../App";
import { CloseIcon } from "../icons";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  openSignModal: boolean;
  openModal: boolean;
  setOpenModal(openMenu: boolean): void;
  setOpenSignModal(openMenu: boolean): void;
}

export default function OnboardModal({
  openModal,
  openSignModal,
  setOpenModal,
}: Props) {
  const containerTranslateY = useSharedValue(-height - height / 2);
  const contentBottom = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    containerTranslateY.value = withSpring(
      openModal ? 0 : -height - height / 2,
      {
        damping: 17,
      }
    );
  }, [openModal]);

  const closeIconAnimatedStyle = useAnimatedStyle(() => {
    const topStyle = interpolate(scale.value, [0, 1], [0, 1]);
    return {
      opacity: topStyle,
    };
  });

  useEffect(() => {
    contentBottom.value = withSpring(openSignModal ? 100 : 0, { damping: 17 });
    scale.value = withSpring(openSignModal ? 0 : 1, { damping: 17 });
  }, [openSignModal]);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: containerTranslateY.value }] };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    bottom: contentBottom.value,
  }));
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <LinearGradient
        colors={["#BB55F0", "#13CDA9"]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearStyle}
      >
        <BlurView intensity={50} style={styles.content}>
          <Text style={{ color: "red" }}>{"sdb sajh bdkas"}</Text>

          <AnimatedPressable
            onPress={() => setOpenModal(false)}
            style={[styles.closeButton]}
          >
            <CloseIcon />
          </AnimatedPressable>
        </BlurView>
      </LinearGradient>
    </Animated.View>
  );
}
