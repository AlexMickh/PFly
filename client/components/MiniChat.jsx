import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const MiniChat = (props) => {
  return (
    <View style={styles.conteiner}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#c3c3c3",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 20,
    width: "100%",
    height: "9%",
  },
});
