"use client";

import React from "react";
import Message from "./Message.jsx";
import Input from "./Input.jsx";
import fetchOpenAI from "../Api.js";
import { useState } from "react";

export default function Chat() {
  const [chatHistory, setChatHistory] = useState([]);

  async function handleChatMessages(message) {
    const res = await fetchOpenAI(message);
    console.log(res.choices[0].message.content);
    const response = res.choices[0].message.content;

    setChatHistory((chats) => {
      return [
        ...chats,
        {
          input: message,
          response: response,
        },
      ];
    });
  }

  console.log(chatHistory);
  return (
    <div className="flex h-[97vh] w-full flex-col">
      <Message messages={chatHistory} />
      <Input onChatMessages={handleChatMessages} />
    </div>
  );
}
