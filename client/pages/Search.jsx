import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Footer } from "../components/Footer";
import { SkillCard } from "../components/SkillCard";

export const Search = () => {
  return (
    <>
      <View style={styles.searchView}>
        <TextInput placeholder="Поиск" style={styles.searchInput} />
      </View>
      <SkillCard />
      <View style={styles.footer}>
        <Footer skill="frontend" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: "#C3C3C3",
  },

  searchInput: {
    marginTop: 16,
    alignSelf: "center",
    width: 250,
    height: 40,
    marginBottom: 16,
    backgroundColor: "#fff",
    color: "#000",
  },

  footer: {
    position: "absolute",
    bottom: -62,
  },
});
