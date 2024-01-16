import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { width } from "../App";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const ImageComponent = ({
  images,
  showImageModal,
  setShowImageModal,
  layout,
}: {
  images: string[];
  showImageModal: boolean;
  setShowImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  layout: {
    width: number;
    height: number;
  };
}) => {
  // const fullWidth = useSharedValue(130);
  // const fullHeight = useSharedValue(200);
  // const [activeIndex, setActiveIndex] = useState("");
  // const fullScreenAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     width: fullWidth.value,
  //     height: fullHeight.value,
  //   };
  // });

  // function animationHandler(image: string) {
  //   if (!showImageModal) {
  //     fullWidth.value = withTiming(layout.width, { duration: 500 });
  //     fullHeight.value = withTiming(layout.height - 40, { duration: 500 });
  //     setActiveIndex(image);
  //     setShowImageModal((t) => !t);
  //   } else {
  //     fullWidth.value = withTiming(130, { duration: 500 });
  //     fullHeight.value = withTiming(200, { duration: 500 });
  //     setTimeout(() => {
  //       setActiveIndex("");
  //       setShowImageModal((t) => !t);
  //     }, 400);
  //   }
  // }
  if (images.length === 0) return null;
  return (
    <ScrollView
      // style={{ overflow: showImageModal ? "visible" : "scroll" }}
      contentContainerStyle={styles.container}
      centerContent
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image) => (
        // <TouchableOpacity
        //   key={image}
        //   activeOpacity={0.7}
        //   onPress={() => {
        //     animationHandler(image);
        //   }}
        // >
        <Animated.View
          key={image}
          style={[
            styles.imageContainer,
            // activeIndex === image && fullScreenAnimatedStyle,
            // {
            //   display:
            //     activeIndex !== image && showImageModal ? "none" : "flex",
            // },
          ]}
        >
          <Animated.Image
            style={styles.image}
            resizeMode={"stretch"}
            source={{
              uri: image,
            }}
          />
        </Animated.View>
        // </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: 0,
    columnGap: 16,
    flexDirection: "row",
    transform: [{ scaleX: 1 }],
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 130,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "white",
  },
});
