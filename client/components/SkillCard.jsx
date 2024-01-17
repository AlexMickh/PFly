import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SkillCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#c3c3c3",
    height: 137,
    width: "40%",
    margin: "5%",
    justifyContent: "space-around",
  },

  text: {
    alignSelf: "center",
  },
});
