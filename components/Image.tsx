import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../App";

export const ImageComponent = ({ images }: { images: string[] }) => {
  if (images.length === 0) return null;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      centerContent
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image) => (
        <View style={styles.imageContainer}>
          <Image
            key={image}
            style={styles.image}
            resizeMode="stretch"
            source={{
              uri: image,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 16,
    flexDirection: "row",
    transform: [{ scaleX: 1 }],
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
