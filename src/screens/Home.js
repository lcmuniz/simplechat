import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Actions } from "react-native-router-flux";
import api from "../api";

const Home = (props) => {
  const [name, setName] = useState("");

  const onNext = async () => {
    let user = await api.findUser(name);

    if (user === null) {
      user = {
        _id: new Date().getTime(),
        name,
        avatar: "https://placeimg.com/140/140/any",
      };
      await api.saveUser(user);
    }

    Actions.chat({ user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your name: </Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity onPress={onNext}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    marginTop: 10,
    fontSize: 20,
  },
});
export default Home;
