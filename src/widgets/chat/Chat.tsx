"use client";

import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import styles from "./styles.module.scss";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div
      className={`${styles.chatContainer} flex flex-col w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden`}
    >
      <div className={`flex-1 p-4 overflow-y-auto flex flex-col gap-2`}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} p-2 rounded-lg max-w-xs self-end`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className={`button ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600`}
        >
          <PaperAirplaneIcon className="size-6 text-white" />
        </button>
      </div>
    </div>
  );
}
