import db from "./database";
import { call } from "react-native-reanimated";

const api = {
  findUser: async (name) => {
    const u = await db
      .database()
      .ref("users")
      .orderByChild("name")
      .equalTo(name)
      .once("value");

    if (u.exists()) {
      return Object.values(u.val())[0];
    }

    return null;
  },

  saveUser: async (user) => {
    db.database().ref("users").push(user);
  },

  saveMessage: async (message) => {
    db.database().ref("messages").push(message);
  },

  updateMessages: async (callback) => {
    db.database()
      .ref("messages")
      .limitToLast(20)
      .on("child_added", (snapshot) => {
        callback(parse(snapshot));
      });
  },
};

const parse = (snapshot) => {
  const { createdAt, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const message = { _id, createdAt, text, user };
  return message;
};

export default api;
