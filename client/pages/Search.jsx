import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Footer } from "../components/Footer";
import { SkillCard } from "../components/SkillCard";
import { gStyles } from "../styles/style";

export const Search = () => {
  const [text, setText] = useState("");
  const katigories = ["frontend", "backend"];

  const search = (text) => {
    setText(text);

    for (let i = 0; i < katigories.length; i++) {
      if (text === katigories[i]) console.log(true);
    }

    console.log(text);
  };

  return (
    <>
      <View style={styles.searchView}>
        <TextInput
          placeholder="Поиск"
          style={styles.searchInput}
          onChangeText={(text) => search(text)}
        />
      </View>
      <View style={styles.cardsBlock}>
        <SkillCard text="frontend" />
        <SkillCard text="backend" />
      </View>
      <View style={styles.cardsBlock}>
        <SkillCard text="frontend" />
        <SkillCard text="backend" />
      </View>
      <View style={styles.cardsBlock}>
        <SkillCard text="frontend" />
        <SkillCard text="backend" />
      </View>
      <View style={styles.cardsBlock}>
        <SkillCard text="frontend" />
        <SkillCard text="backend" />
      </View>
      <View style={gStyles.footer}>
        <Footer />
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

  cardsBlock: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
