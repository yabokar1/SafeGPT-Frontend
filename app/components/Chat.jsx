"use client";

import React from "react";
import Message from "./Message.jsx";
import Input from "./Input.jsx";
import { fetchOpenAI, fetchAnonymizeData } from "../api.js";
import { useState } from "react";

export default function Chat() {
  const initialPrompt = {
    input: "Please provide the private data you want to be anonmyized",
    response: "",
  };
  const [chatHistory, setChatHistory] = useState([initialPrompt]);
  const [anonmyizeData, setAnonmyizedData] = useState("");

  async function handleChatMessages(message) {
  
    const response = await fetchAnonymizeData(message, anonmyizeData);
    

    if (chatHistory[0].response === "") {
      setChatHistory((chats) => {
        const chat = [...chats][0];
        chat.response = response.data.message;
        console.log(chat.response);
        return [chat];
      });

      setAnonmyizedData(response.data.message);
    } else {
      setChatHistory((chats) => {
        return [
          ...chats,
          {
            input: message,
            response: response.data.message,
          },
        ];
      });
    }
  }

  // console.log(chatHistory);
  return (
    <div className="flex h-[97vh] w-full flex-col">
      <Message messages={chatHistory} />
      <Input onChatMessages={handleChatMessages} />
    </div>
  );
}
