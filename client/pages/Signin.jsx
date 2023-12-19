import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export const Signin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validator = (login, password) => {
    if (login.length < 5 || password.length < 5) {
      Alert.alert("Заполните все поля");
      return false;
    } else console.log("Work");
    return true;
  };

  const foo = (login, password) => {
    if (validator(login, password)) navigation.navigate("MainPage");
    else console.log("Error");
  };

  const ref = () => {
    navigation.navigate("Sign");
  };

  return (
    <View style={styles.conteiner}>
      <Text style={styles.mainText}>Регистрация</Text>
      <TextInput
        placeholder="Введите логин"
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        textContentType="password"
        placeholder="Введите пароль"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Text style={styles.text} onPress={() => ref()}>
        Нет акаунта? Зарегистрироваться
      </Text>
      <Button title={"Готово"} onPress={() => foo(username, password)} />
      <Text style={styles.text2}>h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    marginTop: 150,
    marginBottom: 50,
    marginLeft: 155,
    marginRight: 150,
    color: "#fff",
  },

  input: {
    marginBottom: 50,
    marginLeft: 100,
    marginRight: 100,
    color: "#111",
    backgroundColor: "#fff",
  },

  confirmButton: {
    marginTop: 50,
  },

  text: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 115,
    marginRight: 115,
    color: "#fff",
  },

  text2: {
    marginBottom: 255,
    color: "#111",
  },

  conteiner: {
    backgroundColor: "#111",
  },
});
