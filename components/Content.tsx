import React, { useEffect, useState } from "react";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import RenderHTML from "react-native-render-html";
import { ImageComponent } from "./Image";
import { IUser } from "../user";

type ContentProps = {
  user: IUser;
  showName: Animated.SharedValue<number>;
};
export function Content(props: ContentProps) {
  const { user, showName } = props;

  const [layout, setLayout] = useState({} as any);
  const descriptionOpacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const source = {
    html: `${user.description}`,
  };
  const [showImageModal, setShowImageModal] = useState(false);
  const contentAnimatedStyle = useAnimatedStyle(() => {
    let opacity = interpolate(showName.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
  // const descriptionAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: descriptionOpacity.value,
  //     transform: [{ translateY: translateY.value }],
  //   };
  // });
  // useEffect(() => {
  //   descriptionOpacity.value = withTiming(showImageModal ? 0 : 1, {
  //     duration: 200,
  //   });
  //   translateY.value = withTiming(showImageModal ? -100 : 0, {
  //     duration: 200,
  //   });
  // }, [showImageModal]);

  return (
    <Animated.View
      style={[styles.contentContainer, contentAnimatedStyle]}
      onLayout={({
        nativeEvent: {
          layout: { height, width },
        },
      }: any) => {
        setLayout({ height, width });
      }}
    >
      <Animated.View>
        <RenderHTML
          contentWidth={200}
          baseStyle={{
            fontSize: 16,
            lineHeight: 24,
            paddingHorizontal: 16,
            color: "white",
          }}
          allowedStyles={["fontFamily"]}
          source={source}
        />
      </Animated.View>
      <ImageComponent
        images={user.images || []}
        setShowImageModal={setShowImageModal}
        showImageModal={showImageModal}
        layout={layout}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "64%",
    height: Dimensions.get("window").height - 100,
    position: "absolute",
    top: 100,
    left: 366,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,
  },
});
