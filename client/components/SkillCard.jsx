import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SkillCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Hello, {props.skill}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
