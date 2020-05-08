import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import api from "../api";

const Chat = (props) => {
  const { user } = props.navigation.state.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.disableYellowBox = true;
    api.updateMessages((msg) => {
      setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
    });
  }, []);

  const onSend = async (msgs) => {
    msgs.forEach((msg) => {
      const { text, user } = msg;
      const message = { text, user, createdAt: new Date().getTime() };
      api.saveMessage(message);
    });
  };

  return <GiftedChat messages={messages} user={user} onSend={onSend} />;
};

export default Chat;
