import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.home}
        source={require("../public/images/home_icon.png")}
      />
      <Image
        style={styles.chat}
        source={require("../public/images/chat_icon.png")}
      />
      <Image
        style={styles.search}
        source={require("../public/images/search_icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: 430,
    height: 70,
    backgroundColor: "#B5B5B5",
    position: "absolute",
    bottom: 65,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 20,
  },

  home: {
    width: 67,
    height: 68,
    position: "absolute",
    top: 1.5,
    left: 58,
  },

  chat: {
    width: 67,
    height: 68,
    position: "absolute",
    top: 1.5,
    left: 286,
  },

  search: {
    width: 67,
    height: 68,
    position: "absolute",
    top: 1.5,
    left: 170,
  },
});
