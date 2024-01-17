import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Footer } from "../components/Footer";
import { gStyles } from "../styles/style";

export const Chat = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Чаты</Text>
      </View>
      <View style={gStyles.footer}>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#c3c3c3",
    height: "10%",
    justifyContent: "space-around",
  },

  text: {
    alignSelf: "center",
  },
});
