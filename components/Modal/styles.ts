import { Dimensions, Platform, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
const CARD_WIDTH = width - 48;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    top: 0,
    position: "absolute",
    backgroundColor: "white",
    zIndex: 800,
  },
  content: {
    width: CARD_WIDTH - 16,
    height: height-48,
    padding: 24,
    marginTop: 24,
    alignSelf: "center",
    borderRadius: 16,
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 24,
    backgroundColor: "#212D30",
    width: 40,
    height: 40,
    borderRadius: 40,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  linearStyle: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
});
