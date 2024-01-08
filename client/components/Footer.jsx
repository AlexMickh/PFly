import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Footer = () => {
  const navigation = useNavigation();

  const moveToHome = () => {
    navigation.navigate("MainPage");
  };

  const moveToSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => moveToHome()}>
        <Image
          style={styles.home}
          source={require("../public/images/home_icon.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.chat}
        source={require("../public/images/chat_icon.png")}
      />
      <TouchableOpacity onPress={() => moveToSearch()}>
        <Image
          style={styles.search}
          source={require("../public/images/search_icon.png")}
        />
      </TouchableOpacity>
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
