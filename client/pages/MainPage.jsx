import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../public/images/logo_icon.png")}
      />
      <Image
        style={styles.bell}
        source={require("../public/images/bell_icon.png")}
      />
      <Image
        style={styles.settings}
        source={require("../public/images/settings_icon.png")}
      />
      <Image
        style={styles.settings2}
        source={require("../public/images/settings_icon2.png")}
      />
      <Text style={styles.pfly}>PFLY</Text>
      <Card />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 36,
    height: 37,
    marginTop: 38,
    marginLeft: 23,
  },

  pfly: {
    position: "absolute",
    top: 41,
    left: 70,
    fontSize: 24,
  },

  bell: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 44,
    right: 124,
  },

  settings: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 44,
    right: 74,
  },

  settings2: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 44,
    right: 25,
  },
});
