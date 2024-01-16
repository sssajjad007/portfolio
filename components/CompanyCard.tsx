import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
import { LogoSvg } from "./icons";
import RenderHTML from "react-native-render-html";

const LOGO_HALF_WIDTH = 54;

{
  /* <ul>
<li>Strong proficiency in <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Expo</strong>, and related libraries/frameworks</li>
<li>In-depth knowledge of mobile <strong>UI/UX design principles</strong> and best practices</li>
<li>Theoretical and practical skill with <strong>OOP</strong>, <strong>RESTful API</strong>, design patterns, architectural patterns relevant to my field</li>
<li>Experience with <strong>Mobile Debugging tools</strong>, <strong>firebase</strong>, <strong>sentry</strong></li>
<li>E2E testing with <strong>Maestro</strong></li>
<li>Experience working with <strong>Animations library</strong> like <strong>Reanimated</strong>, <strong>Skia</strong>, <strong>Rive</strong>, and <strong>lottie</strong></li>
<li>Familiar with <strong>Kotlin/Native</strong> and <strong>Android Studio</strong>, <strong>Xcode</strong>, <strong>gradle</strong></li>
<li>Solid understanding of software development lifecycle and agile methodologies</li>
<li><strong>Azure</strong>, <strong>Jira</strong>, <strong>Github</strong>, <strong>Gitlab</strong></li>
</ul> */
}

const source = {
  html: `
<p> Highly skilled and dedicated React Native Developer with 4 years of experience in developing high performance and
user-friendly mobile applications. My strong motivation and creative mindset enable me to approach challenges with
innovative solutions, while my passion for learning ensures I stay up-to-date with the latest industry trends and
technologies.
Seeking a challenging role as a React Native Developer to contribute my expertise and drive innovation in a dynamic
software development team.</p>
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
  return (
    <>
      <LinearGradient
        colors={["#BB55F0", "#13CDA9"]}
        start={{ x: -0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearStyle}
      />

      <View style={styles.cardContainer}>
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

        <View style={{ paddingHorizontal: 24 }}>
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
        </View>
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
