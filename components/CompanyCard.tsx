import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LogoSvg } from "./icons";
import RenderHTML from "react-native-render-html";
import { useWebMediaQueries } from "./useWebMediaQueries";
const LOGO_HALF_WIDTH = 54;

const source = {
  html: `
  <p>
    Highly skilled and dedicated React Native Developer with 4 years of experience in developing high performance and
    user-friendly mobile applications. My strong motivation and creative mindset enable me to approach challenges with
    innovative solutions, while my passion for learning ensures I stay up-to-date with the latest industry trends and
    technologies.
  </p>
  <p>
    Seeking a challenging role as a React Native Developer to contribute my expertise and drive innovation in a dynamic
    software development team.
  </p>
  <p>
    Email: <a href="mailto:sssajjad.76@gmail.com">sssajjad.76@gmail.com</a>
    <br>
    LinkedIn: <a href="https://www.linkedin.com/in/sajjad-seyfollah">www.linkedin.com/in/sajjad-seyfollah</a>
    <br>
    GitHub: <a href="https://github.com/sssajjad007">https://github.com/sssajjad007</a>
  </p>
  `,
};

const CompanyCard = () => {
  const { isMobile } = useWebMediaQueries();

  return (
    <>
      <LinearGradient
        colors={["#BB55F0", "#13CDA9"]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearStyle}
      />

      <View style={[styles.cardContainer, { height: isMobile ? 410 : 310 }]}>
        <View
          style={{
            width: 104,
            height: 104,
            borderRadius: 54,
            position: "absolute",
            top: -52,
            left: LOGO_HALF_WIDTH + 2,
            zIndex: 2,
          }}
        >
          <Image
            source={require("./me.jpg")}
            resizeMode="center"
            style={{
              width: 104,
              height: 104,
              borderRadius: 54,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 3,
              overflow: "hidden",
            }}
          />
        </View>
        <LogoSvg style={styles.logoStyle} />

        <Text style={styles.textStyle}></Text>

        <ScrollView style={{ paddingHorizontal: 24 }}>
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
        </ScrollView>
      </View>
    </>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 310,
    backgroundColor: "#192126",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  linearStyle: {
    height: 76,
    marginTop: 45,
    width: "90%",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  commonTextStyle: {
    color: "#7EA19B",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 14,
    fontFamily: "MontserratSemiBold",
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 2,
    color: "#fff",
    marginTop: 42,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
  },
  logoStyle: {
    top: -54,
    position: "absolute",
    left: LOGO_HALF_WIDTH,
  },
});
