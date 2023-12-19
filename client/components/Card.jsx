import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Card = () => {
  return (
    <View>
      <View style={styles.card}>
        <Image
          style={styles.tinyLogo}
          source={require("../public/images/card_photo.png")}
        />
        <View style={styles.skilsConteiner}>
          <Text style={styles.text}>Skills: C++ frontend Python Photoshop</Text>
          <Image
            style={styles.dislike1}
            source={require("../public/images/dislike_icon1.png")}
          />
          <Image
            style={styles.dislike2}
            source={require("../public/images/dislike_icon2.png")}
          />
          <Image
            style={styles.like1}
            source={require("../public/images/like_icon1.png")}
          />
          <Image
            style={styles.like2}
            source={require("../public/images/like_icon2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: 394,
    height: 832,
  },

  tinyLogo: {
    alignSelf: "center",
    marginTop: 100,
    width: 350,
    height: 600,
  },

  skilsConteiner: {
    position: "absolute",
    bottom: 138,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 350,
    height: 180,
  },

  dislike1: {
    width: 60,
    height: 60,
    marginTop: 35,
    marginLeft: 30,
  },

  dislike2: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 125,
    left: 45,
  },

  like1: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 109,
    right: 30,
  },

  like2: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 125,
    right: 45,
  },

  text: {
    color: "#fff",
    fontSize: 30,
  },
});
